angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("ckeditor/plugins/preview/preview.html","<script>\n\n// Prevent from DOM clobbering.\nif ( typeof window.opener._cke_htmlToLoad == 'string' ) {\n	var doc = document;\n	doc.open();\n	doc.write( window.opener._cke_htmlToLoad );\n	doc.close();\n\n	delete window.opener._cke_htmlToLoad;\n}\n\n</script>")}]);