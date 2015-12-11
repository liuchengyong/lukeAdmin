/**
 * Created by liu on 2015/11/30.
 */
module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat:{ //�ϲ�javaScript�ļ�
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
        jshint: { //js ���
            all: ['Gruntfile.js', 'js/lukeAdmin.js'],
        },
        uglify:{  // ѹ��javaScript����
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'js/lukeAdmin.js',
                dest: 'js/lukeAdmin.min.js'
            }
        },


        less:{ //����less
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
        autoprefixer: { // �Զ����css��׺
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
        csslint: {  // css���
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
    //���ز��


    //���js
    grunt.loadNpmTasks('grunt-contrib-concat');  // js�ļ��ϲ�
    grunt.loadNpmTasks('grunt-contrib-jshint');  //js�﷨���
    grunt.loadNpmTasks('grunt-contrib-uglify');  // javaScript����ѹ��


    //���css
    grunt.loadNpmTasks('grunt-contrib-less');    // less ����
    grunt.loadNpmTasks('grunt-autoprefixer');    //  css�������׺����
    grunt.loadNpmTasks('grunt-contrib-csslint'); // css �����ѯ
    grunt.loadNpmTasks('grunt-csscomb');  //css����
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //cssѹ��

    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask("js",['concat','uglify']);  // ����js
    grunt.registerTask("style",['less','autoprefixer','csscomb','cssmin']);  // ����css
    grunt.registerTask('www',['watch']); //����watch



};