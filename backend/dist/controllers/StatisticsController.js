'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x11d)) / (0x1656 + -0x8 * -0x2bd + -0xebf * 0x3) * (-parseInt(t(0x131)) / (0x22ee + -0x556 * 0x2 + 0x1 * -0x1840)) + -parseInt(u(0x110)) / (0x3 * 0x2b7 + -0x1c * 0x43 + -0xce) + parseInt(t(0x121)) / (0x105a + 0x78b + -0x17e1) * (-parseInt(t(0x111)) / (0xc87 + 0x6b * 0xb + -0x111b)) + parseInt(t(0x125)) / (0x132f + -0x1078 + -0xd * 0x35) * (-parseInt(u(0x13a)) / (-0x163a + -0x1b2f * -0x1 + -0x4ee * 0x1)) + parseInt(t(0x11e)) / (-0x2 * 0xa93 + -0x100f + -0x1 * -0x253d) + parseInt(t(0x123)) / (0x2286 + 0x1 * 0x204d + -0x2165 * 0x2) + parseInt(u(0x115)) / (0x2302 + -0x1da + 0x2 * -0x108f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf6ad * 0x2 + -0x1 * 0x3f476 + 0x27f * 0x19d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8cb + 0x4f * -0x42 + 0xca1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x135) + w(0x12b)] || function (c) {
    const x = v;
    return c && c[x(0x12a)] ? c : { 'default': c };
};
const k = {};
k[v(0x133)] = !![], Object[w(0x137) + v(0x129)](exports, v(0x12a), k), exports[v(0x11f) + v(0x10f)] = exports[w(0x116) + v(0x132)] = void (-0x20b2 + 0x1 * -0x19b5 + 0x3a67);
const TicketsQueuesService_1 = __importDefault(require(v(0x11a) + w(0x12d) + w(0x127) + v(0x128) + w(0x10e))), ContactsReportService_1 = __importDefault(require(v(0x11a) + v(0x12d) + v(0x136) + v(0x130) + w(0x114))), DashTicketsQueues = async (d, e) => {
        const y = v, z = w, f = {};
        f[y(0x12c)] = function (r, s) {
            return r === s;
        }, f[y(0x126)] = z(0x113);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[z(0x11c)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[y(0x117)], q = await (0x1 * 0x1253 + -0xa5d + -0x7f6, TicketsQueuesService_1[z(0x120)])({
                'showAll': g[z(0x12c)](i, g[z(0x126)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[y(0x12e)](-0x1baa + 0x76d * -0x1 + 0x23df)[y(0x12f)](q);
    };
exports[w(0x116) + w(0x132)] = DashTicketsQueues;
const ContactsReport = async (d, e) => {
    const A = v, B = w, {tenantId: f} = d[A(0x11c)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[B(0x117)], n = {};
    n[A(0x11b)] = g, n[B(0x139)] = h, n[B(0x122)] = i, n[B(0x118)] = j, n[A(0x119)] = m, n[B(0x134)] = f, n[A(0x112)] = d[B(0x11c)][A(0x112)], n[A(0x124)] = +d[A(0x11c)]['id'], n[B(0x138) + 'm'] = l;
    const o = await (-0xa31 * 0x1 + 0x232 + 0x7ff, ContactsReportService_1[B(0x120)])(n);
    return e[A(0x12e)](-0x206 * -0xe + 0x1 * 0x1a35 + -0x35c1 * 0x1)[B(0x12f)](o);
};
exports[w(0x11f) + w(0x10f)] = ContactsReport;
function a() {
    const C = [
        'endDate',
        '28YKSbWU',
        'ice',
        'port',
        '756762KtFBzC',
        '603235lgXLzE',
        'profile',
        'admin',
        'vice',
        '3598270TGxScI',
        'DashTicket',
        'query',
        'ddds',
        'wallets',
        '../service',
        'startDate',
        'user',
        '259013ruYfsF',
        '1502152IHIspf',
        'ContactsRe',
        'default',
        '8EzhSvv',
        'tags',
        '385038DOxaQz',
        'userId',
        '337242bxMWWy',
        'eQKKL',
        'cs/Tickets',
        'QueuesServ',
        'erty',
        '__esModule',
        'fault',
        'xEuOZ',
        's/Statisti',
        'status',
        'json',
        'sReportSer',
        '2NTIZDf',
        'sQueues',
        'value',
        'tenantId',
        '__importDe',
        'cs/Contact',
        'defineProp',
        'searchPara'
    ];
    a = function () {
        return C;
    };
    return a();
}