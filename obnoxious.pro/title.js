var i = 0;
setInterval(function() {
    var titles = [
        "||",
        "|b|",
        "|ba|",
        "|bai|",
        "|baim|",
        "|baimb|",
        "|baimbo|",
        "|baimbos|",
        "|baimboss|",
        "|baimboss.|",
        "|baimboss.c|",
        "|baimboss.cl|",
        "|baimboss.clu|",
        "|baimboss.club|",
        "|baimboss.clu|",
        "|baimboss.cl|",
        "|baimboss.c|",
        "|baimboss.|",
        "|baimboss|",
        "|baimbos|",
        "|baimbo|",
        "|baimb|",
        "|baim|",
        "|bai|",
        "|ba|",
        "|b|",
        "||",

    ]

    if (i === titles.length) {
        i = 0;
    }
    document.title = titles[i];
    i++;
}, 500);