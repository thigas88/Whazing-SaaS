'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17e * 0x11 + 0x26d5 + 0x3 * -0x3d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x215)) / (0x71 * 0x56 + -0x1 * 0x1b13 + -0xc7 * 0xe) + parseInt(w(0x206)) / (0x8ef * -0x1 + -0x259e + 0x2e8f) + parseInt(w(0x1f7)) / (0x11 * 0x89 + 0x929 * -0x1 + 0x13) * (parseInt(x(0x204)) / (0x5a1 * 0x4 + 0x1de0 + -0x3460)) + -parseInt(x(0x1f5)) / (-0x1390 + 0x435 * 0x7 + -0x9de) + -parseInt(x(0x20f)) / (0x20e4 + -0x1 * -0x2555 + -0x1 * 0x4633) * (parseInt(w(0x201)) / (0x2515 + 0x24e * -0x10 + -0x2e)) + parseInt(w(0x1ff)) / (-0xb5 * -0x10 + 0xe * 0x193 + 0x355 * -0xa) + -parseInt(x(0x20d)) / (-0x8d + 0x997 + -0x5 * 0x1cd) * (parseInt(x(0x1f6)) / (-0x76c + 0x4 * 0x596 + -0xee2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd4513 * -0x1 + 0x6ee6b * 0x1 + 0x157570));
var __importDefault = this && this[y(0x1fa) + z(0x20a)] || function (c) {
    const A = z;
    return c && c[A(0x1f4)] ? c : { 'default': c };
};
const k = {};
k[z(0x217)] = !![], Object[z(0x1ef) + y(0x210)](exports, z(0x1f4), k), exports[y(0x203) + z(0x1f2)] = exports[z(0x21a) + y(0x213)] = void (-0x19e3 * -0x1 + -0x2184 + -0x7 * -0x117);
function a() {
    const F = [
        'query',
        'value',
        'TqcXk',
        'user',
        'DashTicket',
        'map',
        'QueuesServ',
        'ice',
        'vice',
        '../service',
        'tags',
        'defineProp',
        's/Statisti',
        'ddds',
        'port',
        'admin',
        '__esModule',
        '4056065NYQaet',
        '3260YWXVbH',
        '7149dchgZI',
        'endDate',
        'sReportSer',
        '__importDe',
        'kXFdI',
        'ptLue',
        'wallets',
        'cs/Tickets',
        '14154832VJjDOz',
        'startDate',
        '13125eNjpLV',
        'json',
        'ContactsRe',
        '2140DBmpkI',
        'userId',
        '3519904XwWTJK',
        'qawiC',
        'profile',
        'tenantId',
        'fault',
        'status',
        'campaign',
        '87651soUdbq',
        'default',
        '3870cyojay',
        'erty',
        'true',
        'searchPara',
        'sQueues',
        'cs/Contact',
        '1382211RWBJjP'
    ];
    a = function () {
        return F;
    };
    return a();
}
const TicketsQueuesService_1 = __importDefault(require(y(0x1ed) + y(0x1f0) + y(0x1fe) + z(0x21c) + y(0x21d))), ContactsReportService_1 = __importDefault(require(z(0x1ed) + z(0x1f0) + y(0x214) + y(0x1f9) + z(0x1ec))), DashTicketsQueues = async (d, e) => {
        const B = z, C = y, f = {};
        f[B(0x207)] = function (r, s) {
            return r === s;
        }, f[B(0x1fb)] = B(0x1f3);
        const g = f, {
                tenantId: h,
                profile: i,
                id: j
            } = d[B(0x219)], {
                dateStart: l,
                dateEnd: m,
                status: n,
                queuesIds: o,
                showAll: p
            } = d[C(0x216)], q = await (0x1d36 * -0x1 + -0xca3 * -0x1 + 0x1093, TicketsQueuesService_1[B(0x20e)])({
                'showAll': g[B(0x207)](i, g[C(0x1fb)]) ? p : ![],
                'dateStart': l,
                'dateEnd': m,
                'status': n,
                'queuesIds': o,
                'userId': j,
                'tenantId': h
            });
        return e[B(0x20b)](0x11d7 * -0x2 + -0x1fc6 + 0x443c)[C(0x202)](q);
    };
exports[y(0x21a) + z(0x213)] = DashTicketsQueues;
const ContactsReport = async (e, f) => {
    const D = y, E = y, g = {};
    g[D(0x218)] = function (u, v) {
        return u === v;
    }, g[D(0x1fc)] = D(0x211);
    const h = g, {tenantId: i} = e[E(0x219)], j = e[E(0x216)], l = j[D(0x200)], m = j[E(0x1f8)], n = j[E(0x1ee)] ? j[D(0x1ee)][E(0x21b)](u => parseInt(u)) : undefined, o = j[E(0x1f1)] ? j[E(0x1f1)][D(0x21b)](u => parseInt(u)) : undefined, p = j[D(0x212) + 'm'], q = j[D(0x1fd)] ? j[D(0x1fd)][E(0x21b)](u => parseInt(u)) : undefined, r = h[E(0x218)](j[D(0x20c)], h[E(0x1fc)]), s = {};
    s[E(0x200)] = l, s[E(0x1f8)] = m, s[D(0x1ee)] = n, s[D(0x1f1)] = o, s[D(0x1fd)] = q, s[E(0x209)] = i, s[D(0x208)] = e[E(0x219)][D(0x208)], s[D(0x205)] = +e[E(0x219)]['id'], s[E(0x212) + 'm'] = p, s[E(0x20c)] = r;
    const t = await (0x2118 + 0x1 * 0x22d3 + -0x43eb * 0x1, ContactsReportService_1[E(0x20e)])(s);
    return f[E(0x20b)](0x217 * -0x5 + 0x73c + 0x3 * 0x155)[E(0x202)](t);
};
exports[y(0x203) + z(0x1f2)] = ContactsReport;