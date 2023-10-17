<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <video class="banner--video" autoplay="autoplay" type="video/mp4" loop="true" muted="true" src="wp-content/themes/foce-child/assets/videos/banner.mp4"></video>
            <img class="logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </section>
        <section id="story" class="story">
            <article id="" class="story__article">
                <h2 class="story__article--title">L'histoire</h2>
                <p class="story__article--paragraph"><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters" class="story__characters">
                <div class="swiper story__characters--slider">
                    <h3 class="story__characters--title">Les personnages</h3>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <?php
                            $main_character = $characters_query->posts[0];
                            echo '<figure>';
                            echo get_the_post_thumbnail( $main_character->ID, 'full' );
                            echo '<figcaption>'. $main_character->post_title . '</figcaption>';
                            echo '</figure>';
                            $characters_query->next_post();
                            ?>      
                        </div>
                        <?php
                        while ( $characters_query->have_posts() ) {
                            $characters_query->the_post();
                            echo '<div class="swiper-slide">';
                            echo '<figure>';
                            echo get_the_post_thumbnail( get_the_ID(), 'full' );
                            echo '<figcaption>';
                            the_title();
                            echo'</figcaption>';
                            echo '</figure>';
                            echo '</div>';
                        }
                        ?> 
                    </div>
                </div>    
            </article>
            <article id="place" class="story__place">
                <div>
                    <h3 class="story__place--title">Le Lieu</h3>
                    <p class="story__place--paragraph"><?php echo get_theme_mod('place'); ?></p>
                </div>
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big-cloud.png'; ?>" class="story__place--big-cloud">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little-cloud.png'; ?>" class="story__place--little-cloud">
            </article>
        </section>
        <section id="studio" class="studio">
            <h2 class="studio--title">Studio Koukaki</h2>
            <div>
                <p class="studio--paragraph">Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p class="studio--paragraph">Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>
        <section id="oscars" class="oscars">
            <div class="oscars__div">
                <h2 class="oscars__div--title">Fleurs d’oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</h2>
                <img class="oscars__div--image" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/oscars.png'; ?>" alt="oscars short film animated">
            </div>
        </section>
    </main><!-- #main -->

<?php
get_footer();
