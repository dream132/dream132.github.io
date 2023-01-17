$.getJSON("/publication.json", function (json) {
    console.log("JSON Data received, name is " + json.name);

    var x = "";

    for (i in json.journal_papers) {
        x += "<li>";
        for (j in json.journal_papers[i].authors) {
            var l = json.journal_papers[i].authors.length;
            if (l > 2) {
                if (j != 0) {
                    x += ", ";
                }
                if (j == l - 1) {
                    x += "and ";
                }
            } else if (l == 2) {
                if (j == 1) {
                    x += " and ";
                }
            }
            if (json.journal_papers[i].authors[j] == "Diptarama Hendrian" || json.journal_papers[i].authors[j] == "Diptarama") {
                x += "<span style=\"text-decoration: underline; \"><strong>";
                x += json.journal_papers[i].authors[j];
                x += "</strong></span>";
            } else {
                x += json.journal_papers[i].authors[j];
            }
        }
        x += "</br >";
        x += "<em>\"" + json.journal_papers[i].title + "\"</em>";
        x += "</br >";
        if (json.journal_papers[i].journal_link != null) {
            if (json.journal_papers[i].journal_abbrv == null) {
                x += "<a href=\"" + json.journal_papers[i].journal_link + "\">" + json.journal_papers[i].journal_name + "</a>";
            } else {
                x += json.journal_papers[i].journal_name + " (<a href=\"" + json.journal_papers[i].journal_link + "\">" + json.journal_papers[i].journal_abbrv + "</a>)";
            }
        } else {
            if (json.journal_papers[i].journal_abbrv == null) {
                x += json.journal_papers[i].journal_name;
            } else {
                x += json.journal_papers[i].journal_name + " (" + json.journal_papers[i].journal_abbrv + ")";
            }
        }
        if (json.journal_papers[i].volume != null) {
            x += ", Vol. " + json.journal_papers[i].volume;
        }
        if (json.journal_papers[i].number != null) {
            x += ", No. " + json.journal_papers[i].number;
        }
        if (json.journal_papers[i].pages != null) {
            if (json.journal_papers[i].pages.indexOf('–') == -1) {
                x += ", page " + json.journal_papers[i].pages;
            } else {
                x += ", pp. " + json.journal_papers[i].pages;
            }
        } else {
            x += ", in press";
        }
        if (json.journal_papers[i].year != null) {
            x += ", " + json.journal_papers[i].year;
        }
        x += ".";
        x += "</br>";
        if (json.journal_papers[i].paper_link != null || json.journal_papers[i].arxiv_link != null) {
            if (json.journal_papers[i].paper_link != null) {
                if (json.journal_papers[i].open == true) {
                    x += "<img src=\"oa.svg\" height=\"15\" /> ";
                }
                x += "<a href=\"" + json.journal_papers[i].paper_link + "\">[paper]</a>";
            }
            if (json.journal_papers[i].arxiv_link != null) {
                if (json.journal_papers[i].paper_link != null) {
                    x += " ";
                }
                x += "<a href=\"" + json.journal_papers[i].arxiv_link + "\">[arXiv]</a>";
            }
            x += "</br>";
        }
        x += "</br>";
        x += "</li>";
    }
    document.getElementById("journal").innerHTML = x;

    var y = "";

    for (i in json.conference_papers) {
        y += "<li>";
        for (j in json.conference_papers[i].authors) {
            var l = json.conference_papers[i].authors.length;
            if (l > 2) {
                if (j != 0) {
                    y += ", ";
                }
                if (j == l - 1) {
                    y += "and ";
                }
            } else if (l == 2) {
                if (j == 1) {
                    y += " and ";
                }
            }
            if (json.conference_papers[i].authors[j] == "Diptarama Hendrian" || json.conference_papers[i].authors[j] == "Diptarama") {
                y += "<span style=\"text-decoration: underline; \"><strong>";
                y += json.conference_papers[i].authors[j];
                y += "</strong></span>";
            } else {
                y += json.conference_papers[i].authors[j];
            }
        }
        y += "</br >";
        y += "<em>\"" + json.conference_papers[i].title + "\"</em>";
        y += "</br >";
        if (json.conference_papers[i].conference_link != null) {
            if (json.conference_papers[i].conference_abbrv == null) {
                y += "Proceedings of " + "<a href=\"" + json.conference_papers[i].conference_link + "\">" + json.conference_papers[i].conference_name + "</a>";
            } else {
                y += "Proceedings of " + json.conference_papers[i].conference_name + " (<a href=\"" + json.conference_papers[i].conference_link + "\">" + json.conference_papers[i].conference_abbrv + "</a>)";
            }
        } else {
            if (json.conference_papers[i].conference_abbrv == null) {
                y += "Proceedings of " + json.conference_papers[i].conference_name;
            } else {
                y += "Proceedings of " + json.conference_papers[i].conference_name + " (" + json.conference_papers[i].conference_abbrv + ")";
            }
        }
        if (json.conference_papers[i].pages != null) {
            if (json.conference_papers[i].pages.indexOf('–') == -1) {
                y += ", page " + json.conference_papers[i].pages;
            } else {
                y += ", pp. " + json.conference_papers[i].pages;
            }
        } else {
            y += ", TBA";
        }
        if (json.conference_papers[i].city != null) {
            y += ", " + json.conference_papers[i].city;
        }
        if (json.conference_papers[i].country != null) {
            y += ", " + json.conference_papers[i].country;
        }
        if (json.conference_papers[i].date != null) {
            y += ", " + json.conference_papers[i].date;
        }
        if (json.conference_papers[i].year != null) {
            y += ", " + json.conference_papers[i].year;
        }
        y += ".";
        y += "</br>";
        if (json.conference_papers[i].paper_link != null || json.conference_papers[i].arxiv_link != null) {
            if (json.conference_papers[i].paper_link != null) {
                if (json.conference_papers[i].open == true) {
                    y += "<img src=\"oa.svg\" height=\"15\" /> ";
                }
                y += "<a href=\"" + json.conference_papers[i].paper_link + "\">[paper]</a>";
            }
            if (json.conference_papers[i].arxiv_link != null) {
                if (json.conference_papers[i].paper_link != null) {
                    y += " ";
                }
                y += "<a href=\"" + json.conference_papers[i].arxiv_link + "\">[arXiv]</a>";
            }
            y += "</br>";
        }
        y += "</br>";
        y += "</li>";
    }
    document.getElementById("conference").innerHTML = y;
});

