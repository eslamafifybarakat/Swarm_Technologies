var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var rootEn = {
    "name": "Solutions and Services",
    "children": [
        {
            "name": "UVS",
            "children": [{
                "name": "UAV-Drones",
            }, {
                "name": "UGV-Robotics",
            }]
        },
        {
            "name": "Artificial Intelligence",
            "children": [
                {
                    "name": "video Analytic",
                    "children": [{
                        "name": "Aware",
                    }, {
                        "name": "Deep Eye",
                    }, {
                        "name": "LPR",
                    }]
                },
                {
                    "name": "image Analytic",
                    "children": [{
                        "name": "OCR",
                    }]
                },
                {
                    "name": "video & text Analytic",
                    "children": [{
                        "name": "Chatbot",
                    }, {
                        "name": "Wajez",
                    }, {
                        "name": "Voice Assistant",
                    }]
                },
                {
                    "name": "Data Analytic",
                    "children": [{
                        "name": "BI Dashboards",
                    }, {
                        "name": "Predictive analytics",
                    }]
                },
                {
                    "name": "Deep Fake",
                }]
        },
        {
            "name": "Data Management",
            "children": [{
                "name": "Data Governance",
            }, {
                "name": "Data classification",
            }, {
                "name": "Data visualization",
            }]
        },
        {
            "name": "Cloud Hosting",
        },
        {
            "name": "Digital environment",
            "children": [{
                "name": "Digital infrastructure"
            }, {
                "name": "Cyber Security"
            }, {
                "name": "Business Applications"
            }]
        },
        {
            "name": "Web Systems",
            "children": [{
                "name": "CRM",
            }, {
                "name": "Fikra",
            }, {
                "name": "Fikra",
            }, {
                "name": "VMS",
            }, {
                "name": "Virtual Clinic",
            }, {
                "name": "Evaluation platform",
            }, {
                "name": "Legal Department",
            }, {
                "name": "Fleet Management Systems",
            }, {
                "name": "Process Automation",
            }, {
                "name": "Integration Service",
            }, {
                "name": "Custom PLatform",
            }]
        },
        {
            "name": "Digital transformation",
            "children": [
                {
                    "name": "DT RoadMap",
                },
                {
                    "name": "KPIs",
                }]
        },
        {
            "name": "Others",
            "children": [{
                "name": "Consultation",
            }, {
                "name": "Simulation",
            }, {
                "name": "Optical Solution",
            }, {
                "name": "GIS",
            }]
        }]
};
var rootAr = {
    "name": "الخدمات والحلول",
    "children": [
        {
            "name": "UVS",
            "children": [{
                "name": "طائرات بدون طيار - الطائرات بدون طيار",
            }, {
                "name": "الروبوتات على الأرض - الروبوتيات",
            }]
        },
        {
            "name": "الذكاء الاصطناعي",
            "children": [
                {
                    "name": "التحليل الفيديو",
                    "children": [{
                        "name": "وير",
                    }, {
                        "name": "عين عميقة",
                    }, {
                        "name": "تعرف على اللوحة",
                    }]
                },
                {
                    "name": "التحليل الصوري",
                    "children": [{
                        "name": "التعرف الضوئي على النص",
                    }]
                },
                {
                    "name": "التحليل النصي والفيديو",
                    "children": [{
                        "name": "روبوت الدردشة",
                    }, {
                        "name": "واجز",
                    }, {
                        "name": "مساعد الصوت",
                    }]
                },
                {
                    "name": "التحليل البياني",
                    "children": [{
                        "name": "لوحات القيادة التنفيذية للأعمال",
                    }, {
                        "name": "التحليل التنبؤي",
                    }]
                },
                {
                    "name": "التلاعب العميق",
                }]
        },
        {
            "name": "إدارة البيانات",
            "children": [{
                "name": "حوكمة البيانات",
            }, {
                "name": "تصنيف البيانات",
            }, {
                "name": "تصور البيانات",
            }]
        },
        {
            "name": "استضافة السحابية",
        },
        {
            "name": "البيئة الرقمية",
            "children": [{
                "name": "البنية التحتية الرقمية"
            }, {
                "name": "الأمن السيبراني"
            }, {
                "name": "تطبيقات الأعمال"
            }]
        },
        {
            "name": "أنظمة الويب",
            "children": [{
                "name": "إدارة علاقات العملاء",
            }, {
                "name": "فكرة",
            }, {
                "name": "فكرة",
            }, {
                "name": "نظام إدارة الفيديو",
            }, {
                "name": "العيادة الافتراضية",
            }, {
                "name": "منصة التقييم",
            }, {
                "name": "القسم القانوني",
            }, {
                "name": "أنظمة إدارة الأساطيل",
            }, {
                "name": "تلقائية العمليات",
            }, {
                "name": "خدمة التكامل",
            }, {
                "name": "منصة مخصصة",
            }]
        },
        {
            "name": "التحول الرقمي",
            "children": [
                {
                    "name": "خريطة الطريق للتحول الرقمي",
                },
                {
                    "name": "مؤشرات الأداء الرئيسية",
                }]
        },
        {
            "name": "آخرون",
            "children": [{
                "name": "استشارة",
            }, {
                "name": "محاكاة",
            }, {
                "name": "الحل البصري",
            }, {
                "name": "نظم المعلومات الجغرافية",
            }]
        }]
};
var currentURL = window.location.href;
const root = currentURL.includes('-ar') ? rootAr : rootEn;

var i = 0,
    duration = 750,
    rectW = 150,
    rectH = 35;

var tree = d3.layout.tree().nodeSize([160, 40]);
var diagonal = d3.svg.diagonal()
    .projection(function (d) {
        return [d.x + rectW / 2, d.y + rectH / 2];
    });

var svg = d3.select("#map").append("svg").attr("width", 1000).attr("height", 1000)
    .call(zm = d3.behavior.zoom().scaleExtent([1, 3]).on("zoom", redraw)).append("g")
    .attr("transform", "translate(" + 600 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([350, 20]);

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

root.children.forEach(collapse);
update(root);

d3.select("#map").style("height", "600px");

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 180;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        })
        .on("click", click);

    nodeEnter.append("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) {
            return d._children ? "#ca89ff" : "#00000000";
        });

    nodeEnter.append("text")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.name;
        });

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    nodeUpdate.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) {
            return d._children ? "#603c98" : "#00000000";
        });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.x + "," + source.y + ")";
        })
        .remove();

    nodeExit.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        //.attr("width", bbox.getBBox().width)""
        //.attr("height", bbox.getBBox().height)
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    nodeExit.select("text");

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
            return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("d", function (d) {
            var o = {
                x: source.x0,
                y: source.y0
            };
            return diagonal({
                source: o,
                target: o
            });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = {
                x: source.x,
                y: source.y
            };
            return diagonal({
                source: o,
                target: o
            });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

//Redraw for zoom
function redraw() {
    //console.log("here", d3.event.translate, d3.event.scale);
    svg.attr("transform",
        "translate(" + d3.event.translate + ")"
        + " scale(" + d3.event.scale + ")");
}