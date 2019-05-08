<?php
/**
 * The right sidebar containing the main widget area.
 *
 * @package understrap
 */

if ( ! is_active_sidebar( 'right-sidebar' ) ) {
	return;
}

// when both sidebars turned on reduce col size to 3 from 4.
$sidebar_pos = get_theme_mod( 'understrap_sidebar_position' );
?>

<?php if ( 'both' === $sidebar_pos ) : ?>
<div class="col-md-3 widget-area" id="right-sidebar" role="complementary">
	<div class="embed-tools">
		<!--<button id="preview-embed">Preview</button>-->
		<button class="btn btn-primary" id="copy-embed-button">Copy Embed Code</button>
		<input id="lms-embed-code" value="<iframe frameborder='0' scrolling='no' width='100%' height='auto' src='<?php echo get_permalink();?>?show=article'></iframe>
	  <script async src='https://rampages.us/extras/js/set-iframe-height-parent-min.js'></script>">
		</div>

	<?php else : ?>
<div class="col-md-4 widget-area" id="right-sidebar" role="complementary">
	<div class="embed-tools">
		<!--<button id="preview-embed">Preview</button>-->
		<button class="btn btn-primary" id="copy-embed-button">Copy Embed Code</button>
	    <input id="lms-embed-code" value="<iframe frameborder='0' scrolling='no' width='100%' height='auto' src='<?php echo get_permalink();?>?show=article'></iframe>
	  <script async src='https://rampages.us/extras/js/set-iframe-height-parent-min.js'></script>">
	</div>
	<?php endif; ?>
<?php dynamic_sidebar( 'right-sidebar' ); ?>

</div><!-- #secondary -->


<!--
 <iframe frameborder='0' scrolling='no' width='100%' height='auto' src='https://rampages.us/widgets/sample-page/?show=article'></iframe>
  <script async src='https://rampages.us/extras/js/set-iframe-height-parent-min.js'>
  </script>
-->