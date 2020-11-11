var canevas = document.getElementById("canvas");

function dessiner(evt) {

    if (canevas.getContext) {
        var ctx = canevas.getContext("2d");
        ctx.scale(1, 1)
        t2(ctx);
        m1(ctx);
        m2(ctx);
        m3(ctx);
        m4(ctx);
        m5(ctx);
        m6(ctx);
        m7(ctx);
        m8(ctx);
        m9(ctx);
        m10(ctx);
        m11(ctx);
        m12(ctx);
        m13(ctx);
        m14(ctx);
    }
}
dessiner();

function writeMessage(canvas, message, mousePos) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    //modifie position du texte
    context.fillText(message, mousePos.x - 300, mousePos.y);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

// canvas.addEventListener('mousemove', function (evt) {
//     var mousePos = getMousePos(canvas, evt);

//     var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     writeMessage(canvas, message, mousePos);
// }, false);

// ligne de tram et metro

function t2(ctx) {
    ctx.strokeStyle = '#b13e94';
    ctx.beginPath();
    ctx.moveTo(35, 305);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(95, 304);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(95, 305);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(185, 391);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(185, 391);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(186, 530);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(185, 530);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(33, 691);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(33, 691);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(33, 1650);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(33, 1650);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(156, 1775);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(156, 1775);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(254, 1775);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(254, 1775);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(367, 1664);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(367, 1664);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(512, 1663);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(512, 1663);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(527, 1650);
    ctx.stroke();
}

function m1(ctx) {
    ctx.strokeStyle = '#f3ce0f';
    ctx.beginPath();
    ctx.moveTo(200, 545);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(701, 1040);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(701, 1040);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1154, 1045);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1154, 1045);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1237, 1128);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1237, 1128);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1298, 1124);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1298, 1124);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1373, 1202);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1373, 1202);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1376, 1268);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1376, 1268);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1438, 1323);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1438, 1323);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1591, 1176);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1591, 1176);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1644, 1218);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1644, 1218);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1741, 1218);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1741, 1218);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1836, 1316);
    ctx.stroke();
}
function m2(ctx) {
    ctx.strokeStyle = '#3264b1';
    ctx.beginPath();
    ctx.moveTo(299, 828);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(380, 908);
    ctx.stroke();
    //2
    ctx.beginPath();
    ctx.moveTo(380, 908);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(732, 559);
    ctx.stroke();
    //3
    ctx.beginPath();
    ctx.moveTo(732, 559);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1380, 560);
    ctx.stroke();
    //4
    ctx.beginPath();
    ctx.moveTo(1380, 560);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1446, 625);
    ctx.stroke();
    //5
    ctx.beginPath();
    ctx.moveTo(1446, 625);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1446, 767);
    ctx.stroke();
    //5
    ctx.beginPath();
    ctx.moveTo(1446, 767);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1596, 923);
    ctx.stroke();
    //6
    ctx.beginPath();
    ctx.moveTo(1596, 923);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1601, 1128);
    ctx.stroke();
    //7
    ctx.beginPath();
    ctx.moveTo(1601, 1128);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1648, 1177);
    ctx.stroke();
}
function m3(ctx) {
    ctx.strokeStyle = '#a09f3a';
    ctx.beginPath();
    ctx.moveTo(468, 430);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(770, 732);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(770, 732);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(770, 793);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(770, 793);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(925, 947);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(925, 947);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1239, 947);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1239, 947);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1333, 853);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1333, 853);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1437, 854);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1437, 854);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1523, 937);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1523, 937);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1830, 937);
    ctx.stroke();
}
function m4(ctx) {
    ctx.strokeStyle = '#be3089';
    ctx.beginPath();
    ctx.moveTo(1043, 382);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1107, 446);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1107, 446);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1107, 568);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1107, 568);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1216, 571);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1216, 571);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1264, 620);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1264, 620);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1264, 689);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1264, 689);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1191, 765);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1191, 765);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1191, 956);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1191, 956);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1071, 956);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1071, 956);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1071, 1074);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1071, 1074);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1010, 1140);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1010, 1222);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1010, 1222);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1010, 1140);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1010, 1222);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1010, 1222);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(883, 1222);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(883, 1222);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(883, 1417);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(883, 1417);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(973, 1417);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(973, 1417);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1023, 1473);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1023, 1473);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1023, 1589);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1023, 1589);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(963, 1652);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(963, 1652);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(963, 1704);
    ctx.stroke();
}
function m5(ctx) {
    ctx.strokeStyle = '#ec8d45';
    ctx.beginPath();
    ctx.moveTo(1834, 410);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1711, 531);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1711, 531);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1516, 531);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1516, 531);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1427, 621);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1427, 621);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1374, 572);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1374, 572);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1277, 572);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1277, 572);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1277, 734);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1277, 734);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1296, 758);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1296, 758);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1296, 824);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1296, 824);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1449, 979);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1449, 979);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1317, 1118);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1317, 1118);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1317, 1447);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1317, 1447);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1240, 1527);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1240, 1527);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1240, 1559);
    ctx.stroke();
}
function m6(ctx) {
    ctx.strokeStyle = '#73c9a2';
    ctx.beginPath();
    ctx.moveTo(465, 827);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(470, 834);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(470, 834);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(346, 960);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(346, 960);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(346, 1145);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(346, 1145);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(518, 1322);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(518, 1322);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(603, 1322);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(603, 1322);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(717, 1434);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(717, 1432);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(968, 1432);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(968, 1432);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1098, 1557);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1098, 1557);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1412, 1557);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1412, 1557);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1685, 1281);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1685, 1281);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1616, 1200);
    ctx.stroke();
}
function m7(ctx) {
    ctx.strokeStyle = '#ed95a1';
    ctx.beginPath();
    ctx.moveTo(1606, 250);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1606, 326);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1606, 326);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1388, 547);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1388, 547);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1388, 602);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1388, 602);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1309, 688);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1309, 688);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1037, 688);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1037, 688);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(849, 877);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(849, 877);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(849, 1053);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(849, 1053);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1095, 1053);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1095, 1053);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1232, 1195);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1232, 1195);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1232, 1333);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1232, 1333);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1157, 1333);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1157, 1333);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1157, 1450);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1157, 1450);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1232, 1527);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1232, 1527);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1232, 1829);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1232, 1645);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1259, 1677);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1259, 1677);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1448, 1677);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1448, 1677);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1504, 1734);
    ctx.stroke();

}
function m8(ctx) {
    ctx.strokeStyle = '#c1aecc';
    ctx.beginPath();
    ctx.moveTo(413, 1611);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(533, 1492);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(533, 1492);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(533, 1204);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(533, 1204);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(665, 1067);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(665, 1067);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(665, 948);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(665, 948);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(768, 948);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(768, 948);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(874, 843);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(874, 843);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1282, 843);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1282, 843);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1326, 887);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1326, 887);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1307, 911);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1307, 911);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1307, 1121);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1307, 1121);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1384, 1197);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1384, 1197);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1440, 1197);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1440, 1197);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1676, 1437);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1676, 1437);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1620, 1496);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1620, 1496);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1791, 1677);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1791, 1677);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1791, 1862);
    ctx.stroke();
}
function m9(ctx) {
    ctx.strokeStyle = '#d0ca19';
    ctx.beginPath();
    ctx.moveTo(138, 1655);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(237, 1553);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(237, 1553);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(237, 1047);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(237, 1047);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(486, 1047);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(486, 1047);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(744, 789);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(744, 789);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(794, 832);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(794, 832);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1284, 832);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1284, 832);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1650, 1194);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1650, 1194);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1839, 1008);
    ctx.stroke();
}
function m10(ctx) {
    ctx.strokeStyle = '#edb134';
    ctx.beginPath();
    ctx.moveTo(102, 1491);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(209, 1384);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(209, 1384);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(159, 1435);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(159, 1435);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(306, 1435);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(306, 1435);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(360, 1382);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(159, 1435);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(306, 1435);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(210, 1382);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(436, 1382);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(436, 1382);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(509, 1312);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(509, 1312);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(608, 1312);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(608, 1312);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(690, 1390);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(690, 1390);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(848, 1236);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(848, 1236);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1060, 1236);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1060, 1236);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1152, 1324);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1152, 1324);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1240, 1324);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1240, 1324);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1309, 1392);
    ctx.stroke();

}
function m11(ctx) {
    ctx.strokeStyle = '#94663a';
    ctx.beginPath();
    ctx.moveTo(1838, 657);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1776, 722);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1776, 722);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1480, 722);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1480, 722);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1136, 1063);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1136, 1063);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1068, 1063);
    ctx.stroke();
}
function m12(ctx) {
    ctx.strokeStyle = '#418b53';
    ctx.beginPath();
    ctx.moveTo(1346, 352);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1277, 352);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1277, 352);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1277, 462);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1277, 462);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(991, 462);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(991, 462);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(991, 711);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(991, 711);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(792, 711);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(792, 711);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(792, 768);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(792, 768);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(676, 886);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(676, 886);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(676, 1117);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(676, 1117);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(911, 1355);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(911, 1355);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(911, 1408);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(911, 1408);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(781, 1408);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(781, 1408);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(423, 1774);
    ctx.stroke();
}
function m13(ctx) {
    ctx.strokeStyle = '#82d2e2';
    ctx.beginPath();
    ctx.moveTo(476, 127);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(476, 193);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(476, 193);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(780, 492);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1214, 107);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1126, 196);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1126, 196);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(960, 196);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(960, 196);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(780, 375);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(780, 375);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(780, 764);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(780, 764);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(635, 910);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(635, 910);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(635, 1249);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(635, 1249);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(808, 1421);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(808, 1421);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(870, 1421);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(870, 1421);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(870, 1518);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(870, 1518);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(566, 1825);
    ctx.stroke();
}
function m14(ctx) {
    ctx.strokeStyle = '#622891';
    ctx.beginPath();
    ctx.moveTo(760, 757);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(760, 814);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(760, 814);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(688, 888);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(688, 888);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(688, 955);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(688, 955);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(899, 959);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(899, 959);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(975, 1035);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(975, 1035);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1091, 1035);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1091, 1035);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1558, 1505);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1558, 1505);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1465, 1600);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1465, 1600);
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.lineTo(1401, 1600);
    ctx.stroke();
}

//Bulle des actions
function showUI(x, y) {

    //La defense
    if (y > 530 & y < 560 & x > 195 & x < 220) {
        return true;
    }
    else {
        return false;
    }
}
let scrollPositionY;
let scrollPositionX;
let open;
let actionBox = document.getElementById('action-box')
canevas.addEventListener("mousedown", e => {

    let canvas_y = e.pageY;
    let canvas_x = e.pageX;
    open = showUI(canvas_x, canvas_y);
    if (open == true) {
        createActionBox(e, open);

    }
    else {
        actionBox.style.visibility = "hidden"
    }
}, false);

window.addEventListener('scroll', function (e) {
    scrollPositionY = window.scrollY;
    scrollPositionX = window.scrollX;
    if (open=true) {
        open=false
    }
    console.log(open)
    // console.log('scrollX : ' + scrollPositionX + 'scrollY : ' + scrollPositionY);

})
function createActionBox(e, open) {
    actionBox.style.top = scrollPositionY + e.clientY + 'px'
    actionBox.style.left = e.clientX + 'px';
    if (open == true) {
        actionBox.style.visibility = 'visible';
    }
    else {
        actionBox.style.visibility = 'hidden';

    }
    // console.log('scroll + position: '+  e.clientY+scrollPositionY)

}