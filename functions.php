<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_script( 'slide-fade-section', get_stylesheet_directory_uri() . '/js/slide-fade-section.js', '1.0', array( 'strategy'  => 'defer', ), true );
    wp_enqueue_script( 'slide-title', get_stylesheet_directory_uri() . '/js/slide-title.js', '1.0', array( 'strategy'  => 'defer', ), true );
    wp_enqueue_style( 'swipper-style', get_stylesheet_directory_uri() . '/assets/swipper/swipper-style.css' );
    wp_enqueue_script( 'swipper-framework', get_stylesheet_directory_uri() . '/assets/swipper/swipper-framework.js', '1.0', array( 'strategy'  => 'defer', ), true );
    wp_enqueue_script( 'slider-characters', get_stylesheet_directory_uri() . '/js/slider-characters.js', '1.0', array( 'strategy'  => 'defer', ), true );
    wp_enqueue_script( 'parallax-effect', get_stylesheet_directory_uri() . '/js/parallax-effect.js', '1.0', array( 'strategy'  => 'defer', ), true );
    wp_enqueue_script( 'menu-burger', get_stylesheet_directory_uri() . '/js/menu-burger.js', '1.0', array( 'strategy'  => 'defer', ), true );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}