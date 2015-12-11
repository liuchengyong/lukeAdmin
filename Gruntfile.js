/**
 * Created by liu on 2015/11/30.
 */
module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat:{ //合并javaScript文件
            options:{
                separator:'\n\n\n\n\n',
            },
            lukeAdmin:{
                src:[
                    'js/side.js',
                ],
                dest:'js/lukeAdmin.js',
            },
        },
        jshint: { //js 差错
            all: ['Gruntfile.js', 'js/lukeAdmin.js'],
        },
        uglify:{  // 压缩javaScript代码
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'js/lukeAdmin.js',
                dest: 'js/lukeAdmin.min.js'
            }
        },


        less:{ //编译less
            development:{
              options:{
                  strictMath: true,
                  sourceMap: true,
                  outputSourceFiles: true,
                  sourceMapURL: 'css/<%= pkg.name %>.css.map',
                  sourceMapFilename: 'css/<%= pkg.name %>.css.map'
              },
              files:{
                  "css/lukeAdmin.css":"less/lukeAdmin.less",
              },

            },
        },
        autoprefixer: { // 自动添加css后缀
            options: {
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                ],
            },
            development: {
                options:{
                    map:true,
                },
                src:"css/lukeAdmin.css"
            },
        },
        csslint: {  // css差错
            options: {
                csslintrc: 'css/.csslintrc'
            },
            dist: [
                'css/lukeAdmin.css',
            ],
        },
        csscomb: {
            options: {
                config: 'css/.csscomb.json',
            },
            dist: {
                files:{
                    'css/lukeAdmin.css':'css/lukeAdmin.css',
                }
            }
        },
        cssmin: {
            options: {
                // TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
                //    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false
            },
            dist: {
                src: 'css/lukeAdmin.css',
                dest: 'css/lukeAdmin.min.css'
            }
        },
        watch: {
            css: {
                files: ['css/lukeAdmin.css'],
                tasks: ['autoprefixer:development','csscomb:dist',],
            },
            js: {
                files: ['js/side.js'],
                tasks: ['concat'],
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        },


    });
    //加载插件


    //打包js
    grunt.loadNpmTasks('grunt-contrib-concat');  // js文件合并
    grunt.loadNpmTasks('grunt-contrib-jshint');  //js语法差错
    grunt.loadNpmTasks('grunt-contrib-uglify');  // javaScript代码压缩


    //打包css
    grunt.loadNpmTasks('grunt-contrib-less');    // less 编译
    grunt.loadNpmTasks('grunt-autoprefixer');    //  css浏览器后缀兼容
    grunt.loadNpmTasks('grunt-contrib-csslint'); // css 错误查询
    grunt.loadNpmTasks('grunt-csscomb');  //css排序
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //css压缩

    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask("js",['concat','uglify']);  // 生成js
    grunt.registerTask("style",['less','autoprefixer','csscomb','cssmin']);  // 生成css
    grunt.registerTask('www',['watch']); //生成watch



};