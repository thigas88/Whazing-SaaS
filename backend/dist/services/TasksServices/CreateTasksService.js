'use strict';
const u = b, v = b;
function a() {
    const z = [
        'erty',
        'defineProp',
        'value',
        'descriptio',
        '../../mode',
        '693000PnxlNm',
        'tVxtG',
        'create',
        '3023595qKPEFv',
        '111ugCmtB',
        '228LeCSDn',
        '__importDe',
        'pending',
        'limitDate',
        'name',
        'owner',
        'priority',
        'comments',
        '667fsyyYG',
        '2760WbRqIX',
        '11824WWhAPp',
        'ls/Tasks',
        '91091zBmLZl',
        'fault',
        'userId',
        'status',
        '__esModule',
        'default',
        '7690SGfDsp',
        '14047ZyCmSg',
        'tenantId',
        '3739480YSwiUd'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1be1 + 0x6b8 + -0x2197);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x10a)) / (0xb59 * -0x2 + -0x1f38 + 0x35eb) * (-parseInt(s(0x10b)) / (-0x64 * -0x38 + -0x202d + -0x7 * -0x179)) + parseInt(t(0x121)) / (0x1781 + -0x232d + 0x3 * 0x3e5) * (-parseInt(s(0x10c)) / (0x1af6 + 0x23e4 * 0x1 + -0x3ed6)) + parseInt(t(0x11d)) / (-0x22e1 + -0x6ee + 0x29d4) + parseInt(s(0x102)) / (-0x326 * 0x2 + 0x2510 + -0x626 * 0x5) * (parseInt(s(0x10e)) / (0x16a7 + -0x5 * 0x400 + -0x20 * 0x15)) + parseInt(s(0x117)) / (-0x44d + 0x11b8 + 0xd63 * -0x1) + -parseInt(s(0x120)) / (0xb6c + 0x8d1 * -0x2 + 0x63f) + -parseInt(s(0x114)) / (0x23f4 + 0x1153 + 0x289 * -0x15) * (parseInt(t(0x115)) / (-0x4a0 * 0x2 + -0x1127 * 0x1 + 0x1a72 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x45442 * -0x1 + 0x5fda * 0x13 + 0x64605));
var __importDefault = this && this[u(0x103) + u(0x10f)] || function (c) {
    const w = u;
    return c && c[w(0x112)] ? c : { 'default': c };
};
const k = {};
k[v(0x11a)] = !![], Object[v(0x119) + v(0x118)](exports, v(0x112), k);
const Tasks_1 = __importDefault(require(v(0x11c) + v(0x10d))), CreateTasksService = async ({
        name: e,
        description: f,
        limitDate: g,
        owner: h,
        priority: i,
        comments: j,
        userId: l,
        tenantId: m
    }) => {
        const x = v, y = v, n = {};
        n[x(0x11e)] = x(0x104);
        const o = n, p = {};
        p[x(0x106)] = e, p[y(0x11b) + 'n'] = f, p[x(0x105)] = g, p[x(0x107)] = h, p[x(0x111)] = o[x(0x11e)], p[x(0x108)] = i, p[x(0x109)] = j, p[y(0x110)] = l, p[x(0x116)] = m;
        const q = p, r = await Tasks_1[x(0x113)][x(0x11f)](q);
        return r;
    };
exports[u(0x113)] = CreateTasksService;