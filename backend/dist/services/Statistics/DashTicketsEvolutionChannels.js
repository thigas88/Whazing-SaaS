'use strict';
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25f + 0x3c * -0x89 + 0x1e93);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x102)) / (0x253c + 0x15c5 * 0x1 + -0x3b00) * (parseInt(s(0x139)) / (0x25 * 0x5d + -0x65 * -0x25 + 0x5c * -0x4e)) + parseInt(s(0x12a)) / (-0x39d * 0x5 + 0x1 * 0xf90 + 0x284) + parseInt(s(0xd8)) / (0x932 + -0xe9 * -0x19 + -0x1fef) + -parseInt(s(0x10c)) / (0x8 * 0x397 + -0x26bb + -0x358 * -0x3) * (parseInt(t(0x143)) / (0x1833 + -0x7 * 0x121 + 0x823 * -0x2)) + -parseInt(s(0x11a)) / (0x1d5d + -0x1127 + 0xc2f * -0x1) * (parseInt(t(0x126)) / (0x1438 + -0x1 * -0x8ab + -0x1cdb)) + -parseInt(s(0xd6)) / (-0xd67 + 0x1155 + 0x3e5 * -0x1) + parseInt(t(0xe4)) / (0x21be + -0x19a5 + -0x80f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x782dc + -0xe8cbe + -0x6f1 * -0x48d));
var __importDefault = this && this[u(0x111) + v(0x132)] || function (c) {
    const w = v;
    return c && c[w(0x107)] ? c : { 'default': c };
};
const k = {};
k[v(0x134)] = !![], Object[v(0x109) + u(0x13a)](exports, u(0x107), k);
const sequelize_1 = require(u(0xdd)), database_1 = __importDefault(require(u(0x13f) + u(0x11e))), query = u(0xfb) + u(0x116) + v(0xe9) + v(0xfe) + v(0x13d) + u(0x118) + u(0x11d) + u(0x131) + v(0x105) + v(0x12b) + v(0x130) + v(0xe0) + v(0xf1) + u(0xe2) + u(0x141) + v(0xf2) + v(0xeb) + u(0x140) + v(0xf6) + v(0x117) + u(0xf4) + u(0x12c) + v(0xef) + u(0xde) + u(0x128) + v(0x13b) + u(0x12e) + v(0x11b) + u(0x106) + u(0xf9) + u(0xec) + v(0x138) + u(0x120) + v(0x11f) + u(0x10a) + u(0x127) + u(0x146) + v(0xdf) + v(0x121) + u(0x10f) + u(0xf8) + v(0x135) + v(0x13e) + v(0x133) + u(0x12d) + v(0x10e) + v(0x119) + u(0x110) + v(0xe3) + u(0xe7) + u(0xf2) + u(0xeb) + u(0x144) + u(0xf3) + u(0xfa) + u(0x12f) + u(0xdb) + u(0x10b) + v(0xf5) + u(0xe8) + u(0x13c) + v(0xee) + u(0x100) + v(0xe6), queryAdmin = v(0xfb) + u(0x116) + v(0xe9) + u(0xfe) + v(0x13d) + v(0x118) + v(0x11d) + v(0x131) + v(0x105) + u(0x12b) + u(0x130) + v(0xe0) + v(0xf1) + v(0xe2) + v(0x141) + v(0xf2) + u(0xeb) + v(0x140) + v(0xf6) + u(0x117) + v(0xf4) + u(0x12c) + u(0xef) + u(0xde) + u(0x128) + v(0x13b) + u(0x12e) + v(0x11b) + v(0x106) + v(0xf9) + v(0xec) + v(0x138) + u(0x120) + u(0x11f) + v(0x10a) + u(0x127) + u(0x146) + u(0xdf) + v(0x121) + u(0x129) + u(0x104) + v(0xdc) + v(0x10d) + v(0x142) + u(0xed) + v(0x113) + u(0x101) + u(0xf4) + u(0x12c) + u(0xef) + u(0x136) + v(0xf7) + u(0x11c) + v(0xea) + u(0xda) + v(0x145) + u(0x137) + v(0x124) + u(0x108) + v(0x122) + v(0x103), DashTicketsEvolutionChannels = async ({
        startDate: f,
        endDate: g,
        tenantId: h,
        userId: i,
        userProfile: j
    }) => {
        const x = v, y = u, l = {};
        l[x(0xff)] = function (q, r) {
            return q == r;
        }, l[y(0x115)] = y(0xfc);
        const m = l, n = {};
        n[x(0x123)] = h, n[y(0xe5)] = f, n[x(0xf0)] = g, n[x(0xe1)] = i;
        const o = {};
        o[y(0x114) + 'ts'] = n, o[y(0xd7)] = sequelize_1[x(0x112)][x(0xd9)];
        const p = await database_1[y(0xfd)][x(0x125)](m[x(0xff)](j, m[x(0x115)]) ? queryAdmin : query, o);
        return p;
    };
function a() {
    const z = [
        't.\x22ticketI',
        '\x20date_trun',
        '301160dsYoQf',
        'en\x27\x20OR\x20lt.',
        '\x20OR\x20lt.\x22ty',
        'ntId\x20\x20AND\x20',
        'receivedTr',
        '__importDe',
        'QueryTypes',
        'dTransfer\x27',
        'replacemen',
        'fKWcB',
        'dt_ref,\x20to',
        'to_char(da',
        '_referenci',
        'pe\x22\x20LIKE\x20\x27',
        '14Cecdvp',
        '\x20\x20count(1)',
        'and\x20:endDa',
        'a\x20,\x20label,',
        'base',
        's\x22\x20lt\x20ON\x20l',
        '\x22LogTicket',
        'd\x22\x20=\x20:tena',
        ')\x20a\x0a\x20\x20orde',
        'tenantId',
        'edAt\x22),\x20t.',
        'query',
        '3972920czuPeS',
        'd\x22\x20=\x20t.\x22id',
        'YYY\x27)\x20,\x0a\x20\x20',
        'ntId\x0a\x20\x20and',
        '520476YLmsoQ',
        'td/sum(qtd',
        'day\x27,\x20t.\x22c',
        'IKE\x20\x27open\x27',
        'as\x20label,\x0a',
        '\x20:endDate\x0a',
        ')\x20over\x20())',
        '\x20qtd,\x20ROUN',
        'fault',
        't.\x22type\x22\x20L',
        'value',
        '\x22\x20=\x20:userI',
        '\x20between\x20:',
        ',\x20t.\x22creat',
        'NNER\x20JOIN\x20',
        '177942gbRxox',
        'erty',
        't.channel\x20',
        't\x22),\x20t.cha',
        '/YYYY\x27)\x20dt',
        'd\x0a\x20\x20and\x20(l',
        '../../data',
        'tedAt\x22)\x20dt',
        'ct\x0a\x20\x20date_',
        '\x22type\x22\x20LIK',
        '120Mervqs',
        'tedAt\x22)\x20be',
        'runc(\x27day\x27',
        '\x22\x0a\x20\x20where\x20',
        '6674922xjCHtK',
        'type',
        '3338252NlgwLK',
        'SELECT',
        '\x20by\x20date_t',
        '\x20\x20group\x20by',
        '\x22\x20LIKE\x20\x27op',
        'sequelize',
        ',\x20\x27DD/MM/Y',
        't.\x22tenantI',
        ',\x202)\x20perte',
        'userId',
        'm\x20(\x0a\x20\x20sele',
        'ansfer\x27)\x0a\x20',
        '23779500larUBI',
        'startDate',
        'y\x201\x0a',
        '\x20and\x20date_',
        '.\x22createdA',
        '_char(dt_r',
        'te\x0a\x20\x20group',
        '\x27,\x20t.\x22crea',
        'ets\x22\x20t\x0a\x20\x20I',
        'E\x20\x27receive',
        'nnel\x0a\x20\x20)\x20a',
        'reatedAt\x22)',
        'endDate',
        'ntual\x20\x20fro',
        'trunc(\x27day',
        'tween\x20:sta',
        'te_trunc(\x27',
        'c(\x27day\x27,\x20t',
        '_ref,\x0a\x20\x20--',
        'startDate\x20',
        'lt.\x22userId',
        'from\x20\x22Tick',
        'rtDate\x20and',
        '\x0a\x20\x20select\x20',
        'admin',
        'default',
        'ef,\x20\x27DD/MM',
        'RmtzY',
        '\x0a\x20\x20order\x20b',
        ')\x0a\x20\x20and\x20da',
        '2cJKbPR',
        'r\x20by\x201\x0a',
        '\x20(lt.\x22type',
        'D(100.0*(q',
        '\x20as\x20qtd\x0a\x20\x20',
        '__esModule',
        'channel\x0a\x20\x20',
        'defineProp'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[v(0xfd)] = DashTicketsEvolutionChannels;