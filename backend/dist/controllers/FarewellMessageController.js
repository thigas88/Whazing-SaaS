'use strict';
const s = b, t = b;
function a() {
    const F = [
        'message',
        'teFarewell',
        'updateFare',
        'createFare',
        'userId',
        '315YzaOOy',
        'fault',
        'vice',
        'value',
        'All',
        '24ATMbYN',
        'farewellMe',
        'FarewellMe',
        '361155ubyLcm',
        '__importDe',
        'status',
        'defineProp',
        '4LVoIIr',
        'default',
        'user',
        'vices/Dele',
        'send',
        'ssages',
        '10463cHAsLp',
        'vices/Upda',
        '__esModule',
        '11886264jujFji',
        's/Farewell',
        '480981EkrsYU',
        'vices/Crea',
        'body',
        'error',
        'llMessages',
        '424921AHwCso',
        'params',
        'vices/List',
        '77392lNnIjy',
        'ssageServi',
        'json',
        '3069610JFRDvc',
        '11FkWTkH',
        '../service',
        '58ryDvbz',
        'listFarewe',
        'wellMessag',
        'erty',
        'tenantId',
        'remove',
        'MessageSer',
        'ceAll',
        'global'
    ];
    a = function () {
        return F;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xa6)) / (0x559 + -0x1 * 0x2063 + 0x2b * 0xa1) * (-parseInt(r(0xb9)) / (-0x635 * -0x6 + -0x26cd + 0x191)) + parseInt(q(0xab)) / (-0x1 * -0x19 + -0x9 * -0x312 + -0x1bb8) * (-parseInt(r(0xa0)) / (0x18ba + 0x10eb + -0x29a1)) + parseInt(r(0x9c)) / (-0x2b * 0xcd + -0x136c + -0x8 * -0x6bc) + parseInt(q(0x99)) / (-0x2 * -0xad4 + 0x18a * -0x3 + -0x2d6 * 0x6) * (parseInt(r(0xb0)) / (-0x171 * -0x1b + -0xfcc + 0xb8c * -0x2)) + parseInt(q(0xb3)) / (0x17 * 0xfe + 0x2611 + -0x1 * 0x3cdb) * (-parseInt(r(0x94)) / (0x2e * -0x3b + -0x2f * 0x91 + -0x1 * -0x2542)) + parseInt(q(0xb6)) / (-0x21fd + -0x4 * -0x35b + -0x5 * -0x41f) * (-parseInt(q(0xb7)) / (-0x15e6 + -0x8f6 + -0x36f * -0x9)) + parseInt(r(0xa9)) / (0x1 * -0xb57 + 0x1 * -0x734 + 0x1297);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3f * 0xe3e + -0x415b7 + 0xb705 * 0x5));
var __importDefault = this && this[s(0x9d) + s(0x95)] || function (c) {
    const u = s;
    return c && c[u(0xa8)] ? c : { 'default': c };
};
const k = {};
k[s(0x97)] = !![], Object[t(0x9f) + s(0xbc)](exports, t(0xa8), k), exports[t(0x91) + s(0xbb) + 'e'] = exports[t(0xbe)] = exports[t(0x92) + t(0xbb) + 'e'] = exports[s(0xba) + s(0xaf) + t(0x98)] = exports[t(0xba) + s(0xaf)] = void (0x9f2 + -0x59 * 0x2e + -0x204 * -0x3);
const ListFarewellMessageService_1 = __importDefault(require(s(0xb8) + s(0xaa) + t(0xbf) + t(0xb2) + s(0x9b) + s(0xb4) + 'ce')), CreateFarewellMessageService_1 = __importDefault(require(t(0xb8) + t(0xaa) + t(0xbf) + t(0xac) + s(0x90) + t(0xbf) + s(0x96))), DeleteFarewellMessageService_1 = __importDefault(require(t(0xb8) + s(0xaa) + s(0xbf) + s(0xa3) + t(0x90) + s(0xbf) + s(0x96))), ListFarewellMessageServiceAll_1 = __importDefault(require(t(0xb8) + t(0xaa) + s(0xbf) + t(0xb2) + s(0x9b) + s(0xb4) + s(0xc0))), UpdateFarewellMessageService_1 = __importDefault(require(t(0xb8) + s(0xaa) + t(0xbf) + t(0xa7) + t(0x90) + s(0xbf) + t(0x96))), listFarewellMessages = async (e, f) => {
        const v = s, w = t, {
                tenantId: g,
                id: h
            } = e[v(0xa2)], i = {};
        i[w(0xbd)] = g, i[w(0x93)] = h;
        const {farewellMessages: j} = await (-0x932 + -0xe * -0x229 + -0x1 * 0x150c, ListFarewellMessageService_1[v(0xa1)])(i), l = {};
        return l[w(0x9a) + w(0xa5)] = j, f[w(0xb5)](l);
    };
exports[s(0xba) + s(0xaf)] = listFarewellMessages;
const listFarewellMessagesAll = async (e, f) => {
    const x = t, y = s, {
            tenantId: g,
            id: h
        } = e[x(0xa2)], i = {};
    i[x(0xbd)] = g, i[x(0x93)] = h;
    const {farewellMessages: j} = await (0x2 * -0xbd8 + -0xa90 + 0x2240, ListFarewellMessageServiceAll_1[y(0xa1)])(i), l = {};
    return l[x(0x9a) + y(0xa5)] = j, f[y(0xb5)](l);
};
exports[s(0xba) + t(0xaf) + t(0x98)] = listFarewellMessagesAll;
const createFarewellMessage = async (d, e) => {
    const z = s, A = s, {
            tenantId: f,
            id: g
        } = d[z(0xa2)], {
            message: h,
            global: i
        } = d[A(0xad)], j = {};
    j[z(0x8f)] = h, j[z(0x8e)] = i, j[A(0xbd)] = f, j[z(0x93)] = g;
    const l = await (0x35e * -0x5 + 0x8be + 0x818, CreateFarewellMessageService_1[z(0xa1)])(j);
    return e[z(0x9e)](-0x2207 + 0x171 * 0x13 + 0x76d * 0x1)[z(0xb5)](l);
};
exports[t(0x92) + t(0xbb) + 'e'] = createFarewellMessage;
const remove = async (d, e) => {
    const B = s, C = s, {id: f} = d[B(0xb1)], {
            tenantId: g,
            id: h
        } = d[C(0xa2)], i = {};
    return i['id'] = f, i[B(0xbd)] = g, i[B(0x93)] = h, await (-0x6a9 + -0x768 + 0xe11, DeleteFarewellMessageService_1[B(0xa1)])(i), e[C(0x9e)](-0x1fff * 0x1 + 0x21e9 + -0x11e)[C(0xa4)]();
};
exports[s(0xbe)] = remove;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x108 + 0x15dc * -0x1 + 0x1772);
        let h = e[f];
        return h;
    }, b(c, d);
}
const updateFarewellMessage = async (e, f) => {
    const D = s, E = t, {id: g} = e[D(0xb1)], {
            tenantId: h,
            id: i
        } = e[D(0xa2)], {
            message: j,
            global: l
        } = e[E(0xad)];
    try {
        const m = {};
        m['id'] = g, m[D(0xbd)] = h, m[D(0x93)] = i, m[D(0x8f)] = j, m[E(0x8e)] = l;
        const n = await (-0x109d + -0x26e4 + -0x1 * -0x3781, UpdateFarewellMessageService_1[D(0xa1)])(m);
        return f[E(0x9e)](-0xa3c + 0x1265 * 0x2 + -0xce3 * 0x2)[E(0xb5)](n);
    } catch (o) {
        const p = {};
        return p[D(0xae)] = o[D(0x8f)], f[E(0x9e)](-0x1 * -0x196d + -0x2327 + 0x22 * 0x55)[E(0xb5)](p);
    }
};
exports[s(0x91) + t(0xbb) + 'e'] = updateFarewellMessage;