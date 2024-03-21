<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp' );

/** Database username */
define( 'DB_USER', 'hhz' );

/** Database password */
define( 'DB_PASSWORD', '777426560' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'LMxJ)R}o55zQ&%o.m5(Dg@4l2+b@z,yN.AP[BiQ-{xyfn7)RZoC0K[ <F:rb`mW[' );
define( 'SECURE_AUTH_KEY',  '<Z6k`^2i~[PX7sl(#4q!*{wh-:,qu+iby gA3DxY!iA+0PYrj?$=oH$k`iDQ?xN8' );
define( 'LOGGED_IN_KEY',    ',_zXV>]F/md#=/f$5D#QyR2+&+`IDBc1E FA4G*L<V jRU~$%*L,#@_>:GL~D%sv' );
define( 'NONCE_KEY',        'gkrX:}EJP1-&#c|mL<zHhwJN^vPY0>H+ykwfrO6(s4L7#v]GJ#OcM`2ZSA-)SVH9' );
define( 'AUTH_SALT',        's9(Cvn|M3%(u6#[qn/<%JQG_zmt2_@]MV%YE@uuHm,@[MW7_wac0k/YSc,ku~^z|' );
define( 'SECURE_AUTH_SALT', '_:/VO=1yf3NVZcI8;MPOQZQx&Sa~1)QAI-tf]:J@g6v)X0t&^{70i=7L6njR`1^Z' );
define( 'LOGGED_IN_SALT',   '@Qb 4u.7sk1G[+QpZ3%T$^tg]TG%Sb-(VHS<C#4Q+e>:M=X(OtE`q]EV6eu1kDT)' );
define( 'NONCE_SALT',       '^!C~^p_@6TC|Aq~CBr^<zYocG`8DCQ)CdzRn,`h+tUIU!$0.Ksq?2v^5b6!WBmd+' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
