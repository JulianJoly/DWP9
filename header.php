<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>
	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title"><?php bloginfo( 'name' ); ?></a>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="menu-close">x</span>
            </button>
            <ul style="opacity: 0;">
                <li class="site-link"><a href="#story">Histoire</a></li>
                <li class="site-link"><a href="#characters">Personnages</a></li>
                <li class="site-link"><a href="#place">Lieu</a></li>
                <li class="site-link"><a href="#studio">Studio Koukaki</a></li>
                <li class="main-navigation__link--banner"><a href="#">STUDIO KOUKAKI</a></li>
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/jaakuna.png'; ?>" class="nav-menu__bg--jaakuna">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/kawaneko.png'; ?>" class="nav-menu__bg--kawaneko">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/onejiiro.png'; ?>" class="nav-menu__bg--onejiiro">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nav-logo.png'; ?>" class="nav-menu__bg--logo">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/flower.png'; ?>" class="nav-menu__bg--flowers">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/hibiscus_footer.png'; ?>" class="nav-menu__bg--hibiscus">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/orchid.png'; ?>" class="nav-menu__bg--orchid">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/random_flower.png'; ?>" class="nav-menu__bg--flower">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/Sunflower.png'; ?>" class="nav-menu__bg--sunflower">
            </ul>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
