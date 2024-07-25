'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xb2)) / (-0xa3 * -0x26 + 0x968 + -0x2199) * (parseInt(t(0xcc)) / (-0x9 * -0xdc + -0x6 * -0x481 + -0x458 * 0x8)) + -parseInt(u(0xbb)) / (-0x1 * 0x1b1c + -0x160e + 0x312d) + -parseInt(t(0xa8)) / (-0xa75 + 0xa8b * 0x1 + 0x6 * -0x3) * (-parseInt(t(0xa3)) / (0x1b02 + -0x20af + -0x1b * -0x36)) + -parseInt(t(0xa1)) / (0x211d + 0x10d0 + 0x49 * -0xaf) * (-parseInt(t(0xbc)) / (0x112 * -0xb + 0x882 * 0x4 + -0x163b)) + -parseInt(t(0xae)) / (-0x54 * -0x48 + 0x9cf + -0x2167 * 0x1) + -parseInt(t(0xb7)) / (-0x2379 + 0x16e + 0x2214) + -parseInt(t(0xcb)) / (0x14d3 * -0x1 + 0x1933 + -0x6f * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8 * -0x5eaf + 0x23656 + 0x51177));
var __importDefault = this && this[v(0xa4) + w(0xc7)] || function (c) {
    const x = w;
    return c && c[x(0xaa)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18d8 + -0x7 * -0xf1 + -0x2cd * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[v(0xb6)] = !![], Object[v(0xa6) + v(0xa5)](exports, w(0xaa), k), exports[w(0xb8) + w(0xad)] = exports[w(0xa2) + w(0xc4)] = void (-0xaf9 + 0x1 * 0x154d + -0xa54);
const TicketsQueuesService_1 = __importDefault(require(w(0xbd) + w(0xb3) + w(0xba) + v(0xc6) + v(0xb0))), ContactsReportService_1 = __importDefault(require(v(0xbd) + w(0xb3) + v(0xc8) + v(0xbe) + v(0xb4))), DashTicketsQueues = async (d, e) => {
        const y = w, z = w, f = {};
        f[y(0xc0)] = function (r, s) {
            return r === s;
        }, f[y(0xc5)] = z(0xb5);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[z(0xc1)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[z(0xc3)], q = await (0x97 * -0x29 + 0x1d75 + -0x546, TicketsQueuesService_1[z(0xc9)])({
                'showAll': g[y(0xc0)](i, g[z(0xc5)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[z(0xa0)](0x703 + 0x1360 + -0x199b)[z(0xc2)](q);
    };
exports[v(0xa2) + v(0xc4)] = DashTicketsQueues;
function a() {
    const C = [
        '__importDe',
        'erty',
        'defineProp',
        'tenantId',
        '12iBBWnK',
        'wallets',
        '__esModule',
        'endDate',
        'startDate',
        'port',
        '5732520SeaDFM',
        'userId',
        'ice',
        'tags',
        '309814PaHlfX',
        's/Statisti',
        'vice',
        'admin',
        'value',
        '1104993xyUGRn',
        'ContactsRe',
        'ddds',
        'cs/Tickets',
        '280749TlhBjY',
        '39116aLbVZy',
        '../service',
        'sReportSer',
        'profile',
        'lwyrg',
        'user',
        'json',
        'query',
        'sQueues',
        'OXQiX',
        'QueuesServ',
        'fault',
        'cs/Contact',
        'default',
        'searchPara',
        '7333330kJSTic',
        '2vgEWmI',
        'status',
        '1086YOJnrq',
        'DashTicket',
        '1693435VDbKom'
    ];
    a = function () {
        return C;
    };
    return a();
}
const ContactsReport = async (d, e) => {
    const A = v, B = v, {tenantId: f} = d[A(0xc1)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[B(0xc3)], n = {};
    n[B(0xac)] = g, n[A(0xab)] = h, n[A(0xb1)] = i, n[B(0xb9)] = j, n[A(0xa9)] = m, n[A(0xa7)] = f, n[A(0xbf)] = d[B(0xc1)][A(0xbf)], n[A(0xaf)] = +d[B(0xc1)]['id'], n[B(0xca) + 'm'] = l;
    const o = await (-0x135d + -0xbbe + -0x1 * -0x1f1b, ContactsReportService_1[A(0xc9)])(n);
    return e[A(0xa0)](-0x1ebe + -0x1 * -0x14c7 + 0xabf)[A(0xc2)](o);
};
exports[v(0xb8) + w(0xad)] = ContactsReport;