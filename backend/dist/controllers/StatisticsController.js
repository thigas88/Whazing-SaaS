'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb * -0x1f3 + 0x3f7 + -0x1 * -0x133f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1c7)) / (0x25fd + 0x259a + 0x2d * -0x1ae) + parseInt(t(0x1e8)) / (-0x25 * 0x56 + 0x5 * 0x505 + 0x1cf * -0x7) + -parseInt(t(0x1cd)) / (-0x476 + 0x15f7 + -0x117e) * (parseInt(u(0x1d5)) / (0xcd5 + -0x2 * -0xa8b + -0x21e7)) + -parseInt(t(0x1cf)) / (-0x1e31 + -0x5b4 * 0x2 + 0x14cf * 0x2) + -parseInt(t(0x1dd)) / (0x29e + -0x562 + 0x2ca) * (parseInt(u(0x1d7)) / (0x18e1 + -0x1 * -0xd37 + -0x2611)) + -parseInt(u(0x1d8)) / (-0x1 * -0x24ac + 0x54c + -0xb0 * 0x3d) + parseInt(u(0x1e0)) / (0x1 * 0xca9 + 0x13fe + -0x19 * 0x14e) * (parseInt(u(0x1ca)) / (-0x1707 + -0x19ab + 0xc2f * 0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfc5 * -0x8d + 0x8216 * -0x3 + 0xebddf));
var __importDefault = this && this[v(0x1e3) + w(0x1da)] || function (c) {
    const x = v;
    return c && c[x(0x1ed)] ? c : { 'default': c };
};
function a() {
    const C = [
        'admin',
        'sQueues',
        'wallets',
        'QueuesServ',
        '__esModule',
        'erty',
        'ddds',
        'cs/Contact',
        'endDate',
        'lbZxM',
        'DashTicket',
        '412196sQItxd',
        'userId',
        'ContactsRe',
        '340IkbOrK',
        'cs/Tickets',
        'port',
        '3DyvgZN',
        'dBUfc',
        '2337970quOiUZ',
        'sReportSer',
        'status',
        'query',
        'value',
        'user',
        '2060104uInVQD',
        'defineProp',
        '71225FlfSOe',
        '1269248VjFQon',
        'ice',
        'fault',
        'default',
        'json',
        '54dtesQI',
        'tags',
        'vice',
        '391059DHIlFa',
        'searchPara',
        'profile',
        '__importDe',
        'tenantId',
        's/Statisti',
        'startDate',
        '../service',
        '929402VjvyLj'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = {};
k[w(0x1d3)] = !![], Object[w(0x1d6) + w(0x1ee)](exports, w(0x1ed), k), exports[w(0x1c9) + v(0x1cc)] = exports[w(0x1c6) + v(0x1ea)] = void (-0x23ef + 0x8e3 + 0x4 * 0x6c3);
const TicketsQueuesService_1 = __importDefault(require(v(0x1e7) + v(0x1e5) + v(0x1cb) + v(0x1ec) + w(0x1d9))), ContactsReportService_1 = __importDefault(require(w(0x1e7) + w(0x1e5) + w(0x1f0) + v(0x1d0) + w(0x1df))), DashTicketsQueues = async (d, e) => {
        const y = v, z = v, f = {};
        f[y(0x1c5)] = function (r, s) {
            return r === s;
        }, f[z(0x1ce)] = z(0x1e9);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[z(0x1d4)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[z(0x1d2)], q = await (0x18eb + 0x7 * 0x378 + -0x3133, TicketsQueuesService_1[y(0x1db)])({
                'showAll': g[y(0x1c5)](i, g[y(0x1ce)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[y(0x1d1)](-0xc28 + -0xe17 + 0x1b07)[z(0x1dc)](q);
    };
exports[w(0x1c6) + w(0x1ea)] = DashTicketsQueues;
const ContactsReport = async (d, e) => {
    const A = w, B = v, {tenantId: f} = d[A(0x1d4)], {
            startDate: g,
            endDate: h,
            tags: i,
            ddds: j,
            searchParam: l,
            wallets: m
        } = d[B(0x1d2)], n = {};
    n[B(0x1e6)] = g, n[B(0x1f1)] = h, n[B(0x1de)] = i, n[B(0x1ef)] = j, n[B(0x1eb)] = m, n[B(0x1e4)] = f, n[A(0x1e2)] = d[A(0x1d4)][B(0x1e2)], n[A(0x1c8)] = +d[B(0x1d4)]['id'], n[B(0x1e1) + 'm'] = l;
    const o = await (0x130c + -0x4 * -0x2bd + -0x50 * 0x60, ContactsReportService_1[A(0x1db)])(n);
    return e[B(0x1d1)](-0xe72 + 0x209a + -0x1160)[A(0x1dc)](o);
};
exports[v(0x1c9) + v(0x1cc)] = ContactsReport;