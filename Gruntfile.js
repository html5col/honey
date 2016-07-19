/**
 * Created by frank25184 on 7/16/16.
 */
module.exports = function(grunt){
    //load plugins
    [
        'grunt-cafe-mocha',//use it to run tests about crosspage and logic
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });
    
   // setting plugins
    grunt.initConfig({
        //default folder
        paths: {
            js: 'public/javascripts',
            sass: 'public/stylesheets/sass',
            css: 'public/stylesheets/css',
            img: 'public/images',

        },
        pkg: grunt.file.readJSON('package.json'),
//grunt.file.readJSON('package.json') imports the JSON metadata stored in package.json into the grunt config. Because <% %> template strings may reference any config properties, configuration data like filepaths and file lists may be specified this way to reduce repetition.


        // cafemocha:{
        //     all:{src: ['<%= paths.js %>/cross-test/tests-*.js','<%= paths.js %>/logic-test/tests-*.js'], options: {ui:'tdd'},}
        // },
        jshint:{
            app: ['app.js','<%= paths.js %>/**/main.js']
            //qa: ['Gruntfile.js','<%= paths.js %>/*-test/**/*.js']
        },
        // exec:{
        // exec:{
        //     linkchecker:
        //               {cmd: 'linkchecker http://localhost:8000'}
        // }


        concat: {//combine js
            options: {
                stripBanners: true,
                // banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                // '<%= grunt.template.today("yyyy-mm-dd") %> */',
                process:false,
                separator:' '
                //Concatenated files will be joined on this string. If you're post-processing concatenated JavaScript files with a minifier, you may need to use a semicolon ';\n' as the separator.
            },

            basic: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'js/common/_global.js',
                    'js/common/_es5-shim.js',
                    'js/common/_compatible.js',
                    'js/common/_tools.js',
                    '<%= paths.js %>/home/**/*.js'],
                dest: '<%= paths.js %>/home.js',
                nonull: true
            },
            page: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'js/common/_global.js',
                    'js/common/_es5-shim.js',
                    'js/common/_compatible.js',
                    'js/common/_tools.js',
                    'js/modules/*.js',
                    // 'bower_components/what-input/what-input.js',
                    //'bower_components/foundation-sites/js/foundation.core.js',
                    //'bower_components/foundation-sites/js/foundation.util.*.js',
                    // 'bower_components/foundation-sites/js/foundation.util.keyboard.js',
                    // 'bower_components/foundation-sites/js/foundation.util.motion.js',
                    // 'bower_components/foundation-sites/js/foundation.util.nest.js',




                    // // Paths to individual JS components defined below
                    // 'bower_components/foundation-sites/js/foundation.abide.js',
                    //'bower_components/foundation-sites/js/foundation.accordion.js',
                    // 'bower_components/foundation-sites/js/foundation.accordionMenu.js',
                    // 'bower_components/foundation-sites/js/foundation.drilldown.js',
                    // 'bower_components/foundation-sites/js/foundation.dropdown.js',
                    //'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
                    // 'bower_components/foundation-sites/js/foundation.equalizer.js',
                    // 'bower_components/foundation-sites/js/foundation.interchange.js',
                    // 'bower_components/foundation-sites/js/foundation.magellan.js',
                    // 'bower_components/foundation-sites/js/foundation.offcanvas.js',
                    // 'bower_components/foundation-sites/js/foundation.orbit.js',
                    // 'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
                    // 'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
                    // 'bower_components/foundation-sites/js/foundation.reveal.js',
                    // 'bower_components/foundation-sites/js/foundation.slider.js',
                    //'bower_components/foundation-sites/js/foundation.sticky.js',
                    // 'bower_components/foundation-sites/js/foundation.tabs.js',
                    // 'bower_components/foundation-sites/js/foundation.toggler.js',
                    // 'bower_components/foundation-sites/js/foundation.tooltip.js',
                    // 'src/assets/js/!(app.js)**/*.js',
                    //'js/app.js',
                    //'js/home/**/*.js',

                    '<%= paths.js %>/page/*.js',
                    '<%= paths.js %>/page/**/*.js'
                    //'<%= paths.js %>/ckeditor/plugins/codesnippet/lib/highlight/highlight.pack.js',
                    // '<%= paths.js %>/tinymce/tinymce.min.js'

                ],
                dest:'<%= paths.js %>/page.js',
                nonull: true
            },
            play: {
                src: [
                    '<%= paths.js %>/common/_global.js',
                    '<%= paths.js %>/common/_es5-shim.js',
                    '<%= paths.js %>/common/_compatible.js',
                    '<%= paths.js %>/common/_tools.js',
                    '<%= paths.js %>/play/*.js'
                    // '<%= paths.js %>/ckeditor/plugins/codesnippet/lib/highlight/highlight.pack.js',
                ],
                dest:'<%= paths.js %>/play.js',
                nonull: true
            },

            // editor: {
            //         src: [
            //             '<%= paths.js %>/ckeditor/ckeditor.js',
            //             '<%= paths.js %>/_ckeditor.js',
            //             ],
            //         dest:'<%= paths.js %>/editor.js',
            //         nonull: true
            // }
        },











    });

    //regiter task
    grunt.registerTask('default', ['jshint']);
};