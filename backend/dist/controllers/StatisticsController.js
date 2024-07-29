'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1de)) / (0x66 * -0x38 + -0x20a5 + 0x57f * 0xa) + -parseInt(u(0x1d6)) / (0x13 * 0x1ff + -0xbc4 + 0x1 * -0x1a27) + parseInt(u(0x1da)) / (0x1 * -0x1ebe + 0xe3e + 0x581 * 0x3) + parseInt(t(0x1bc)) / (-0x156f + -0x12cb * 0x1 + 0x283e) * (parseInt(u(0x1cd)) / (-0xc9 * -0x16 + -0x1 * -0x10c1 + -0x2202)) + -parseInt(t(0x1b9)) / (0x1cec + -0x1b1 * 0x2 + -0x1 * 0x1984) + parseInt(t(0x1ce)) / (0xb89 * 0x3 + -0x229f + 0x1 * 0xb) * (parseInt(u(0x1be)) / (0x66a + -0xe * -0x1f9 + -0x2200)) + -parseInt(t(0x1c9)) / (0x1471 + -0x12c4 + -0x1a4) * (-parseInt(u(0x1c0)) / (-0x5f * -0x1 + 0x7b * 0x3e + 0x2bd * -0xb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfb1 * 0x5c + 0x43 * 0x1031 + 0x7bf71));
var __importDefault = this && this[v(0x1bd) + v(0x1c2)] || function (c) {
    const x = w;
    return c && c[x(0x1b8)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xedd + 0x2 * -0x131f + -0x1 * -0x1919);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[v(0x1c8)] = !![], Object[w(0x1d8) + v(0x1dd)](exports, w(0x1b8), k), exports[v(0x1c7) + v(0x1c5)] = exports[w(0x1d4) + w(0x1cc)] = void (0x1363 + 0x7d2 + -0x1b35);
const TicketsQueuesService_1 = __importDefault(require(w(0x1bb) + v(0x1e2) + w(0x1d9) + v(0x1e3) + w(0x1cb))), ContactsReportService_1 = __importDefault(require(w(0x1bb) + v(0x1e2) + w(0x1d0) + v(0x1db) + v(0x1d5))), DashTicketsQueues = async (d, e) => {
        const y = w, z = v, f = {};
        f[y(0x1ba)] = function (r, s) {
            return r === s;
        }, f[z(0x1d7)] = z(0x1c1);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[y(0x1dc)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[y(0x1c4)], q = await (-0x4e * -0x1 + -0xfb * -0x1b + 0x1 * -0x1ac7, TicketsQueuesService_1[z(0x1cf)])({
                'showAll': g[z(0x1ba)](i, g[y(0x1d7)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[y(0x1d1)](0x611 + -0xe4e + 0x905)[y(0x1bf)](q);
    };
exports[w(0x1d4) + w(0x1cc)] = DashTicketsQueues;
function a() {
    const C = [
        'userId',
        's/Statisti',
        'QueuesServ',
        'tenantId',
        '__esModule',
        '3587286ohQmOB',
        'kPEJx',
        '../service',
        '32fweiTG',
        '__importDe',
        '16GLTuzj',
        'json',
        '5311820CrQGEU',
        'admin',
        'fault',
        'tags',
        'query',
        'port',
        'ddds',
        'ContactsRe',
        'value',
        '9igajLG',
        'searchPara',
        'ice',
        'sQueues',
        '136265xlLuEX',
        '1392489qMvIDV',
        'default',
        'cs/Contact',
        'status',
        'endDate',
        'wallets',
        'DashTicket',
        'vice',
        '1661360SWiRye',
        'bXelT',
        'defineProp',
        'cs/Tickets',
        '1147701UwQeLm',
        'sReportSer',
        'user',
        'erty',
        '314846rdXqkG',
        'profile',
        'startDate'
    ];
    a = function () {
        return C;
    };
    return a();
}
const ContactsReport = async (d, e) => {
    const A = w, B = v, {tenantId: f} = d[A(0x1dc)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[A(0x1c4)], n = {};
    n[B(0x1e0)] = g, n[A(0x1d2)] = h, n[A(0x1c3)] = i, n[A(0x1c6)] = j, n[A(0x1d3)] = m, n[A(0x1e4)] = f, n[B(0x1df)] = d[A(0x1dc)][A(0x1df)], n[A(0x1e1)] = +d[A(0x1dc)]['id'], n[B(0x1ca) + 'm'] = l;
    const o = await (-0x1434 + 0x254 * -0x3 + 0x1b30, ContactsReportService_1[A(0x1cf)])(n);
    return e[A(0x1d1)](0x22bd * -0x1 + 0xd69 * -0x1 + 0x2 * 0x1877)[A(0x1bf)](o);
};
exports[v(0x1c7) + w(0x1c5)] = ContactsReport;