'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xce3 + 0x2459 + -0x3034);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const C = [
        'findAll',
        'fault',
        '__esModule',
        '79681QzrgLZ',
        '1395695mKBury',
        'length',
        '242262vFzDvH',
        '4444314pUyJdb',
        'rate',
        'reduce',
        '120597XaXXWU',
        'ls/UserRat',
        '2OtDKgZ',
        'where',
        'ing',
        'erty',
        '6hneUKa',
        'dKbet',
        'getUserAve',
        '29006406sTNmVF',
        '__importDe',
        '472gicmFV',
        'between',
        'mRHmv',
        '13640620qYyGcL',
        'OpWzM',
        'value',
        '../../mode',
        '100RmoyQf',
        'hlEqb',
        'sequelize',
        'defineProp',
        'attributes',
        'not',
        'rageRating',
        'default'
    ];
    a = function () {
        return C;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x10a)) / (-0x4f2 + -0x16e5 + -0x63 * -0x48) * (-parseInt(w(0x113)) / (-0x647 * -0x5 + -0xd * 0x2df + 0x5f2)) + -parseInt(w(0x111)) / (0x2b * 0x3e + -0x1 * -0x2c5 + -0xd2c) * (-parseInt(w(0x123)) / (0x2 * 0x925 + 0x1228 + -0x246e * 0x1)) + -parseInt(w(0x10b)) / (-0x65 * 0x3b + 0x47e * -0x5 + 0x2dc2) + parseInt(v(0x117)) / (0x19ab * 0x1 + -0x1f77 + -0x5d2 * -0x1) * (parseInt(w(0x10e)) / (0x514 + -0x1484 + 0x6b * 0x25)) + -parseInt(v(0x11c)) / (0x21b1 + 0x19b9 + -0x3b62) * (parseInt(v(0x10d)) / (-0x8d + -0x3fe * -0x7 + -0x11 * 0x19c)) + -parseInt(v(0x11f)) / (-0x8 * -0x54 + -0x169f + 0x1409) + parseInt(w(0x11a)) / (-0x541 + 0x58 * 0x44 + 0x1 * -0x1214);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7467 + -0x1d3 * -0x841 + -0xc667 * 0x1));
var __importDefault = this && this[x(0x11b) + x(0x108)] || function (c) {
    const z = y;
    return c && c[z(0x109)] ? c : { 'default': c };
};
const k = {};
k[x(0x121)] = !![], Object[y(0x126) + y(0x116)](exports, x(0x109), k);
const UserRating_1 = __importDefault(require(x(0x122) + y(0x112) + x(0x115))), sequelize_1 = require(y(0x125));
class UserRatingService {
    async [x(0x119) + x(0x129)](g, h, i) {
        const A = x, B = x, j = {};
        j[A(0x118)] = function (t, u) {
            return t && u;
        }, j[B(0x120)] = B(0x10f), j[A(0x124)] = function (t, u) {
            return t === u;
        }, j[A(0x11e)] = function (t, u) {
            return t / u;
        };
        const l = j, m = l[A(0x118)](h, i) ? {
                'updatedAt': {
                    [sequelize_1['Op'][B(0x11d)]]: [
                        h,
                        i
                    ]
                }
            } : {}, n = { [sequelize_1['Op'][A(0x128)]]: null }, o = {
                'userId': g,
                'rate': n,
                ...m
            }, p = {};
        p[A(0x114)] = o, p[B(0x127)] = [l[B(0x120)]];
        const q = await UserRating_1[B(0x12a)][A(0x12b)](p);
        if (l[B(0x124)](q[A(0x10c)], 0x1 * -0x1e05 + -0x647 * -0x4 + 0x4e9))
            return null;
        const r = q[B(0x110)]((t, u) => t + u[A(0x10f)], 0x1a39 + 0x80 * 0x11 + 0xb93 * -0x3), s = l[A(0x11e)](r, q[B(0x10c)]);
        return s;
    }
}
exports[x(0x12a)] = new UserRatingService();