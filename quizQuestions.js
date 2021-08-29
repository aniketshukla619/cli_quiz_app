const questionsLibrary = {
    HTML: {

        level1: [
            {
                question: "What does HTML stand for?",
                options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language"],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "Who is making the web standards?",
                options: ["Google", "Microsoft", "Mozilla", "The World Wide Web Consortium"],
                answer: "The World Wide Web Consortium"
            },
            {
                question: "Choose the correct HTML element for the largest heading:",
                options: ["<h1>", "<head>", "<heading>", "<h6>"],
                answer: "<h1>"
            },
            {
                question: "What is the primary purpose of HTML?",
                options: ["HTML is responsible for the structure, styling, and interactivity of webpages.", "HTML structures the webpage, identifying its elements such as paragraphs, headings, and lists.", "HTML is responsible for the structure and styling of webpages.", "HTML structures and provides a rudimentary look to webpages."],
                answer: "HTML structures the webpage, identifying its elements such as paragraphs, headings, and lists."
            },
            {
                question: "What does the tag do?",
                options: ["It formats a sentence to be easily breakable.", "It requires the browser to wrap the current line at that point.", "It breaks a word into two pieces, using a hyphen to connect the words.", "It presents an opportunity for a break in a very long word, if needed for proper page display."],
                answer: "It presents an opportunity for a break in a very long word, if needed for proper page display."
            },
            {
                question: "Which image formats can be displayed by all web browsers?",
                options: ["JPG, GIF, TIF", "PNG, GIF, JPG", "JPG, TIF, BMP", "TIF, BMP, GIF"],
                answer: "PNG, GIF, JPG"
            },
            {
                question: "What is the correct way to code a comment in HTML?",
                options: ["//this is a comment", "<!-- this is a comment -->", "<! this is a comment ->", "/* this is a comment */"],
                answer: "<!-- this is a comment -->"
            },
            {
                question: "In this code, what is target? \n <a href=\"http://www.linkedin.com\" target=\"_blank\">Visit site</a>",
                options: ["a tag", "an attribute", "content", "an element"],
                answer: "a tag"
            },
            {
                question: "Which statement is false?",
                options: ["Inline elements can be nested inside block elements.", "Block elements can be nested inside inline elements.", "Inline elements can be nested inside inline elements.", "Block elements can be nested inside block elements."],
                answer: "Block elements can be nested inside inline elements."
            },
            {
                question: "what is the correct way to describe an empty element?",
                options: ["It has child but no closing tag.", "It display nothing on a webside.", "It has opening and closing tags but no child content.", "It has no chlid content and no closing tag."],
                answer: "It has opening and closing tags but no child content."
            }],
        level2: [{
            question: "When should you use the <article> element?",
            options: ["for the main content area of your website.", "when the content stands alone as a unit, is suitable for syndication, or is reusable.", "to associate comments with a blog post.", "for blog posts and other social media items."],
            answer: "when the content stands alone as a unit, is suitable for syndication, or is reusable."
        },
        {
            question: "How will a video look displayed on a fully loaded webpage if the <video> tags is used and the autoplay attribute is not set?",
            options: ["It will display nothing unless the poster attribute is set.", "It will a black window unless the poster attribute is set.", "It will display a random frame from a video, unless the poster attribute is set.", "It will display the first frame of the video, unless the poster attribute is set."],
            answer: "It will display the first frame of the video, unless the poster attribute is set."
        },
        {
            question: "Which choice is not a legal type attribute for the <input> tag?",
            options: ["<input type=\"week\">", "<input type=\"color\">", "<input type=\"tel\">", "<input type=\"num\">"],
            answer: "<input type=\"num\">"
        },
        {
            question: "What is the best semantic way to indicate that text refers to keyboard entry?",
            options: ["<p>Press the <tt>Enter</tt> key to proceed.</p>", " <p>Press the <samp>Enter</samp> key to proceed.</p>", "<p>Press the <kbd>Enter</kbd> key to proceed.</p>", "<p>Press the Enter key to proceed.</p>"],
            answer: "<p>Press the <kbd>Enter</kbd> key to proceed.</p>"
        },
        {
            question: "What does this code do? \n <audio autoplay loop src=\"sound.mp3\" type=\"audio/mpeg\"></audio>",
            options: ["The browser plays the sound once automatically in the background. The user has no control over the sound.", "The browser plays the sound automatically and continuously in the background. The user has no control over the sound.", " When the Play button is pressed, the browser plays the sound over and over again until the user stops it.", " The browser plays the sound automatically and continuously in the background. The user may stop the sound at any time."],
            answer: "The browser plays the sound automatically and continuously in the background. The user has no control over the sound."
        },
        {
            question: "What is the difference between the and <header> tags?",
            options: ["There is only one <head> tag per page, while there may be many <header> tags.", "all of these answersall of these answers", "The <head> tag contains meta information, while the <header> tag contains navigation, logos, and other page identifying content.", "The <head> tag may contain CSS and JavaScript links, while the <header> tag may contain headings and navigational links."],
            answer: "There is only one <head> tag per page, while there may be many <header> tags."
        },
        {
            question: "What are the best examples of void elements?",
            options: ["<link><meta><title>", "<wbr><base><source>", "<input><br><p>", "<area><embed><strong>"],
            answer: "<wbr><base><source>"
        },
        {
            question: "In HTML5, which tag or tags embed a webpage inside of a webpage?",
            options: ["<iframe>, <frame>, and <frameset>", "<frame>", "<iframe>", "<frame> and <frameset>"],
            answer: "<iframe>"
        },
        {
            question: "Where do <header> and <footer> tags typically occur?",
            options: ["as children of <body>, <article>, <aside>, and <section> tags", "as children of <body>, <article>, and <section> tags", "as children of <body>, <article>, <aside>, <nav>, and <section> tags", "as children of <body>, <article>, <table>, and <section> tags"],
            answer: "as children of <body>, <article>, and <section> tags"
        },
        {
            question: "The \"value\" attribute is associated with which set of tags?",
            options: ["<button><input><form>", "<input><label><meter>", "<input><option><textarea>", "<li><input><option>"],
            answer: "<li><input><option>"
        }],
        level3: []
    }
    ,
    CSS: {
        level1: [{
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Where in an HTML document is the correct place to refer to an external style sheet?",
            options: ["At the end of the document", "In the <head> section", "In the <body> section"],
            answer: "In the <head> section"
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: ["<css>", "<script>", "<style>"],
            answer: "<style>"
        }],
        level2: [],
        level3: []
    }
}



module.exports = questionsLibrary;