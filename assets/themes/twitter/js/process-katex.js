/**
 * Replace  mathjax directives with katex directives to render latex equations
 */
$("script[type='math/tex']").replaceWith(
    function () {
        var tex = $(this).text();
        // remove CDATA appended when using & in align
        tex = tex.replace(/^\%\s*<!\[CDATA\[\s*([\s\S]*)\s*\%\]\]>\s*$/m, "$1");
        return "<span class=\"inline-equation\">" +
            katex.renderToString(tex) +
            "</span>";
    });

$("script[type='math/tex; mode=display']").replaceWith(
    function () {
        var tex = $(this).text();
        // remove CDATA appended when using & in align
        tex = tex.replace(/^\%\s*<!\[CDATA\[\s*([\s\S]*)\s*\%\]\]>\s*$/m, "$1");
        return "<div class=\"equation\">" +
            katex.renderToString("\\displaystyle " + tex) +
            "</div>";
    });