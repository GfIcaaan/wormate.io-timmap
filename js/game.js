function _typeof(t) {
    return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
        return typeof t;
    } : function (t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}
!function () {
    t = {};
    e = {};
    i = {};
    a = {};
    t.c = window;
    t.d = t.c.document;
    i.e = function () {
        return t.c.devicePixelRatio || 1;
    };
    t.c.addEventListener("load", function () {
        // Status joystick bawaan (konfigurasi default + flag aktif)
        let joystickState = {
            eie: null,
            joystick: {
                positionMode: "L",
                checked: true,
                size: 90,
                mode: "dynamic",
                position: {
                    left: "110px",
                    bottom: "110px"
                },
                color: "red",
                pxy: 110
            },
            on: false,
            vj: null,
            uj: null,
            m: null,
            n: null
        };
        // State utama mod; disimpan ke localStorage["tmwSaveGame"]
        let modState = {
            s_l: "https://timmapwormate.com",
            fullscreen: null,
            headshot: 0,
            s_headshot: 0,
            mobile: false,
            mo: 1,
            mo1: {
                x: -1,
                y: -1
            },
            mo2: {
                x: -1,
                y: -1
            },
            s_kill: 0,
            kill: 0,
            died: 0,
            saveGame: false,
            pm: {},
            joystick: joystickState.joystick,
            j: null,
            pk: 0,
            pk0: "",
            pk1: "",
            pk2: "",
            pk3: "",
            pk4: "",
            pk5: "",
            pk6: "",
            z: 1,
            c_v: 222,
            c_1: "Cindynana GM",
            c_2: "Pham  Phu  Bach",
            c_3: "Tim map Wormate",
            c_4: "wormate.io",
            c_5: "please don't copy my code",
            d_1: "UTJsdVpIbE9ZVzVoSUVkTg==",
            d_2: "VUdoaGJTQlFhSFVnUW1GamFBPT0=",
            d_3: "VkdsdGJXRndWMjl5YldGMFpRPT0=",
            d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
            d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: "",
            g: 36,
            s_w: false,
            s_n: "",
            v_z: 0,
            h: false,
            sn: true,
            s: false,
            hz: false,
            fz: true,
            tt: false,
            vh: false,
            vp: false,
            iq: false,
            ctrl: false,
            r1: true,
            In: false,
            sc: 0,
            wi: 0,
            to: 10,
            sm: 20,
            pi: "",
            pn: "",
            se: {
                a: [],
                b: [],
                c: [],
                d: [],
                e: [],
                f: [],
                g: [],
                h: [],
                i: [],
                j: [],
                k: []
            },
            st: false,
            hh: 0,
            sh: [],
            ws: [],
            we: [],
            wm: [],
            wg: [],
            wh: [],
            sg: [],
            gg: null,
            ig: -1,
            so: 1,
            re: false,
            dg: null
        };
        let storedTmwSaveGame = localStorage.getItem("tmwSaveGame");
        if (storedTmwSaveGame && storedTmwSaveGame !== "null") {
            {
                let parsed = JSON.parse(storedTmwSaveGame);
                for (let s in parsed) {
                    modState[s] = parsed[s];
                }
            }
        }
        // Deteksi perangkat mobile lewat userAgent, hasilnya diset ke modState.mobile
        let detectMobile = function () {
            var e;
            let t = false;
            modState.mobile = false;
            e = navigator.userAgent || navigator.vendor || window.opera;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) {
                t = true;
                modState.mobile = true;
            }
            return t;
        };
        // Simpan pengaturan joystick: aktif/tidak (checkbox)
        let setJoystickEnabled = function (t) {
            if (!modState.joystick) {
                modState.joystick = joystickState.joystick;
            }
            modState.joystick.checked = t.checked;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
        };
        // Simpan pengaturan joystick: warna
        let setJoystickColor = function (t) {
            if (!modState.joystick) {
                modState.joystick = joystickState.joystick;
            }
            modState.joystick.color = t.value;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
        };
        // Simpan pengaturan joystick: mode
        let setJoystickMode = function (t) {
            if (!modState.joystick) {
                modState.joystick = joystickState.joystick;
            }
            modState.joystick.mode = t.value;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
        };
        // Simpan pengaturan joystick: posisi kiri/kanan (L/R)
        let setJoystickSide = function (t) {
            if (!modState.joystick) {
                modState.joystick = joystickState.joystick;
            }
            modState.joystick.position = {
                left: "75px",
                bottom: "75px"
            };
            if (t.value === "R") {
                modState.joystick.position = {
                    right: "75px",
                    bottom: "75px"
                };
            }
            modState.joystick.positionMode = t.value;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
        };
        // Simpan pengaturan joystick: jarak dari tepi layar
        let setJoystickOffset = function (t) {
            if (!modState.joystick) {
                modState.joystick = joystickState.joystick;
            }
            modState.joystick.position = {
                left: (parseInt(t.value) + 10).toString() + "px",
                bottom: t.value + "px"
            };
            if (modState.joystick.positionMode === "R") {
                modState.joystick.position = {
                    right: (parseInt(t.value) + 10).toString() + "px",
                    bottom: t.value + "px"
                };
            }
            modState.joystick.pxy = t.value;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
        };
        // Simpan pengaturan joystick: ukuran
        let setJoystickSize = function (t) {
            if (!modState.joystick) {
                modState.joystick = joystickState.joystick;
            }
            modState.joystick.size = t.value;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
        };
        // Menyandikan id skin/eyes/mouth/hat/glasses ke dalam string nickname (modState.f)
        let encodeWearInNickname = function (t, e, i, a, n, text) {
            let f = {
                a: "",
                b: 0,
                c: ""
            };
            if (t > 100 * modState.g + 100 || t < 10 * modState.g || t === undefined) {
                modState.a = t;
                if (t === undefined) {
                    modState.a = Math.floor(Math.random() * (modState.g / 9) + (modState.g - modState.g / 9));
                }
                f.a = "00";
            } else {
                modState.a = t - 10 * modState.g;
                f.b = modState.a;
                modState.a = modState.a % (modState.g / 9);
                f.b = (f.b - modState.a) / (modState.g / 9) + 1;
                modState.a = modState.a + (modState.g - modState.g / 9);
                f.a = f.b.toString(modState.g).padStart(2, 0);
            }
            if (e > 20 * modState.g || e < modState.g / 9 * 100 || e === undefined) {
                if (e > 20 * modState.g && e < 30 * modState.g) {
                    modState.b = e - 20 * modState.g;
                    f.a = f.a + modState.b.toString(modState.g);
                    modState.b = 0;
                    f.c = f.c + "1";
                } else {
                    modState.b = e;
                    if (e === undefined) {
                        modState.b = 0;
                    }
                    f.a = f.a + "0";
                    f.c = f.c + "0";
                }
            } else {
                modState.b = e - modState.g / 9 * 100 + modState.g / modState.g;
                f.a = f.a + modState.b.toString(modState.g);
                modState.b = 0;
                f.c = f.c + "0";
            }
            if (i > 20 * modState.g || i < modState.g / 9 * 100 || i === undefined) {
                if (i > 20 * modState.g && i < 30 * modState.g) {
                    modState.c = i - 20 * modState.g;
                    f.a = f.a + modState.c.toString(modState.g);
                    modState.c = 0;
                    f.c = f.c + "1";
                } else {
                    modState.c = i;
                    if (i === undefined) {
                        modState.c = 0;
                    }
                    f.a = f.a + "0";
                    f.c = f.c + "0";
                }
            } else {
                modState.c = i - modState.g / 9 * 100 + modState.g / modState.g;
                f.a = f.a + modState.c.toString(modState.g);
                modState.c = 0;
                f.c = f.c + "0";
            }
            if (a > 20 * modState.g || a < modState.g / 9 * 100 || a === undefined) {
                if (a > 20 * modState.g && a < 30 * modState.g) {
                    modState.d = a - 20 * modState.g;
                    if (modState.d.toString(modState.g) === "N") {
                        f.a = f.a + "0";
                    } else {
                        f.a = f.a + modState.d.toString(modState.g);
                    }
                    modState.d = 0;
                    f.c = f.c + "1";
                } else {
                    modState.d = a;
                    if (a === undefined) {
                        modState.d = 0;
                    }
                    f.a = f.a + "0";
                    f.c = f.c + "0";
                }
            } else {
                modState.d = a - modState.g / 9 * 100 + modState.g / modState.g;
                if (modState.d.toString(modState.g) === "N") {
                    f.a = f.a + "0";
                } else {
                    f.a = f.a + modState.d.toString(modState.g);
                }
                modState.d = 0;
                f.c = f.c + "0";
            }
            if (n > 20 * modState.g || n < modState.g / 9 * 100 || n === undefined) {
                if (n > 20 * modState.g && n < 30 * modState.g) {
                    f.b = modState.g / modState.g;
                    if (n <= 20 * modState.g + (modState.g - 1)) {
                        modState.e = n - 20 * modState.g;
                    } else if (n <= 20 * modState.g + (modState.g - 1) * 2) {
                        f.b = 2 * f.b;
                        modState.e = n - 20 * modState.g - (modState.g - 1);
                    } else if (n <= 20 * modState.g + (modState.g - 1) * 3) {
                        modState.e = n - 20 * modState.g - (modState.g - 1) * 2;
                    } else if (n <= 20 * modState.g + (modState.g - 1) * 4) {
                        f.b = 2 * f.b;
                        modState.e = n - 20 * modState.g - (modState.g - 1) * 3;
                    } else {
                        modState.e = 0;
                    }
                    if (modState.e >= modState.g) {
                        f.b = 2;
                        modState.e = modState.e - (modState.g - 1);
                    }
                    f.a = f.a + modState.e.toString(modState.g);
                    modState.e = 0;
                    f.c = f.c + "1";
                } else {
                    modState.e = n;
                    if (n === undefined) {
                        modState.e = 0;
                    }
                    f.a = f.a + "0";
                    f.c = f.c + "0";
                    f.b = 0;
                }
            } else {
                f.b = modState.g / modState.g;
                if (n - modState.g / 9 * 100 + 1 >= modState.g) {
                    modState.e = n - (modState.g / 9 * 100 + (modState.g - 1));
                    f.b = 2 * f.b;
                } else {
                    modState.e = n - modState.g / 9 * 100 + f.b;
                }
                f.a = f.a + modState.e.toString(modState.g);
                modState.e = 0;
                f.c = f.c + "0";
            }
            if (f.a == "000000") {
                modState.f = text.substr(0, 22).padEnd(22);
            } else {
                {
                    let s = parseInt(f.c, 2);
                    if (n > 790 && n <= 860) {
                        s += 16;
                    }
                    if (f.b <= 1) {
                        f.a = f.a.substr(0, 5) + "|" + f.a.substr(5, 1);
                    } else {
                        f.a = f.a.substr(0, 4) + "|" + f.a.substr(4, 2);
                    }
                    if (text == "") {
                        text = ".                       .";
                    }
                    if (f.c == "0000") {
                        if (text.substr(23, 1) == ".") {
                            text = text.substr(0, 23).padEnd(23) + " " + text.substr(24, 1).padEnd(1);
                        }
                        modState.f = (text.length >= 32 ? text.substr(0, 25) : text.substr(0, 25).padEnd(25)) + f.a;
                    } else {
                        modState.f = (text.length >= 32 ? text.substr(0, 23) : text.substr(0, 23).padEnd(23)) + "." + s.toString(modState.g) + f.a;
                    }
                    modState.f = modState.f.replaceAll(" ", "_");
                }
            }
        };
        // Membuat joystick nipplejs jika perangkat mobile & joystick aktif
        let createJoystick = function (t) {
            let e;
            try {
                if (!modState.joystick) {
                    modState.joystick = joystickState.joystick;
                }
                if (detectMobile() && t && modState.joystick.checked) {
                    (e = nipplejs.create(modState.joystick)).on("move", function (t, e) {
                        joystickState.eie.fo = e.angle.radian <= Math.PI ? -1 * e.angle.radian : Math.PI - (e.angle.radian - Math.PI);
                    });
                }
                return e;
            } catch (error) {
                console.error(error);
            }
        };
        // Kebalikan encodeWearInNickname: membaca id wear dari string nickname
        let decodeWearFromNickname = function (text) {
            let e = {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0,
                f: "",
                g: 0,
                h: "",
                i: ""
            };
            let i = 0;
            e.h = text.substr(-9);
            if (e.h.substr(0, 1) != ".") {
                e.i = "0000";
            } else if ((i = parseInt(e.h.substr(1, 1), modState.g)) > 15) {
                i -= 16;
                e.i = i.toString(2).padStart(4, 0);
            } else {
                e.i = i.toString(2).padStart(4, 0);
                i = 0;
            }
            e.f = text.substr(-7);
            if (e.f.substr(0, 2) != "00") {
                e.a = parseInt(e.f.substr(0, 2), modState.g);
                e.a = (e.a - 1) * (modState.g / 9) + 10 * modState.g - (modState.g - 4);
            }
            if (e.f.substr(5, 1) == "|") {
                if (e.f.substr(6, 1) != "0") {
                    e.e = parseInt(e.f.substr(6, 1), modState.g);
                    if (e.i.substr(3, 1) != "0") {
                        if (i > 0) {
                            e.e = e.e + 20 * modState.g + (modState.g - 1) * 2;
                        } else {
                            e.e = e.e + 20 * modState.g;
                        }
                    } else {
                        e.e = e.e - 1 + modState.g / 9 * 100;
                    }
                }
            } else {
                e.e = parseInt(e.f.substr(6, 1), modState.g);
                if (e.i.substr(3, 1) != "0") {
                    if (i > 0) {
                        e.e = e.e + 20 * modState.g + (modState.g - 1) * 3;
                    } else {
                        e.e = e.e + 20 * modState.g + (modState.g - 1);
                    }
                } else {
                    e.e = e.e + (modState.g / 9 * 100 + (modState.g - 1));
                }
            }
            e.f = e.f.replace("|", "");
            if (e.f.substr(2, 1) != "0") {
                e.b = parseInt(e.f.substr(2, 1), modState.g);
                if (e.i.substr(0, 1) != "0") {
                    e.b = e.b + 20 * modState.g;
                } else {
                    e.b = e.b - 1 + modState.g / 9 * 100;
                }
            }
            if (e.f.substr(3, 1) != "0") {
                e.c = parseInt(e.f.substr(3, 1), modState.g);
                if (e.i.substr(1, 1) != "0") {
                    e.c = e.c + 20 * modState.g;
                } else {
                    e.c = e.c - 1 + modState.g / 9 * 100;
                }
            }
            if (e.f.substr(4, 1) != "0") {
                e.d = parseInt(e.f.substr(4, 1), modState.g);
                if (e.i.substr(2, 1) != "0") {
                    e.d = e.d + 20 * modState.g;
                } else {
                    e.d = e.d - 1 + modState.g / 9 * 100;
                }
            }
            return e;
        };
        // Cek apakah id wear berada pada rentang yang valid
        let isWearIdInRange = function (t) {
            return !(t > 30 * modState.g) && !(t < modState.g / 9 * 100) || t == 0;
        };
        // Cek format nickname yang membawa kode wear (regex)
        let isEncodedNickname = function (t) {
            return /^(.{25})(\w{5}\|\w{1})$/.test(t) || /^(.{25})(\w{4}\|\w{2})$/.test(t);
        };
        // Membuang kode wear dari nickname sehingga tersisa nama bersih
        let stripEncodedNickname = function (text) {
            text = text.replaceAll("_", " ");
            if (/^(.{25})(\w{7})$/.test(text)) {
                text = text.substr(0, 15).trim();
                while (text.substr(text.length - 1, 1) == ".") {
                    text = text.substr(0, text.length - 1);
                }
                return text;
            }
            if (/^(.{25})(\w{5}\|\w{1})$/.test(text) || /^(.{25})(\w{4}\|\w{2})$/.test(text)) {
                if (text.substr(-9).substr(0, 1) != ".") {
                    return text.substr(0, 25).trim();
                } else {
                    return text.substr(0, 23).trim();
                }
            } else if (/^(.{25})(\w{5}\.\w{1})$/.test(text) || /^(.{25})(\w{4}\.\w{2})$/.test(text)) {
                if (text.substr(-9).substr(0, 1) != ".") {
                    return text.substr(0, 25).trim();
                } else {
                    return text.substr(0, 23).trim();
                }
            } else {
                return text;
            }
        };
        modState.loading = true;
        w = localStorage.getItem("oco");
        localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
        localStorage.setItem("ccg_1", "There was a problem connecting!");
        localStorage.setItem("ccg_2", "Your account has been locked.");
        storedTmwsw = localStorage.getItem("tmwsw");
        S = localStorage.getItem("tmwi") != null ? localStorage.getItem("tmwi").split(",") : localStorage.getItem("tmwi");
        storedTmwit = localStorage.getItem("tmwit");
        C = localStorage.getItem("custom_wear");
        U = localStorage.getItem("custom_skin");
        $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
        $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
        $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
        $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
        $("#mm-action-buttons").hover(function () {
            $("#port_id").val("");
            $("#port_name").val("");
        });
        H = null;
        T = null;
        I = false;
        X = 55;
        M = 1;
        z = true;
        if (S && storedTmwit && storedTmwit == modState.v_z) {
        } else {
            W = {};
            W.img = "i2";
            fetch(modState.s_l + "/store", {
                headers: { ["Content-Type"]: "application/json" },
                method: "POST",
                body: JSON.stringify(W)
            }).then(async function (t) {
                S = (t = await t.json()).i.split(".");
                localStorage.setItem("tmwi", S);
                localStorage.setItem("tmwit", t.vs);
                modState.v_z = t.vs;
                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                window.location.reload();
            }).catch(function (t) {
            });
        }
        A = PIXI.Texture.from(atob(S[0]));
        F = PIXI.Texture.from(atob(S[1]));
        J = PIXI.Texture.from(atob(S[2]));
        G = PIXI.Texture.from(atob(S[3]));
        Y = PIXI.Texture.from(atob(S[4]));
        O = PIXI.Texture.from(atob(S[5]));
        R = PIXI.Texture.from(atob(S[6]));
        L = PIXI.Texture.from(atob(S[7]));
        P = new PIXI.Sprite(A);
        P.buttonMode = true;
        P.anchor.set(0.5);
        P.x = -65;
        P.y = 25;
        P.interactive = true;
        P.buttonMode = true;
        E = new PIXI.Sprite(J);
        E.buttonMode = true;
        E.anchor.set(0.5);
        E.x = -33;
        E.y = 25;
        E.interactive = true;
        E.buttonMode = true;
        N = new PIXI.Sprite(Y);
        N.buttonMode = true;
        N.anchor.set(0.5);
        N.x = -1;
        N.y = 25;
        N.interactive = true;
        N.buttonMode = true;
        Z = new PIXI.Sprite(L);
        Z.buttonMode = true;
        Z.anchor.set(0.5);
        Z.x = -1;
        Z.y = 25;
        Z.interactive = true;
        Z.buttonMode = true;
        K = new PIXI.Sprite(R);
        K.buttonMode = true;
        K.anchor.set(0.5);
        K.x = -33;
        K.y = 25;
        K.interactive = true;
        K.buttonMode = true;
        E.alpha = 0.25;
        P.alpha = 0.25;
        N.alpha = 0.25;
        K.alpha = 0.25;
        Z.alpha = 0.25;
        Q = new PIXI.Text("Map: ?", {
            fontFamily: "PTSans",
            fill: "#fff009",
            fontSize: 12
        });
        Q.anchor.x = 0.5;
        Q.position.x = 110;
        gameContElement = document.getElementById("game-cont");
        gameViewElement = document.getElementById("game-view");
        mmParamsGameModeElement = $("#mm-params-game-mode");
        t.d.getElementById("game-wrap").style.display = "block";
        (function (t, e, a) {
            function n(t, e) {
                return _typeof(t) === e;
            }
            function c() {
                if (_typeof(e.createElement) != "function") {
                    return e.createElement(arguments[0]);
                } else if (l) {
                    return e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]);
                } else {
                    return e.createElement.apply(e, arguments);
                }
            }
            o = [];
            f = [];
            s = {
                _version: "3.3.1",
                _config: {
                    classPrefix: "",
                    enableClasses: true,
                    enableJSClass: true,
                    usePrefixes: true
                },
                _q: [],
                on: function (t, e) {
                    self = this;
                    setTimeout(function () {
                        e(self[t]);
                    }, 0);
                    var self;
                },
                addTest: function (t, e, i) {
                    f.push({
                        name: t,
                        fn: e,
                        options: i
                    });
                },
                addAsyncTest: function (t) {
                    f.push({
                        name: null,
                        fn: t
                    });
                }
            };
            d = function () {
            };
            d.prototype = s;
            d = new d();
            h = false;
            try {
                h = "WebSocket" in t && t.WebSocket.CLOSING === 2;
            } catch (error) {
            }
            d.addTest("websockets", h);
            r = e.documentElement;
            l = r.nodeName.toLowerCase() === "svg";
            d.addTest("canvas", function () {
                var t;
                t = c("canvas");
                return !(!t.getContext || !t.getContext("2d"));
            });
            d.addTest("canvastext", function () {
                return d.canvas !== false && _typeof(c("canvas").getContext("2d").fillText) == "function";
            });
            (function () {
                for (var r in f) {
                    if (f.hasOwnProperty(r)) {
                        t = [];
                        if ((e = f[r]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) {
                            index2 = 0;
                            while (index2 < e.options.aliases.length) {
                                t.push(e.options.aliases[index2].toLowerCase());
                                index2++;
                            }
                        }
                        c = n(e.fn, "function") ? e.fn() : e.fn;
                        index3 = 0;
                        while (index3 < t.length) {
                            if ((_ = (h = t[index3]).split(".")).length === 1) {
                                d[_[0]] = c;
                            } else {
                                if (!(!d[_[0]] || d[_[0]] instanceof Boolean)) {
                                    d[_[0]] = new Boolean(d[_[0]]);
                                }
                                d[_[0]][_[1]] = c;
                            }
                            o.push((c ? "" : "no-") + _.join("-"));
                            index3++;
                        }
                    }
                }
                var t;
                var e;
                var index2;
                var c;
                var index3;
                var h;
                var _;
            }());
            (function (t) {
                e = r.className;
                a = d._config.classPrefix || "";
                if (l) {
                    e = e.baseVal;
                }
                if (d._config.enableJSClass) {
                    n = RegExp("(^|\\s)" + a + "no-js(\\s|$)");
                    e = e.replace(n, "$1" + a + "js$2");
                }
                if (d._config.enableClasses) {
                    e += " " + a + t.join(" " + a);
                    if (l) {
                        r.className.baseVal = e;
                    } else {
                        r.className = e;
                    }
                }
                var e;
                var a;
                var n;
            }(o));
            delete s.addTest;
            delete s.addAsyncTest;
            index = 0;
            while (index < d._q.length) {
                d._q[index]();
                index++;
            }
            t.Modernizr = d;
            var o;
            var f;
            var s;
            var d;
            var h;
            var r;
            var l;
            var index;
        }(window, document));
        if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
            t.d.getElementById("error-view").style.display = "block";
            return;
        }
        a.f = {
            g: function (t, e, a) {
                t.stop();
                t.fadeIn(e, a);
            },
            h: function (t, e, a) {
                t.stop();
                t.fadeOut(e, a);
            }
        };
        a.i = WebSocket;
        a.j = Float32Array;
        a.k = (te = (tt = PIXI).BLEND_MODES, ti = tt.WRAP_MODES, {
            l: tt.Container,
            m: tt.BaseTexture,
            n: tt.Texture,
            o: tt.Renderer,
            p: tt.Graphics,
            q: tt.Shader,
            r: tt.Rectangle,
            s: tt.Sprite,
            t: tt.Text,
            u: tt.Geometry,
            v: tt.Mesh,
            w: {
                z: te.ADD,
                A: te.SCREEN,
                B: te.MULTIPLY
            },
            C: { D: ti.REPEAT },
            F: {
                G: function (t) {
                    e = t.parent;
                    if (e != null) {
                        e.removeChild(t);
                    }
                    var e;
                }
            }
        });
        e.H = {
            I: t.c.runtimeHash,
            J: "http://localhost:3000",
            K: "resources",
            L: "images/linelogo-valday2024.png",
            M: "images/guest-avatar-valday2024.png",
            N: "images/confetti-valday2024.png",
            O: "images/bg-event-pattern-valday2025.png"
        };
        e.H.P = ((ta = t.c.I18N_LANG) || (ta = "en"), ta);
        e.H.Q = function () {
            var t;
            switch (e.H.P) {
            case "uk":
                t = "uk_UA";
                break;
            case "de":
                t = "de_DE";
                break;
            case "fr":
                t = "fr_FR";
                break;
            case "es":
                t = "es_ES";
                break;
            default:
                t = "en_US";
            }
            return t;
        }();
        moment.locale(e.H.Q);
        ooo = null;
        e.S = 6.283185307179586;
        e.T = 3.141592653589793;
        tn = t.c.I18N_MESSAGES;
        i.U = function (t) {
            return tn[t];
        };
        i.V = function (t) {
            if (t[e.H.P]) {
                return t[e.H.P];
            } else if (t.en) {
                return t.en;
            } else {
                return t.x;
            }
        };
        i.W = function (t) {
            return encodeURI(t);
        };
        i.X = function (t, e) {
            return setInterval(t, e);
        };
        i.Y = function (t, e) {
            return setTimeout(t, e);
        };
        i.Z = function (t) {
            clearTimeout(t);
        };
        i.$ = function (t) {
            var e;
            var a;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
            e = (i._(t) % 60).toString();
            a = (i._(t / 60) % 60).toString();
            n = (i._(t / 3600) % 24).toString();
            c = i._(t / 86400).toString();
            o = i.U("util.time.days");
            f = i.U("util.time.hours");
            s = i.U("util.time.min");
            d = i.U("util.time.sec");
            if (c > 0) {
                return c + " " + o + " " + n + " " + f + " " + a + " " + s + " " + e + " " + d;
            } else if (n > 0) {
                return n + " " + f + " " + a + " " + s + " " + e + " " + d;
            } else if (a > 0) {
                return a + " " + s + " " + e + " " + d;
            } else {
                return e + " " + d;
            }
        };
        i.aa = function (text) {
            return text.includes("href") ? text.replaceAll("href", "target=\"_black\" href") : text;
        };
        i.ba = function (e, a, n) {
            c = t.d.createElement("script");
            o = true;
            if (_typeof(a) !== "undefined" && a !== null) {
                if (_typeof(a.id) !== "undefined") {
                    c.id = a.id;
                }
                if (_typeof(a.async) !== "undefined" && a.async) {
                    c.async = "async";
                }
                if (_typeof(a.defer) !== "undefined" && a.defer) {
                    c.defer = "defer";
                }
                if (_typeof(a.crossorigin) !== "undefined") {
                    c.crossorigin = a.crossorigin;
                }
            }
            c.type = "text/javascript";
            c.src = e;
            if (n) {
                c.onload = c.onreadystatechange = function () {
                    o = false;
                    try {
                        n();
                    } catch (error) {
                    }
                    c.onload = c.onreadystatechange = null;
                };
            }
            (t.d.head || t.d.getElementsByTagName("head")[0]).appendChild(c);
            var c;
            var o;
        };
        i.ca = function (t, e) {
            var i;
            i = e;
            i.prototype = Object.create(t.prototype);
            i.prototype.constructor = i;
            i.parent = t;
            return i;
        };
        i.da = function (t) {
            return (t %= e.S) < 0 ? t + e.S : t;
        };
        i.ea = function (t, e, a) {
            return i.fa(a, t, e);
        };
        i.fa = function (t, e, i) {
            if (t > i) {
                return i;
            } else if (t < e) {
                return e;
            } else if (Number.isFinite(t)) {
                return t;
            } else {
                return 0.5 * (e + i);
            }
        };
        i.ga = function (t, e, a, n) {
            return e > t ? i.ha(e, t + a * n) : i.ia(e, t - a * n);
        };
        i.ja = function (t, e, i, a, n) {
            return e + (t - e) * Math.pow(1 - a, i / n);
        };
        i.ka = function (t, e, i) {
            return t - (t - e) * i;
        };
        i.la = function (t, e) {
            return Math.sqrt(t * t + e * e);
        };
        i.ma = function () {
            return Math.random();
        };
        i._ = function (t) {
            return Math.floor(t);
        };
        i.na = function (t) {
            return Math.abs(t);
        };
        i.ha = function (t, e) {
            return Math.min(t, e);
        };
        i.ia = function (t, e) {
            return Math.max(t, e);
        };
        i.oa = function (t) {
            return Math.sin(t);
        };
        i.pa = function (t) {
            return Math.cos(t);
        };
        i.qa = function (t) {
            return Math.sqrt(t);
        };
        i.ra = function (t, e) {
            return Math.pow(t, e);
        };
        i.sa = function (t) {
            return Math.atan(t);
        };
        i.ta = function (t, e) {
            return Math.atan2(t, e);
        };
        i.ua = function (t, e, i, a) {
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
            var h;
            var _;
            var r;
            n = e + a;
            if (t == null) {
                throw TypeError();
            }
            c = t.length >>> 0;
            o = i >> 0;
            f = o < 0 ? Math.max(c + o, 0) : Math.min(o, c);
            s = e >> 0;
            d = s < 0 ? Math.max(c + s, 0) : Math.min(s, c);
            h = n === undefined ? c : n >> 0;
            _ = Math.min((h < 0 ? Math.max(c + h, 0) : Math.min(h, c)) - d, c - f);
            r = 1;
            if (d < f && f < d + _) {
                r = -1;
                d += _ - 1;
                f += _ - 1;
            }
            while (_ > 0) {
                if (d in t) {
                    t[f] = t[d];
                } else {
                    delete t[f];
                }
                d += r;
                f += r;
                _--;
            }
            return t;
        };
        i.va = function (t, e) {
            return t + (e - t) * i.ma();
        };
        i.wa = function (t) {
            return t[parseInt(i.ma() * t.length)];
        };
        i.xa = (tc = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ].map(function (text) {
            return text.charCodeAt(0);
        }), function (t) {
            var e;
            var a;
            if (_typeof(t) == "undefined") {
                t = 16;
            }
            e = "";
            a = 0;
            while (a < t) {
                e += String.fromCharCode(tc[i._(i.ma() * tc.length)]);
                a++;
            }
            return e;
        });
        i.ya = function (t, e, a) {
            var n;
            var c;
            n = a * (1 - 0.5 * e);
            c = Math.min(n, 1 - n);
            return i.za(t, c ? (a - n) / c : 0, n);
        };
        i.za = function (t, e, a) {
            var n;
            var c;
            var o;
            n = (1 - i.na(2 * a - 1)) * e;
            c = n * (1 - i.na(t / 60 % 2 - 1));
            o = a - n / 2;
            if (t >= 0 && t < 60) {
                return [
                    o + n,
                    o + c,
                    o
                ];
            } else if (t >= 60 && t < 120) {
                return [
                    o + c,
                    o + n,
                    o
                ];
            } else if (t >= 120 && t < 180) {
                return [
                    o,
                    o + n,
                    o + c
                ];
            } else if (t >= 180 && t < 240) {
                return [
                    o,
                    o + c,
                    o + n
                ];
            } else if (t >= 240 && t < 300) {
                return [
                    o + c,
                    o,
                    o + n
                ];
            } else {
                return [
                    o + n,
                    o,
                    o + c
                ];
            }
        };
        i.Aa = function (t, e, a) {
            $.get(t).fail(e).done(a);
        };
        i.Ba = function (t, e, a, n) {
            c = {};
            c.type = "GET";
            c.url = t;
            o = {};
            o.responseType = "arraybuffer";
            o.onprogress = function (t) {
                if (t.lengthComputable) {
                    n(t.loaded / t.total * 100);
                }
            };
            c.xhrFields = o;
            $.ajax(c).fail(e).done(a);
            var c;
            var o;
        };
        i.Ca = function () {
            return Date.now();
        };
        i.Da = function (t, e) {
            for (var i in t) {
                if (t.hasOwnProperty(i)) {
                    e(i, t[i]);
                }
            }
        };
        i.Ea = function (t) {
            var e;
            var a;
            var n;
            e = t.length - 1;
            while (e > 0) {
                a = i._(i.ma() * (e + 1));
                n = t[e];
                t[e] = t[a];
                t[a] = n;
                e--;
            }
            return t;
        };
        t.Fa = ArrayBuffer;
        t.Ga = DataView;
        t.Ha = function () {
            var e;
            var a;
            var n;
            var c;
            function t(t) {
                this.Ia = t;
                this.Ja = 0;
            }
            e = "getInt8";
            t.prototype.Ka = function () {
                var t;
                t = this.Ia[e](this.Ja);
                this.Ja += 1;
                return t;
            };
            a = "getInt16";
            t.prototype.La = function () {
                var t;
                t = this.Ia[a](this.Ja);
                this.Ja += 2;
                return t;
            };
            n = "getInt32";
            t.prototype.Ma = function () {
                var t;
                t = this.Ia[n](this.Ja);
                this.Ja += 4;
                return t;
            };
            c = "getFloat32";
            t.prototype.Na = function () {
                var t;
                t = this.Ia[c](this.Ja);
                this.Ja += 4;
                return t;
            };
            return t;
        }();
        t.Oa = function () {
            var e;
            var a;
            function t(t) {
                this.Ia = t;
                this.Ja = 0;
            }
            e = "setInt8";
            t.prototype.Pa = function (t) {
                this.Ia[e](this.Ja, t);
                this.Ja += 1;
            };
            a = "setInt16";
            t.prototype.Qa = function (t) {
                this.Ia[a](this.Ja, t);
                this.Ja += 2;
            };
            return t;
        }();
        t.Wa = function () {
            function t(t, e, i, a, n, c, o, f, s, d) {
                this.Xa = t;
                this.Ya = e;
                this.Za = null;
                this.$a = false;
                this._a = i;
                this.ab = a;
                this.bb = n;
                this.cb = c;
                this.db = o || (s || n) / 2;
                this.eb = f || (d || c) / 2;
                this.fb = s || n;
                this.gb = d || c;
                this.hb = 0.5 - (this.db - 0.5 * this.fb) / this.bb;
                this.ib = 0.5 - (this.eb - 0.5 * this.gb) / this.cb;
                this.jb = this.bb / this.fb;
                this.kb = this.cb / this.gb;
            }
            t.lb = function () {
                return new t("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            t.mb = function (e, a, n) {
                return new t(e, a, n.x, n.y, n.w, n.h, n.px, n.py, n.pw, n.ph);
            };
            t.prototype.nb = function () {
                if (!this.$a) {
                    if (this.Ya != null) {
                        this.Za = new a.k.n(this.Ya, new a.k.r(this._a, this.ab, this.bb, this.cb));
                    }
                    this.$a = true;
                }
                return this.Za;
            };
            t.prototype.ob = function () {
                if (this.Za != null) {
                    this.Za.destroy();
                }
            };
            return t;
        }();
        t.pb = function () {
            function e(t, e, i, a, n, c, o, f, s, d, h, _, r, l, p, u, g, m) {
                this.qb = t;
                this.rb = e;
                this.sb = i;
                this.tb = a;
                this.ub = n;
                this.vb = c;
                this.wb = o;
                this.xb = f;
                this.yb = s;
                this.zb = d;
                this.Ab = h;
                this.Bb = _;
                this.Cb = r;
                this.Db = l;
                this.Eb = p;
                this.Fb = u;
                this.Gb = g;
                this.Hb = m;
            }
            e.prototype.ob = function () {
                index = 0;
                while (index < this.qb.length) {
                    this.qb[index].dispose();
                    this.qb[index].destroy();
                    index++;
                }
                this.qb = [];
                index2 = 0;
                while (index2 < this.rb.length) {
                    this.rb[index2].ob();
                    index2++;
                }
                this.rb = [];
                var index;
                var index2;
            };
            e.lb = function () {
                var a;
                var n;
                a = new e.Ib(t.Kb.Jb, t.Kb.Jb);
                n = new e.Lb("#ffffff", [t.Kb.Jb], [t.Kb.Jb]);
                return new e([], [], {}, a, {}, new e.Mb(t.Kb.Jb), {}, n, {}, new e.Nb("", n, a), {}, new e.Ob([t.Kb.Jb]), {}, new e.Ob([t.Kb.Jb]), {}, new e.Ob([t.Kb.Jb]), {}, new e.Ob([t.Kb.Jb]));
            };
            e.Pb = function (a, n, c, o) {
                var f;
                var s;
                f = new e.Ib(t.Kb.Jb, t.Kb.Jb);
                s = new e.Lb("#ffffff", [a], [n]);
                return new e([], [], {}, f, {}, new e.Mb(t.Kb.Jb), {}, s, {}, new e.Nb("", s, f), {}, new e.Ob([c]), {}, new e.Ob([o]), {}, new e.Ob([t.Kb.Jb]), {}, new e.Ob([t.Kb.Jb]));
            };
            e.Qb = function (t, a, n, c) {
                var o;
                var f;
                var index;
                var d;
                var h;
                var _;
                var r;
                var l;
                var p;
                var u;
                var g;
                var m;
                var v;
                var y;
                var k;
                var j;
                var w;
                var x;
                var S;
                var q;
                var C;
                var U;
                o = {};
                i.Da(t.colorDict, function (t, e) {
                    o[t] = "#" + e;
                });
                f = {};
                index = 0;
                while (index < t.skinArrayDict.length) {
                    d = t.skinArrayDict[index];
                    f[d.id] = new e.Lb(o[d.prime], d.base.map(function (t) {
                        return a[t];
                    }), d.glow.map(function (t) {
                        return a[t];
                    }));
                    index++;
                }
                _ = t.skinUnknown;
                h = new e.Lb(o[_.prime], _.base.map(function (t) {
                    return a[t];
                }), _.glow.map(function (t) {
                    return a[t];
                }));
                r = {};
                i.Da(t.eyesDict, function (t, n) {
                    r[parseInt(t)] = new e.Ob(n.base.map(function (t) {
                        return a[t.region];
                    }));
                });
                l = new e.Ob(t.eyesUnknown.base.map(function (t) {
                    return a[t.region];
                }));
                p = {};
                i.Da(t.mouthDict, function (t, n) {
                    p[parseInt(t)] = new e.Ob(n.base.map(function (t) {
                        return a[t.region];
                    }));
                });
                u = new e.Ob(t.mouthUnknown.base.map(function (t) {
                    return a[t.region];
                }));
                g = {};
                i.Da(t.hatDict, function (t, n) {
                    g[parseInt(t)] = new e.Ob(n.base.map(function (t) {
                        return a[t.region];
                    }));
                });
                m = new e.Ob(t.hatUnknown.base.map(function (t) {
                    return a[t.region];
                }));
                v = {};
                i.Da(t.glassesDict, function (t, n) {
                    v[parseInt(t)] = new e.Ob(n.base.map(function (t) {
                        return a[t.region];
                    }));
                });
                y = new e.Ob(t.glassesUnknown.base.map(function (t) {
                    return a[t.region];
                }));
                k = {};
                i.Da(t.portionDict, function (t, n) {
                    k[t = parseInt(t)] = new e.Ib(a[n.base], a[n.glow]);
                });
                w = t.portionUnknown;
                j = new e.Ib(a[w.base], a[w.glow]);
                x = {};
                i.Da(t.abilityDict, function (t, n) {
                    x[t = parseInt(t)] = new e.Mb(a[n.base]);
                });
                q = t.abilityUnknown;
                S = new e.Mb(a[q.base]);
                C = {};
                i.Da(t.teamDict, function (t, n) {
                    C[t = parseInt(t)] = new e.Nb(n.title, new e.Lb(o[n.skin.prime], null, n.skin.glow.map(function (t) {
                        return a[t];
                    })), new e.Ib(null, a[n.portion.glow]));
                });
                U = new e.Nb({}, h, j);
                return new e(n, c, k, j, x, S, f, h, C, U, r, l, p, u, g, m, v, y);
            };
            e.prototype.Rb = function (e) {
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
                var p;
                a = i.Ea(Object.keys(this.wb)).slice(0, e);
                n = i.Ea(Object.keys(this.Ab)).slice(0, e);
                c = i.Ea(Object.keys(this.Cb)).slice(0, e);
                o = i.Ea(Object.keys(this.Eb)).slice(0, e);
                f = i.Ea(Object.keys(this.Gb)).slice(0, e);
                s = [];
                d = 0;
                while (d < e) {
                    h = a.length > 0 ? a[d % a.length] : 0;
                    _ = n.length > 0 ? n[d % n.length] : 0;
                    r = c.length > 0 ? c[d % c.length] : 0;
                    l = o.length > 0 ? o[d % o.length] : 0;
                    p = f.length > 0 ? f[d % f.length] : 0;
                    s.push(new t.Sb(h, _, r, l, p));
                    d++;
                }
                return s;
            };
            e.prototype.Tb = function (t) {
                return this.wb.hasOwnProperty(t) ? this.wb[t] : this.xb;
            };
            e.prototype.Ub = function (t) {
                return this.yb.hasOwnProperty(t) ? this.yb[t] : this.zb;
            };
            e.prototype.Vb = function (t) {
                return this.Ab.hasOwnProperty(t) ? this.Ab[t] : this.Bb;
            };
            e.prototype.Wb = function (t) {
                return this.Cb.hasOwnProperty(t) ? this.Cb[t] : this.Db;
            };
            e.prototype.Xb = function (t) {
                return this.Gb.hasOwnProperty(t) ? this.Gb[t] : this.Hb;
            };
            e.prototype.Yb = function (t) {
                return this.Eb.hasOwnProperty(t) ? this.Eb[t] : this.Fb;
            };
            e.prototype.Zb = function (t) {
                return this.sb.hasOwnProperty(t) ? this.sb[t] : this.tb;
            };
            e.prototype.$b = function (t) {
                return this.ub.hasOwnProperty(t) ? this.ub[t] : this.vb;
            };
            e.Nb = function t(e, i, a) {
                this._b = e;
                this.ac = i;
                this.bc = a;
            };
            e.Lb = function t(e, i, a) {
                this.cc = e;
                this.dc = i;
                this.ec = a;
            };
            e.Ob = function t(e) {
                this.dc = e;
            };
            e.Ib = function t(e, i) {
                this.dc = e;
                this.ec = i;
            };
            e.Mb = function t(e) {
                this.dc = e;
            };
            return e;
        }();
        t.Kb = function () {
            function e() {
                e = a.k.m.from("images/wear-ability.png");
                this.fc = new t.Wa("magnet_ability", e, 158, 86, 67, 124, 148, 63.5, 128, 128);
                this.gc = new t.Wa("velocity_ability", e, 158, 4, 87, 74, 203, 63.5, 128, 128);
                this.hc = new t.Wa("flex_ability", e, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
                c = a.k.m.from("images/def-look.png");
                o = new t.Wa("def_eyes", c, 0, 0, 42, 80, 75, 64, 128, 128);
                f = new t.Wa("def_mouth", c, 46, 0, 20, 48, 109, 63, 128, 128);
                s = new t.Wa("def_skin_glow", c, 70, 0, 32, 32, 0, 0, 0, 0);
                d = new t.Wa("def_skin_base", c, 46, 52, 64, 64, 0, 0, 0, 0);
                h = t.pb.Pb(d, s, o, f);
                this.ic = new t.jc({}, h);
                this.kc = -10000;
                this.lc = -10000;
                this.mc = ((n = t.c.document.createElement("canvas")).width = 80, n.height = 80, {
                    nc: n,
                    oc: n.getContext("2d"),
                    Za: new a.k.n(a.k.m.from(n))
                });
                this.pc = null;
                this.qc = [];
                var e;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
            }
            e.Jb = t.Wa.lb();
            e.prototype.Sa = function () {
            };
            e.prototype.rc = function (e, a, n) {
                self = this;
                o = this.ic.sc();
                if (o > 0 && i.Ca() - this.kc < 1200000) {
                    if (e != null) {
                        e();
                    }
                    return;
                }
                if (this.pc != null && !this.pc.tc()) {
                    if (i.Ca() - this.kc < 300000) {
                        if (e != null) {
                            e();
                        }
                        return;
                    }
                    this.pc.uc();
                    this.pc = null;
                }
                f = new t.vc(o);
                f.wc(function (t, e) {
                    if (f === self.pc && n != null) {
                        n(t, e);
                    }
                });
                f.xc(function (t) {
                    if (f === self.pc && a != null) {
                        a(t);
                    }
                });
                f.yc(function () {
                    if (f === self.pc && a != null) {
                        a(Error());
                    }
                });
                f.zc(function () {
                    if (f === self.pc && e != null) {
                        e();
                    }
                });
                f.Ac(function (t) {
                    if (f === self.pc) {
                        self.lc = i.Ca();
                        self.pc = null;
                        self.Bc();
                        self.ic.Cc().ob();
                        self.ic = t;
                        if (e != null) {
                            e();
                        }
                        self.Dc();
                        return;
                    }
                    try {
                        t.Cc().ob();
                    } catch (error) {
                    }
                });
                f.Ec();
                this.kc = i.Ca();
                this.pc = f;
                var self;
                var o;
                var f;
            };
            e.prototype.Bc = function () {
            };
            e.prototype.Fc = function () {
                return this.ic.sc() > 0;
            };
            e.prototype.Gc = function () {
                return this.ic.Hc();
            };
            e.prototype.Ic = function () {
                return this.mc;
            };
            e.prototype.Jc = function (t) {
                this.qc.push(t);
            };
            e.prototype.Dc = function () {
                index = 0;
                while (index < this.qc.length) {
                    this.qc[index]();
                    index++;
                }
                var index;
            };
            e.prototype.Cc = function () {
                return this.ic.Cc();
            };
            return e;
        }();
        t.Kc = function () {
            function t(t) {
                this.Lc = t;
            }
            t.prototype.Mc = function (t) {
                return this.Lc[t];
            };
            t.Nc = function () {
                function e() {
                    this.Oc = [];
                }
                e.prototype.Pc = function (e, i) {
                    var index;
                    index = 0;
                    while (index < this.Oc.length) {
                        if (this.Oc[index].Qc === e) {
                            throw Error();
                        }
                        index++;
                    }
                    this.Oc.push(new t.Rc(e, i));
                    return this;
                };
                e.prototype.Sc = function () {
                    var e;
                    var index;
                    var a;
                    var n;
                    var index2;
                    var o;
                    e = 0;
                    index = 0;
                    while (index < this.Oc.length) {
                        e += this.Oc[index].Tc;
                        index++;
                    }
                    a = {};
                    n = 0;
                    index2 = 0;
                    while (index2 < this.Oc.length) {
                        o = this.Oc[index2];
                        o.Tc = o.Tc / e;
                        o.Uc = n;
                        o.Vc = n + o.Tc;
                        n = o.Vc;
                        a[o.Qc] = o;
                        index2++;
                    }
                    return new t(a);
                };
                return e;
            }();
            t.Rc = function () {
                function t(t, e) {
                    this.Qc = t;
                    this.Tc = e;
                    this.Uc = 0;
                    this.Vc = 0;
                }
                t.prototype.Wc = function (t) {
                    return this.Uc + (this.Vc - this.Uc) * t;
                };
                return t;
            }();
            return t;
        }();
        t.Xc = function () {
            var o;
            var f;
            var s;
            var d;
            var h;
            var _;
            function n() {
                this.Yc = new a.k.l();
                this.Yc.sortableChildren = true;
                this.Zc = new h();
                this.Zc.zIndex = f * (2 * (s + 1) + 1 + 3);
                this.$c = 0;
                this._c = Array(s);
                this._c[0] = this.ad(0, new t.bd(), new t.bd());
                e = 1;
                while (e < s) {
                    this._c[e] = this.ad(e, new t.bd(), new t.bd());
                    e++;
                }
                this.cd = 0;
                this.dd = 0;
                this.ed = 0;
                var e;
            }
            f = 0.001;
            s = 797;
            d = 0.1 * e.T;
            n.fd = s;
            n.prototype.ad = function (t, e, i) {
                var a;
                a = new _(e, i);
                e.gd.zIndex = f * (2 * (s - t) + 1 + 3);
                i.gd.zIndex = f * (2 * (s - t) - 2 + 3);
                return a;
            };
            n.prototype.hd = function (e, i, a, n, c, o, f, s) {
                d = a.dc;
                h = e === t.jd.id ? i.ac.ec : a.ec;
                if (d.length > 0 && h.length > 0) {
                    index = 0;
                    while (index < this._c.length) {
                        this._c[index].ld.kd(d[index % d.length]);
                        this._c[index].md.kd(h[index % h.length]);
                        this._c[index].ld.nd(s);
                        this._c[index].md.nd(s);
                        index++;
                    }
                }
                this.Zc.hd(n, c, o, f);
                var d;
                var h;
                var index;
            };
            h = ((o = i.ca(a.k.l, function () {
                a.k.l.call(this);
                this.sortableChildren = true;
                this.od = [];
                this.pd = [];
                this.qd = [];
                this.rd = [];
                this.sd = new a.k.l();
                this.td = [];
                e = 0;
                while (e < 4) {
                    i = new t.bd();
                    i.kd(ooo.ud.fc);
                    this.sd.addChild(i.gd);
                    this.td.push(i);
                    e++;
                }
                this.sd.zIndex = 0.0011;
                this.addChild(this.sd);
                this.vd();
                this.wd = new t.bd();
                this.wd.kd(ooo.ud.gc);
                this.wd.gd.zIndex = 0.001;
                this.addChild(this.wd.gd);
                this.xd();
                var e;
                var i;
            })).prototype.hd = function (t, e, i, a) {
                this.yd(0.002, this.od, t.dc);
                this.yd(0.003, this.pd, e.dc);
                this.yd(0.004, this.rd, a.dc);
                this.yd(0.005, this.qd, i.dc);
            }, o.prototype.yd = function (e, list, a) {
                while (a.length > list.length) {
                    n = new t.bd();
                    list.push(n);
                    this.addChild(n.zd());
                }
                while (a.length < list.length) {
                    list.pop().G();
                }
                c = e;
                index = 0;
                while (index < a.length) {
                    c += 0.0001;
                    f = list[index];
                    f.kd(a[index]);
                    f.gd.zIndex = c;
                    index++;
                }
                var n;
                var c;
                var index;
                var f;
            }, o.prototype.Ad = function (t, e, i, a) {
                this.visible = true;
                this.position.set(t, e);
                this.rotation = a;
                index = 0;
                while (index < this.od.length) {
                    this.od[index].Bd(i);
                    index++;
                }
                index2 = 0;
                while (index2 < this.pd.length) {
                    this.pd[index2].Bd(i);
                    index2++;
                }
                index3 = 0;
                while (index3 < this.qd.length) {
                    this.qd[index3].Bd(i);
                    index3++;
                }
                index4 = 0;
                while (index4 < this.rd.length) {
                    this.rd[index4].Bd(i);
                    index4++;
                }
                var index;
                var index2;
                var index3;
                var index4;
            }, o.prototype.Cd = function () {
                this.visible = false;
            }, o.prototype.Dd = function (t, e, i, a) {
                this.sd.visible = true;
                n = i / 1000;
                c = 1 / this.td.length;
                index = 0;
                while (index < this.td.length) {
                    f = 1 - (n + c * index) % 1;
                    this.td[index].gd.alpha = 1 - f;
                    this.td[index].Bd(e * (0.5 + 4.5 * f));
                    index++;
                }
                var n;
                var c;
                var index;
                var f;
            }, o.prototype.vd = function () {
                this.sd.visible = false;
            }, o.prototype.Ed = function (t, e, a, n) {
                this.wd.gd.visible = modState.vp;
                this.wd.gd.alpha = i.ga(this.wd.gd.alpha, t.Fd ? 0.9 : 0.2, n, 0.0025);
                this.wd.Bd(e);
            }, o.prototype.xd = function () {
                this.wd.gd.visible = false;
            }, o);
            n.prototype.Gd = function (t) {
                return this.dd + this.ed * i.oa(t * d - this.cd);
            };
            n.prototype.Hd = function (n, c, o, f) {
                m = 2 * n.Id;
                v = n.Jd;
                y = n.Kd;
                k = 4 * y - 3;
                j = k;
                this.cd = c / 400 * e.T;
                this.dd = 1.5 * m;
                this.ed = 0.15 * m * n.Ld;
                if (f(d = v[0], p = v[1])) {
                    h = v[2];
                    u = v[3];
                    r = v[4];
                    g = v[5];
                    w = i.ta(g + 2 * p - 3 * u, r + 2 * d - 3 * h);
                    this.Zc.Ad(d, p, m, w);
                    this._c[0].Ad(d, p, m, this.Gd(0), w);
                    this._c[1].Ad(0.64453125 * d + 0.45703125 * h + -0.1015625 * r, 0.64453125 * p + 0.45703125 * u + -0.1015625 * g, m, this.Gd(1), _.Md(this._c[0], this._c[2]));
                    this._c[2].Ad(0.375 * d + 0.75 * h + -0.125 * r, 0.375 * p + 0.75 * u + -0.125 * g, m, this.Gd(2), _.Md(this._c[1], this._c[3]));
                    this._c[3].Ad(0.15234375 * d + 0.94921875 * h + -0.1015625 * r, 0.15234375 * p + 0.94921875 * u + -0.1015625 * g, m, this.Gd(3), _.Md(this._c[2], this._c[4]));
                } else {
                    this.Zc.Cd();
                    this._c[0].Cd();
                    this._c[1].Cd();
                    this._c[2].Cd();
                    this._c[3].Cd();
                }
                x = 4;
                S = 2;
                q = 2 * y - 4;
                while (S < q) {
                    if (f(d = v[S], p = v[S + 1])) {
                        s = v[S - 2];
                        l = v[S - 1];
                        h = v[S + 2];
                        u = v[S + 3];
                        r = v[S + 4];
                        g = v[S + 5];
                        this._c[x].Ad(d, p, m, this.Gd(x), _.Md(this._c[x - 1], this._c[x + 1]));
                        x++;
                        this._c[x].Ad(-0.06640625 * s + 0.84375 * d + 0.2578125 * h + -0.03515625 * r, -0.06640625 * l + 0.84375 * p + 0.2578125 * u + -0.03515625 * g, m, this.Gd(x), _.Md(this._c[x - 1], this._c[x + 1]));
                        x++;
                        this._c[x].Ad(-0.0625 * s + 0.5625 * d + 0.5625 * h + -0.0625 * r, -0.0625 * l + 0.5625 * p + 0.5625 * u + -0.0625 * g, m, this.Gd(x), _.Md(this._c[x - 1], this._c[x + 1]));
                        x++;
                        this._c[x].Ad(-0.03515625 * s + 0.2578125 * d + 0.84375 * h + -0.06640625 * r, -0.03515625 * l + 0.2578125 * p + 0.84375 * u + -0.06640625 * g, m, this.Gd(x), _.Md(this._c[x - 1], this._c[x + 1]));
                        x++;
                    } else {
                        this._c[x].Cd();
                        x++;
                        this._c[x].Cd();
                        x++;
                        this._c[x].Cd();
                        x++;
                        this._c[x].Cd();
                        x++;
                    }
                    S += 2;
                }
                if (f(d = v[2 * y - 4], p = v[2 * y - 3])) {
                    s = v[2 * y - 6];
                    l = v[2 * y - 5];
                    h = v[2 * y - 2];
                    u = v[2 * y - 1];
                    this._c[k - 5].Ad(d, p, m, this.Gd(k - 5), _.Md(this._c[k - 6], this._c[k - 4]));
                    this._c[k - 4].Ad(-0.1015625 * s + 0.94921875 * d + 0.15234375 * h, -0.1015625 * l + 0.94921875 * p + 0.15234375 * u, m, this.Gd(k - 4), _.Md(this._c[k - 5], this._c[k - 3]));
                    this._c[k - 3].Ad(-0.125 * s + 0.75 * d + 0.375 * h, -0.125 * l + 0.75 * p + 0.375 * u, m, this.Gd(k - 3), _.Md(this._c[k - 4], this._c[k - 2]));
                    this._c[k - 2].Ad(-0.1015625 * s + 0.45703125 * d + 0.64453125 * h, -0.1015625 * l + 0.45703125 * p + 0.64453125 * u, m, this.Gd(k - 2), _.Md(this._c[k - 3], this._c[k - 1]));
                    this._c[k - 1].Ad(h, u, m, this.Gd(k - 1), _.Md(this._c[k - 2], this._c[k - 1]));
                } else {
                    this._c[k - 5].Cd();
                    this._c[k - 4].Cd();
                    this._c[k - 3].Cd();
                    this._c[k - 2].Cd();
                    this._c[k - 1].Cd();
                }
                if (this.$c === 0 && j > 0) {
                    this.Yc.addChild(this.Zc);
                }
                if (this.$c > 0 && j === 0) {
                    a.k.F.G(this.Zc);
                }
                while (this.$c < j) {
                    this.Yc.addChild(this._c[this.$c].ld.zd());
                    this.Yc.addChild(this._c[this.$c].md.zd());
                    this.$c += 1;
                }
                while (this.$c > j) {
                    this.$c -= 1;
                    this._c[this.$c].md.G();
                    this._c[this.$c].ld.G();
                }
                C = n.Nd[t.Pd.Od];
                if (this._c[0].Qd() && C != null && C.Rd) {
                    this.Zc.Dd(n, m, c, o);
                } else {
                    this.Zc.vd();
                }
                U = n.Nd[t.Pd.Sd];
                if (this._c[0].Qd() && U != null && U.Rd) {
                    this.Zc.Ed(n, m, c, o);
                } else {
                    this.Zc.xd();
                }
                var s;
                var d;
                var h;
                var r;
                var l;
                var p;
                var u;
                var g;
                var m;
                var v;
                var y;
                var k;
                var j;
                var w;
                var x;
                var S;
                var q;
                var C;
                var U;
            };
            _ = function () {
                function t(t, e) {
                    this.ld = t;
                    this.ld.Td(false);
                    this.md = e;
                    this.md.Td(false);
                }
                t.prototype.Ad = function (t, e, i, a, n) {
                    this.ld.Td(true);
                    this.ld.Ud(t, e);
                    this.ld.Bd(i);
                    this.ld.Vd(n);
                    this.md.Td(true);
                    this.md.Ud(t, e);
                    this.md.Bd(a);
                    this.md.Vd(n);
                };
                t.prototype.Cd = function () {
                    this.ld.Td(false);
                    this.md.Td(false);
                };
                t.prototype.Qd = function () {
                    return this.ld.Qd();
                };
                t.Md = function (t, e) {
                    return i.ta(t.ld.gd.position.y - e.ld.gd.position.y, t.ld.gd.position.x - e.ld.gd.position.x);
                };
                return t;
            }();
            return n;
        }();
        t.Pd = function () {
            function t(t) {
                this.Wd = t;
                this.Rd = false;
                this.Xd = 1;
            }
            t.Sd = 0;
            t.Yd = 1;
            t.Od = 2;
            t.Zd = 6;
            t.$d = 3;
            t._d = 4;
            t.ae = 5;
            return t;
        }();
        t.jc = function () {
            function e(t, e) {
                this.be = t;
                this.ce = e;
            }
            e.de = new e({}, t.pb.lb());
            e.prototype.sc = function () {
                return this.be.revision;
            };
            e.prototype.Hc = function () {
                return this.be;
            };
            e.prototype.Cc = function () {
                return this.ce;
            };
            return e;
        }();
        t.vc = function () {
            function n(t) {
                this.ee = (++n.fe, function (t, e) {
                });
                this.ge = t;
                this.he = null;
                this.ie = null;
                this.je = null;
                this.ke = null;
                this.le = null;
                this.me = false;
                this.ne = false;
                this.oe = false;
            }
            n.pe = {
                qe: "0x0",
                re: "0x1",
                se: "0x2",
                te: "0x3",
                ue: "0x4"
            };
            n.fe = 100000;
            n.ve = new t.Kc.Nc().Pc(n.pe.qe, 1).Pc(n.pe.re, 10).Pc(n.pe.se, 50).Pc(n.pe.te, 15).Pc(n.pe.ue, 5).Sc();
            n.prototype.Ac = function (t) {
                this.he = t;
            };
            n.prototype.zc = function (t) {
                this.ie = t;
            };
            n.prototype.xc = function (t) {
                this.je = t;
            };
            n.prototype.yc = function (t) {
                this.ke = t;
            };
            n.prototype.wc = function (t) {
                this.le = t;
            };
            n.prototype.tc = function () {
                return this.oe;
            };
            n.prototype.uc = function () {
                this.me = true;
            };
            n.prototype.Ec = function () {
                if (!this.ne) {
                    this.ne = true;
                    if (this.me) {
                        this.we();
                        return;
                    }
                    this.xe();
                }
            };
            n.prototype.xe = function () {
                self = this;
                if (this.me) {
                    this.we();
                    return;
                }
                $.ajax({
                    type: "GET",
                    url: e.H.K + "/dynamic/assets/revision.json",
                    xhrFields: {
                        onprogress: function (e) {
                            if (e.lengthComputable) {
                                i = e.loaded / e.total;
                                a = n.pe.qe;
                                self.ye(a, n.ve.Mc(a).Wc(i));
                            }
                            var i;
                            var a;
                        }
                    }
                }).fail(function () {
                    self.ze(Error());
                }).done(function (e) {
                    if (e <= self.ge) {
                        self.Ae();
                        return;
                    }
                    self.Be();
                });
                var self;
            };
            n.prototype.Be = function () {
                self = this;
                if (this.me) {
                    this.we();
                    return;
                }
                $.ajax({
                    type: "GET",
                    url: e.H.K + "/dynamic/assets/registry.json",
                    xhrFields: {
                        onprogress: function (e) {
                            if (e.lengthComputable) {
                                i = e.loaded / e.total;
                                a = n.pe.re;
                                self.ye(a, n.ve.Mc(a).Wc(i));
                            }
                            var i;
                            var a;
                        }
                    }
                }).fail(function () {
                    self.ze(Error());
                }).done(function (e) {
                    if (e.revision <= self.ge) {
                        self.Ae();
                        return;
                    }
                    a = {};
                    n = {};
                    n.country = "gb";
                    n.v = "v2";
                    if (w && w != "gb") {
                        n.country = w;
                    }
                    a = e;
                    if (storedTmwsw && storedTmwit && storedTmwit == modState.v_z) {
                        a = JSON.parse(storedTmwsw);
                        (async function () {
                            for (let i in ((U || C || Array.isArray(modState.dg) && modState.dg.length > 0) && (a = await Ysw(a)), a)) {
                                if (Array.isArray(a[i])) {
                                    e[i] = e[i].concat(a[i]);
                                } else {
                                    e[i] = {
                                        ...e[i],
                                        ...a[i]
                                    };
                                }
                            }
                            self.Ce(e);
                        }());
                    } else {
                        fetch(modState.s_l + "/store", {
                            headers: { ["Content-Type"]: "application/json" },
                            method: "POST",
                            body: JSON.stringify(n)
                        }).then(async function (i) {
                            for (let a in (i = await i.json()).textureDict) {
                                for (let n in i.textureDict[a]) {
                                    if (n === "file") {
                                        i.textureDict[a][n] = "data:image/png;base64," + i.textureDict[a][n].substr(i.textureDict[a][n].length - modState.c_v, modState.c_v) + i.textureDict[a][n].substr(0, i.textureDict[a][n].length - modState.c_v);
                                    }
                                }
                            }
                            for (let o in (localStorage.setItem("tmwsw", JSON.stringify(i)), localStorage.setItem("tmwit", modState.v_z), (U || C || Array.isArray(modState.dg) && modState.dg.length > 0) && (i = await Ysw(i)), i)) {
                                if (Array.isArray(i[o])) {
                                    e[o] = e[o].concat(i[o]);
                                } else {
                                    e[o] = {
                                        ...e[o],
                                        ...i[o]
                                    };
                                }
                            }
                            self.Ce(e);
                        }).catch(function (i) {
                            localStorage.removeItem("custom_wear");
                            localStorage.removeItem("custom_skin");
                            self.Ce(e);
                        });
                    }
                    var a;
                    var n;
                });
                var self;
            };
            n.prototype.Ce = function (a) {
                self = this;
                if (this.me) {
                    this.we();
                    return;
                }
                f = [];
                s = [];
                d = 0;
                for (var h in a.textureDict) {
                    if (a.textureDict.hasOwnProperty(h)) {
                        var _ = a.textureDict[h];
                        if (_["custom"]) {
                            var r = "";
                            if (_.relativePath) {
                                r = _.relativePath.search("https://lh3.googleusercontent.com") != -1 ? _.relativePath : "tmw" + _.relativePath;
                            }
                            var l = _.file || r;
                            var p = 0;
                            var u = "";
                            var g = new n.De(h, l, p, u);
                            f.push(g);
                            s.push(g);
                        } else {
                            var l = e.H.K + _.relativePath;
                            var p = _.fileSize;
                            var u = _.sha256;
                            var g = new n.De(h, l, p, u);
                            f.push(g);
                            s.push(g);
                            d += p;
                        }
                    }
                }
                v = 0;
                y = function (e) {
                    index = 0;
                    while (index < s.length) {
                        try {
                            t.c.URL.revokeObjectURL(s[index].Ee);
                        } catch (error) {
                        }
                        index++;
                    }
                    self.ze(e);
                    var index;
                };
                k = function (t) {
                    e = (v + i._(m.Fe * t)) / d;
                    a = n.pe.se;
                    self.ye(a, n.ve.Mc(a).Wc(e));
                    var e;
                    var a;
                };
                j = function (e) {
                    i = new Blob([e]);
                    m.Ee = t.c.URL.createObjectURL(i);
                    v += m.Fe;
                    w();
                    var i;
                };
                w = function () {
                    if (x < s.length) {
                        m = s[x++];
                        self.Ge(m, y, j, k);
                        return;
                    }
                    i.Y(function () {
                        return self.He(a, f);
                    }, 0);
                };
                x = 0;
                w();
                var self;
                var f;
                var s;
                var d;
                var m;
                var v;
                var y;
                var k;
                var j;
                var w;
                var x;
            };
            n.prototype.Ge = function (t, e, a, n) {
                $.ajax({
                    type: "GET",
                    url: t.Ie,
                    xhrFields: {
                        responseType: "arraybuffer",
                        onprogress: function (t) {
                            if (t.lengthComputable) {
                                n(t.loaded / t.total);
                            }
                        }
                    }
                }).fail(function () {
                    e(Error());
                }).done(function (t) {
                    a(t);
                });
            };
            n.prototype.He = function (e, c) {
                self = this;
                if (this.me) {
                    this.we();
                    return;
                }
                d = {};
                h = function () {
                    index = 0;
                    while (index < c.length) {
                        try {
                            t.c.URL.revokeObjectURL(c[index].Ee);
                        } catch (error) {
                        }
                        index++;
                    }
                    self.ze(Error());
                    var index;
                };
                _ = function () {
                    e = l / c.length;
                    i = n.pe.te;
                    self.ye(i, n.ve.Mc(i).Wc(e));
                    d[f.Je] = new t.Ke(f.Ee, s);
                    r();
                    var e;
                    var i;
                };
                r = function () {
                    if (l < c.length) {
                        f = c[l++];
                        (s = a.k.m.from(f.Ee)).on("error", h);
                        s.on("loaded", _);
                        return;
                    }
                    i.Y(function () {
                        return self.Le(e, d);
                    }, 0);
                };
                l = 0;
                r();
                var self;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            };
            n.prototype.Le = function (e, a) {
                self = this;
                o = {};
                f = 0;
                s = Object.values(e.regionDict).length;
                i.Da(e.regionDict, function (e, d) {
                    r = t.Wa.mb(d.texture + ":" + e, a[d.texture].Za, d);
                    o[e] = r;
                    if (++f % 10 == 0) {
                        h = f / s;
                        _ = n.pe.ue;
                        self.ye(_, n.ve.Mc(_).Wc(h));
                    }
                    var h;
                    var _;
                    var r;
                });
                d = Object.values(a).map(function (t) {
                    return t.Za;
                });
                h = Object.values(o);
                _ = new t.jc(e, t.pb.Qb(e, o, d, h));
                i.Y(function () {
                    return self.Me(_);
                }, 0);
                var self;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
            };
            n.De = function t(e, a, n, c) {
                this.Je = e;
                this.Ie = a;
                this.Fe = n;
                this.Ne = c;
                this.Ee = "";
            };
            n.prototype.Me = function (t) {
                if (this.oe) {
                    t.Cc().ob();
                    return;
                }
                this.oe = true;
                self = this;
                i.Y(function () {
                    return self.he(t);
                }, 0);
                var self;
            };
            n.prototype.Ae = function () {
                if (!this.oe) {
                    this.oe = true;
                    self = this;
                    i.Y(function () {
                        return self.ie();
                    }, 0);
                }
                var self;
            };
            n.prototype.ze = function (t) {
                if (!this.oe) {
                    this.oe = true;
                    self = this;
                    i.Y(function () {
                        return self.je(t);
                    }, 0);
                }
                var self;
            };
            n.prototype.we = function () {
                if (!this.oe) {
                    this.oe = true;
                    self = this;
                    i.Y(function () {
                        return self.ke();
                    }, 0);
                }
                var self;
            };
            n.prototype.ye = function (t, e) {
                if (!this.oe && !this.me) {
                    self = this;
                    i.Y(function () {
                        return self.le(t, e);
                    }, 0);
                }
                var self;
            };
            return n;
        }();
        t.Oe = {};
        t.Pe = function () {
            function e() {
                this.Qe = t.Pe.Se.Re;
                this.Te = false;
                this.Ue = false;
                this.Ve = null;
                this.We = null;
            }
            e.prototype.Sa = function () {
            };
            e.prototype.Xe = function (t) {
                this.Ue = t;
            };
            e.prototype.Ye = function (t) {
                this.Qe = t;
                this.Ze();
            };
            e.prototype.$e = function (t) {
                this.Te = t;
                this.Ze();
            };
            e.prototype.Ze = function () {
            };
            e.prototype._e = function (t, e) {
                var a;
                if (!ooo.ud.Fc()) {
                    return null;
                }
                a = t[e];
                return a == null || a.length === 0 ? null : a[i._(i.ma() * a.length)].cloneNode();
            };
            e.prototype.af = function (t, e, a) {
                if (this.Ue && !(a <= 0)) {
                    n = this._e(t, e);
                    if (n != null) {
                        n.volume = i.ha(1, a);
                        n.play();
                    }
                }
                var n;
            };
            e.prototype.bf = function (t, e) {
                if (this.Qe.cf) {
                    this.af(app.ef.df, t, e);
                }
            };
            e.prototype.ff = function (t, e) {
                if (this.Qe.gf) {
                    this.af(app.ef.hf, t, e);
                }
            };
            e.prototype.if = function () {
            };
            e.prototype.jf = function () {
            };
            e.prototype.kf = function () {
            };
            e.prototype.lf = function () {
            };
            e.prototype.mf = function () {
            };
            e.prototype.nf = function () {
            };
            e.prototype.pf = function (t, e, i) {
            };
            e.prototype.qf = function (t) {
            };
            e.prototype.rf = function (t) {
            };
            e.prototype.sf = function (t) {
            };
            e.prototype.tf = function (t) {
            };
            e.prototype.uf = function (t) {
            };
            e.prototype.vf = function (t) {
            };
            e.prototype.wf = function (t) {
            };
            e.prototype.xf = function (t) {
            };
            e.prototype.yf = function (t) {
            };
            e.prototype.zf = function (t) {
            };
            e.prototype.Af = function (t) {
            };
            e.prototype.Bf = function (t) {
            };
            e.prototype.Cf = function (t) {
            };
            e.prototype.Df = function (t) {
            };
            e.prototype.Ef = function (t, e) {
            };
            e.prototype.Ff = function (t) {
            };
            e.prototype.Gf = function (t, e, i) {
            };
            e.Se = {
                Re: {
                    Hf: false,
                    If: false,
                    gf: true,
                    cf: false
                },
                Jf: {
                    Hf: false,
                    If: true,
                    gf: true,
                    cf: false
                },
                Kf: {
                    Hf: true,
                    If: false,
                    gf: false,
                    cf: true
                },
                Lf: {
                    Hf: false,
                    If: false,
                    gf: true,
                    cf: false
                },
                Mf: {
                    Hf: false,
                    If: false,
                    gf: false,
                    cf: false
                }
            };
            return e;
        }();
        t.Nf = function () {
            var c;
            var o;
            var f;
            var s;
            var d;
            function n(e) {
                this.Of = e;
                this.nc = e.get()[0];
                this.Pf = 1;
                this.Qf = 1;
                this.Rf = new t.Sf(o, f, t.Uf.Tf);
                this.Vf = ((n = {}).view = this.nc, n.backgroundColor = c, n.antialias = true, new a.k.o(n));
                this.Wf = new a.k.l();
                this.Wf.sortableChildren = true;
                this.Xf = new a.k.l();
                this.Xf.zIndex = 0;
                this.Wf.addChild(this.Xf);
                this.Yf = new t.Zf(ooo.ef.$f);
                this.Yf._f.zIndex = 1;
                this.Wf.addChild(this.Yf._f);
                s = this.Rf.ag();
                s.zIndex = 2;
                this.Wf.addChild(s);
                this.bg = new a.k.l();
                this.bg.zIndex = 3;
                this.Wf.addChild(this.bg);
                this.cg = [];
                this.dg = [];
                this.eg = [];
                this.Sa();
                var n;
                var s;
            }
            c = 0;
            o = 5;
            f = 40;
            s = [
                {
                    fg: 1,
                    gg: 0.5,
                    hg: 0.5
                },
                {
                    fg: 1,
                    gg: 0.75,
                    hg: 0.5
                },
                {
                    fg: 1,
                    gg: 1,
                    hg: 0.5
                },
                {
                    fg: 0.75,
                    gg: 1,
                    hg: 0.5
                },
                {
                    fg: 0.5,
                    gg: 1,
                    hg: 0.5
                },
                {
                    fg: 0.5,
                    gg: 1,
                    hg: 0.75
                },
                {
                    fg: 0.5,
                    gg: 1,
                    hg: 1
                },
                {
                    fg: 0.5,
                    gg: 0.75,
                    hg: 1
                },
                {
                    fg: 0.5,
                    gg: 0.5,
                    hg: 1
                },
                {
                    fg: 0.75,
                    gg: 0.5,
                    hg: 1
                },
                {
                    fg: 1,
                    gg: 0.5,
                    hg: 1
                },
                {
                    fg: 1,
                    gg: 0.5,
                    hg: 0.75
                }
            ];
            n.prototype.Sa = function () {
                this.Vf.backgroundColor = c;
                this.cg = Array(s.length);
                index = 0;
                while (index < this.cg.length) {
                    this.cg[index] = new a.k.s();
                    this.cg[index].texture = ooo.ef.ig;
                    this.cg[index].anchor.set(0.5);
                    this.Xf.addChild(this.cg[index]);
                    index++;
                }
                this.dg = Array(ooo.ef.jg.length);
                index2 = 0;
                while (index2 < this.dg.length) {
                    this.dg[index2] = new a.k.s();
                    this.dg[index2].texture = ooo.ef.jg[index2];
                    this.dg[index2].anchor.set(0.5);
                    this.bg.addChild(this.dg[index2]);
                    index2++;
                }
                this.eg = Array(this.dg.length);
                index3 = 0;
                while (index3 < this.eg.length) {
                    f = [
                        1,
                        1,
                        1
                    ];
                    this.eg[index3] = {
                        kg: i.va(0, e.S),
                        lg: 0.66 * i.va(0.09, 0.16),
                        mg: i.va(0, 1),
                        ng: i.va(0, 1),
                        og: 0,
                        fg: f[0],
                        gg: f[1],
                        hg: f[2]
                    };
                    index3++;
                }
                this.pg();
                this.qg();
                var index;
                var index2;
                var index3;
                var f;
            };
            n.Rd = false;
            n.rg = function (t) {
                n.Rd = t;
            };
            n.prototype.sg = function (t) {
                this.Rf.rg(t);
            };
            n.prototype.qg = function () {
                t = i.e();
                this.Pf = this.Of.width();
                this.Qf = this.Of.height();
                this.Vf.resize(this.Pf, this.Qf);
                this.Vf.resolution = t;
                this.nc.width = t * this.Pf;
                this.nc.height = t * this.Qf;
                e = 0.6 * i.ia(this.Pf, this.Qf);
                index = 0;
                while (index < this.cg.length) {
                    this.cg[index].width = e;
                    this.cg[index].height = e;
                    index++;
                }
                this.Yf.tg(this.Pf, this.Qf);
                this.Rf.qg();
                var t;
                var e;
                var index;
            };
            n.prototype.ug = function (t, a) {
                if (n.Rd) {
                    c = t / 1000;
                    o = this.Of.width();
                    f = this.Of.height();
                    index = 0;
                    while (index < this.cg.length) {
                        h = s[index % s.length];
                        _ = this.cg[index];
                        r = index / this.cg.length * e.T;
                        l = 0.5 * c * 0.12;
                        p = i.pa(3 * (l + r)) * i.pa(r) - i.oa(5 * (l + r)) * i.oa(r);
                        u = i.pa(3 * (l + r)) * i.oa(r) + i.oa(5 * (l + r)) * i.pa(r);
                        g = 0.2 + 0.2 * i.pa(r + 0.075 * c);
                        m = 16711680 & 255 * h.fg << 16 | 65280 & 255 * h.gg << 8 | 255 & 255 * h.hg;
                        _.tint = m;
                        _.alpha = g;
                        _.position.set(o * (0.2 + 0.5 * (p + 1) * 0.6), f * (0.1 + 0.5 * (u + 1) * 0.8));
                        index++;
                    }
                    v = 0.05 * i.ia(o, f);
                    index2 = 0;
                    while (index2 < this.dg.length) {
                        k = this.eg[index2];
                        j = this.dg[index2];
                        w = e.S * index2 / this.dg.length;
                        k.mg = 0.2 + 0.6 * (i.pa(0.01 * c + w) + 0.2 * i.pa(0.02 * c * 17 + w) + 1) / 2;
                        k.ng = 0.1 + 0.8 * (i.oa(0.01 * c + w) + 0.2 * i.oa(0.02 * c * 21 + w) + 1) / 2;
                        x = k.mg;
                        S = k.ng;
                        q = i.fa(i.ra(i.pa(1.5 * (w + 0.048 * c)), 6), 0, 0.9);
                        C = 1.2 * (0.4 + 0.5 * (1 + i.oa(w + 0.12 * c)) * 1.2);
                        U = w + 0.1 * c;
                        H = 16711680 & 255 * k.fg << 16 | 65280 & 255 * k.gg << 8 | 255 & 255 * k.hg;
                        j.alpha = q;
                        j.tint = H;
                        j.position.set(o * x, f * S);
                        j.rotation = U;
                        T = j.texture.width / j.texture.height;
                        j.width = C * v;
                        j.height = C * v * T;
                        index2++;
                    }
                    this.vg();
                    this.Vf.render(this.Wf, null, true);
                }
                var c;
                var o;
                var f;
                var index;
                var h;
                var _;
                var r;
                var l;
                var p;
                var u;
                var g;
                var m;
                var v;
                var index2;
                var k;
                var j;
                var w;
                var x;
                var S;
                var q;
                var C;
                var U;
                var H;
                var T;
            };
            n.prototype.wg = function () {
                if (ooo.ud.Fc()) {
                    t = ooo.ud.Cc().Rb(o);
                    index = 0;
                    while (index < o) {
                        this.Rf.xg(index, t[index]);
                        index++;
                    }
                } else {
                    a = i.va(0, 1);
                    n = 0;
                    while (n < o) {
                        c = (a + n / o) % 1;
                        f = i.za(i._(360 * c), 0.85, 0.5);
                        s = 255 & 255 * f[0] | 65280 & 255 * f[1] << 8 | 16711680 & 255 * f[2] << 16;
                        d = "000000" + s.toString(16);
                        d = "#" + d.substring(d.length - 6, d.length);
                        this.Rf.yg(n, d);
                        n++;
                    }
                }
                var t;
                var index;
                var a;
                var n;
                var c;
                var f;
                var s;
                var d;
            };
            n.prototype.pg = function () {
                t = i.ha(this.Pf, this.Qf);
                a = i.Ca();
                n = 0;
                while (n < o) {
                    c = d(a, 0.12, n / o * e.S);
                    c._a = 4 * c._a;
                    c.ab = 4 * c.ab;
                    this.Rf.zg(n, 0.5 * (this.Pf + c._a * t), 0.5 * (this.Qf + c.ab * t));
                    n++;
                }
                var t;
                var a;
                var n;
                var c;
            };
            n.prototype.vg = function () {
                t = i.ha(this.Pf, this.Qf);
                a = i.Ca();
                n = 0;
                while (n < o) {
                    c = d(a, 0.12, n / o * e.S);
                    this.Rf.Ag(n, 0.5 * (this.Pf + c._a * t), 0.5 * (this.Qf + c.ab * t));
                    n++;
                }
                this.Rf.Bg();
                var t;
                var a;
                var n;
                var c;
            };
            d = function (t, e, a) {
                var n;
                n = t / 1000;
                return {
                    _a: 0.8 * (i.pa(e * n + a) + 0.4 * i.pa(-32 * e * n + a) + 0.7 * i.pa(7 * e * n + a)),
                    ab: 0.8 * (i.oa(e * n + a) + 0.4 * i.oa(-32 * e * n + a) + 0.7 * i.oa(7 * e * n + a))
                };
            };
            return n;
        }();
        t.Cg = function () {
            function e() {
            }
            e.Dg = "consent_state_2";
            e.Eg = "showPlayerNames";
            e.Fg = "musicEnabled";
            e.Gg = "sfxEnabled";
            e.Hg = "account_type";
            e.Ig = "gameMode";
            e.Jg = "nickname";
            e.Kg = "skin";
            e.Lg = "prerollCount";
            e.Mg = "shared";
            e.Ng = function (e, a, n) {
                date = new Date();
                date.setTime(date.getTime() + 86400000 * n);
                o = "expires=" + date.toUTCString();
                t.d.cookie = e + "=" + a + "; " + o;
                var date;
                var o;
            };
            e.Og = function (e) {
                var a;
                var n;
                var index;
                var o;
                a = e + "=";
                n = t.d.cookie.split(";");
                index = 0;
                while (index < n.length) {
                    o = n[index];
                    while (o.charAt(0) == " ") {
                        o = o.substring(1);
                    }
                    if (o.indexOf(a) == 0) {
                        return o.substring(a.length, o.length);
                    }
                    index++;
                }
                return "";
            };
            return e;
        }();
        e.Pg = (to = [
            [
                -28.06744,
                64.95936
            ],
            [
                -10.59082,
                72.91964
            ],
            [
                14.11773,
                81.39558
            ],
            [
                36.51855,
                81.51827
            ],
            [
                32.82715,
                71.01696
            ],
            [
                31.64063,
                69.41897
            ],
            [
                29.41419,
                68.43628
            ],
            [
                30.64379,
                67.47302
            ],
            [
                29.88281,
                66.76592
            ],
            [
                30.73975,
                65.50385
            ],
            [
                30.73975,
                64.47279
            ],
            [
                31.48682,
                63.49957
            ],
            [
                32.18994,
                62.83509
            ],
            [
                28.47726,
                60.25122
            ],
            [
                28.76221,
                59.26588
            ],
            [
                28.03711,
                58.60833
            ],
            [
                28.38867,
                57.53942
            ],
            [
                28.83955,
                56.2377
            ],
            [
                31.24512,
                55.87531
            ],
            [
                31.61865,
                55.34164
            ],
            [
                31.92627,
                54.3037
            ],
            [
                33.50497,
                53.26758
            ],
            [
                32.73926,
                52.85586
            ],
            [
                32.23389,
                52.4694
            ],
            [
                34.05762,
                52.44262
            ],
            [
                34.98047,
                51.79503
            ],
            [
                35.99121,
                50.88917
            ],
            [
                36.67236,
                50.38751
            ],
            [
                37.74902,
                50.51343
            ],
            [
                40.78125,
                49.62495
            ],
            [
                40.47363,
                47.70976
            ],
            [
                38.62799,
                46.92028
            ],
            [
                37.53193,
                46.55915
            ],
            [
                36.72182,
                44.46428
            ],
            [
                39.68218,
                43.19733
            ],
            [
                40.1521,
                43.74422
            ],
            [
                43.52783,
                43.03678
            ],
            [
                45.30762,
                42.73087
            ],
            [
                46.99951,
                41.98399
            ],
            [
                47.26318,
                40.73061
            ],
            [
                44.20009,
                40.86309
            ],
            [
                45.35156,
                39.57182
            ],
            [
                45.43945,
                36.73888
            ],
            [
                35.64789,
                35.26481
            ],
            [
                33.13477,
                33.65121
            ],
            [
                21.47977,
                33.92486
            ],
            [
                12.16268,
                34.32477
            ],
            [
                11.82301,
                37.34239
            ],
            [
                6.09112,
                38.28597
            ],
            [
                -1.96037,
                35.62069
            ],
            [
                -4.82156,
                35.60443
            ],
            [
                -7.6498,
                35.26589
            ],
            [
                -16.45237,
                37.44851
            ],
            [
                -28.06744,
                64.95936
            ]
        ], {
            Qg: function (t, e) {
                return function t(e, i, a) {
                    var n;
                    var c;
                    var index;
                    var f;
                    n = false;
                    c = a.length;
                    index = 0;
                    f = c - 1;
                    while (index < c) {
                        if (a[index][1] > i != a[f][1] > i && e < (a[f][0] - a[index][0]) * (i - a[index][1]) / (a[f][1] - a[index][1]) + a[index][0]) {
                            n = !n;
                        }
                        f = index++;
                    }
                    return n;
                }(e, t, to);
            }
        });
        t.Rg = function () {
            var o;
            var f;
            function t(t, e) {
                var i;
                var a;
                if (e) {
                    i = 1.3;
                    a = 15554111;
                } else {
                    i = 1.1;
                    a = 16044288;
                }
                return new f(t, a, true, 0.5, i, 0.5, 0.7);
            }
            function n(t, e, i) {
                return ((255 * t & 255) << 16) + ((255 * e & 255) << 8) + (255 * i & 255);
            }
            o = i.ca(a.k.l, function () {
                a.k.l.call(this);
                this.Sg = [];
                this.Tg = 0;
            });
            o.prototype.Ug = function (t) {
                this.Tg += t;
                if (this.Tg >= 1) {
                    e = i._(this.Tg);
                    this.Tg -= e;
                    a = function t(e) {
                        var a;
                        var c;
                        var o;
                        var s;
                        var d;
                        var h;
                        var _;
                        var r;
                        if (e > 0) {
                            a = "+" + i._(e);
                        } else if (e < 0) {
                            a = "-" + i._(e);
                        } else {
                            a = "0";
                        }
                        o = i.ha(1.5, 0.5 + e / 600);
                        if (e < 1) {
                            c = "0xFFFFFF";
                        } else if (e < 30) {
                            s = (e - 1) / 29;
                            c = n(1 * (1 - s) + 0.96 * s, 1 * (1 - s) + 0.82 * s, 1 * (1 - s) + 0 * s);
                        } else if (e < 300) {
                            d = (e - 30) / 270;
                            c = n(0.96 * (1 - d) + 0.93 * d, 0.82 * (1 - d) + 0.34 * d, 0 * (1 - d) + 0.25 * d);
                        } else if (e < 700) {
                            h = (e - 300) / 400;
                            c = n(0.93 * (1 - h) + 0.98 * h, 0.34 * (1 - h) + 0 * h, 0.25 * (1 - h) + 0.98 * h);
                        } else {
                            c = 16318713;
                        }
                        _ = i.ma();
                        r = 1 + 0.5 * i.ma();
                        return new f(a, c, true, 0.5, o, _, r);
                    }(e);
                    this.addChild(a);
                    this.Sg.push(a);
                }
                var e;
                var a;
            };
            o.prototype.Vg = function (e) {
                updateKillCounter(modState, oeo, "count", e);
                if (modState.vh && e) {
                    (function t() {
                        if (!iF) {
                            {
                                iF = true;
                                s_h.play();
                                let e = setInterval(() => {
                                    if (s_h.ended) {
                                        iF = false;
                                        clearInterval(e);
                                    }
                                }, 1000);
                            }
                        }
                    }());
                }
                if (e) {
                    a = t(i.U("index.game.floating.headshot"), true);
                    if (modState.iq) {
                        a = t("شييل ودي حووش", true);
                    }
                    this.addChild(a);
                    this.Sg.push(a);
                } else {
                    n = t(i.U("index.game.floating.wellDone"), false);
                    if (modState.iq) {
                        n = t("ابلع\xA0يابووت", false);
                    }
                    this.addChild(n);
                    this.Sg.push(n);
                }
                var a;
                var n;
            };
            o.prototype.Bg = function (t, n) {
                c = ooo.Xg.Kf.Wg;
                o = c.Vf.width / c.Vf.resolution;
                f = c.Vf.height / c.Vf.resolution;
                index = 0;
                while (index < this.Sg.length) {
                    d = this.Sg[index];
                    d.Yg = d.Yg + n / 2000 * d.Zg;
                    d.$g = d.$g + n / 2000 * d._g;
                    d.alpha = 0.5 * i.oa(e.T * d.$g);
                    d.scale.set(d.Yg);
                    d.position.x = o * (0.25 + 0.5 * d.ah);
                    d.position.y = d.bh ? f * (1 - 0.5 * (1 + d.$g)) : f * (1 - 0.5 * (0 + d.$g));
                    if (d.$g > 1) {
                        a.k.F.G(d);
                        this.Sg.splice(index, 1);
                        index--;
                    }
                    index++;
                }
                var c;
                var o;
                var f;
                var index;
                var d;
            };
            f = i.ca(a.k.t, function (t, e, n, c, o, f, s) {
                a.k.t.call(this, t, {
                    fill: e,
                    fontFamily: "PTSans",
                    fontSize: 36
                });
                this.anchor.set(0.5);
                this.bh = n;
                this.Yg = c;
                this.Zg = o;
                this.ah = f;
                this.$g = 0;
                this._g = s;
            });
            return o;
        }();
        t.Ke = function t(e, i) {
            this.Ee = e;
            this.Za = i;
        };
        t.jd = {
            ch: 0,
            id: 16
        };
        t.dh = function () {
            function e() {
                this.eh = t.jd.ch;
                this.fh = 0;
                this.gh = 500;
                this.hh = 4000;
                this.ih = 7000;
            }
            e.jh = 0;
            e.prototype.kh = function () {
                return 1.02 * this.gh;
            };
            return e;
        }();
        t.lh = function () {
            var f;
            var s;
            var h;
            var _;
            var r;
            var l;
            var p;
            var u;
            var g;
            function o(e) {
                this.Of = e;
                this.nc = e.get()[0];
                this.Vf = ((n = {}).view = this.nc, n.backgroundColor = l, n.antialias = true, new a.k.o(n));
                this.Wf = new a.k.l();
                this.Wf.sortableChildren = true;
                this.mh = i._(i.ma());
                this.nh = 0;
                this.oh = 0;
                this.ph = 15;
                this.qh = 0.5;
                this.rh = 0;
                this.sh = new t.th();
                this.uh = new a.k.p();
                this.vh = new a.k.l();
                this.wh = new a.k.l();
                this.wh.sortableChildren = true;
                this.xh = new a.k.l();
                this.yh = new a.k.l();
                this.yh.sortableChildren = true;
                this.zh = new a.k.l();
                this.Ah = new p();
                this.Bh = new u();
                this.Ch = new g();
                this.Dh = new t.Rg();
                this.Eh = new a.k.s();
                this.Fh = {
                    x: 0,
                    y: 0
                };
                this.Sa();
                var n;
            }
            l = 0;
            o.prototype.Sa = function () {
                this.Vf.backgroundColor = l;
                this.sh._f.zIndex = 10;
                this.Wf.addChild(this.sh._f);
                this.uh.zIndex = 20;
                this.Wf.addChild(this.uh);
                this.vh.zIndex = 5000;
                this.Wf.addChild(this.vh);
                this.wh.zIndex = 5100;
                this.Wf.addChild(this.wh);
                this.xh.zIndex = 10000;
                this.Wf.addChild(this.xh);
                this.Eh.texture = ooo.ef.Gh;
                this.Eh.anchor.set(0.5);
                this.Eh.zIndex = 1;
                this.yh.addChild(this.Eh);
                this.zh.alpha = 0.6;
                this.zh.zIndex = 2;
                this.yh.addChild(this.zh);
                this.Dh.zIndex = 3;
                this.yh.addChild(this.Dh);
                this.Ah.alpha = 0.8;
                this.Ah.zIndex = 4;
                this.yh.addChild(this.Ah);
                this.Bh.zIndex = 5;
                this.yh.addChild(this.Bh);
                this.Ch.zIndex = 6;
                this.yh.addChild(this.Ch);
                this.qg();
            };
            o.prototype.qg = function () {
                t = i.e();
                e = this.Of.width();
                a = this.Of.height();
                this.Vf.resize(e, a);
                this.Vf.resolution = t;
                this.nc.width = t * e;
                this.nc.height = t * a;
                this.qh = i.ha(i.ha(e, a), 0.625 * i.ia(e, a));
                this.Eh.position.x = e / 2;
                this.Eh.position.y = a / 2;
                this.Eh.width = e;
                this.Eh.height = a;
                this.Ah.position.x = modState.sc == 0 ? 60 : e / 2 + 60 - e * modState.wi;
                this.Ah.position.y = 60;
                this.Bh.position.x = modState.sc == 0 ? 110 : e / 2 + 110 - e * modState.wi;
                this.Bh.position.y = 10;
                this.Ch.position.x = modState.sc == 0 ? e - 225 : e / 2 - 225 + e * modState.wi;
                this.Ch.position.y = 1;
                var t;
                var e;
                var a;
            };
            o.prototype.Bg = function (e, i) {
                this.ph = 15;
                this.vh.removeChildren();
                this.wh.removeChildren();
                this.xh.removeChildren();
                this.zh.removeChildren();
                this.sh.Hh(e.eh === t.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
                a = this.uh;
                a.clear();
                a.lineStyle(0.2, 16711680, 0.3);
                a.drawCircle(0, 0, e.gh);
                a.endFill();
                this.Ch.Kh = i;
                this.zh.visible = i;
                var a;
            };
            o.prototype.ug = function (a, n) {
                if (!(this.Vf.width <= 5)) {
                    o = ooo.Mh.Lh;
                    f = this.Vf.width / this.Vf.resolution;
                    s = this.Vf.height / this.Vf.resolution;
                    this.ph = i.ga(this.ph, ooo.Mh.Nh, n, 0.002);
                    this.zh.visible = modState.sn;
                    d = this.qh / (this.ph * modState.z);
                    h = ooo.Mh.Lh.Nd[t.Pd.Zd];
                    _ = h != null && h.Rd;
                    this.rh = i.fa(this.rh + n / 1000 * (0.1 * (_ ? 1 : 0) - this.rh), 0, 1);
                    this.Eh.alpha = this.rh;
                    this.mh = this.mh + 0.01 * n;
                    if (this.mh > 360) {
                        this.mh = this.mh % 360;
                    }
                    this.nh = i.oa(a / 1200 * e.S);
                    r = o.Oh();
                    this.Fh.x = i.ja(this.Fh.x, r._a, n, 0.5, 33.333);
                    this.Fh.y = i.ja(this.Fh.y, r.ab, n, 0.5, 33.333);
                    l = f / d / 2;
                    p = s / d / 2;
                    ooo.Mh.Ph(this.Fh.x - 1.3 * l, this.Fh.x + 1.3 * l, this.Fh.y - 1.3 * p, this.Fh.y + 1.3 * p);
                    this.sh.Bg(this.Fh.x, this.Fh.y, 2 * l, 2 * p);
                    u = ooo.Mh.Qh.gh;
                    this.Wf.scale.x = d;
                    this.Wf.scale.y = d;
                    this.Wf.position.x = f / 2 - this.Fh.x * d;
                    this.Wf.position.y = s / 2 - this.Fh.y * d;
                    g = i.la(r._a, r.ab);
                    if (g > u - 10) {
                        this.oh = i.fa(1 + (g - u) / 10, 0, 1);
                        m = i.pa(this.mh * e.S / 360) * (1 - this.oh) + 1 * this.oh;
                        v = i.oa(this.mh * e.S / 360) * (1 - this.oh);
                        y = (i.ta(v, m) + e.S) % e.S * 360 / e.S;
                        k = this.oh * (0.5 + 0.5 * this.nh);
                        j = i.za(i._(y), 1, 0.75 - 0.25 * this.oh);
                        this.sh.nd(j[0], j[1], j[2], 0.1 + 0.2 * k);
                    } else {
                        this.oh = 0;
                        w = i.za(i._(this.mh), 1, 0.75);
                        this.sh.nd(w[0], w[1], w[2], 0.1);
                    }
                    index = 0;
                    while (index < this.zh.children.length) {
                        S = this.zh.children[index];
                        S.position.x = f / 2 - (this.Fh.x - S.Rh.x) * d;
                        S.position.y = s / 2 - (this.Fh.y - S.Rh.y) * d;
                        index++;
                    }
                    this.Ah.Sh.position.x = r._a / u * this.Ah.Th;
                    this.Ah.Sh.position.y = r.ab / u * this.Ah.Th;
                    this.Bh.Uh(a);
                    this.Dh.Bg(a, n);
                    this.Vf.render(this.Wf, null, true);
                    this.Vf.render(this.yh, null, false);
                }
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
                var p;
                var u;
                var g;
                var m;
                var v;
                var y;
                var k;
                var j;
                var w;
                var index;
                var S;
            };
            o.prototype.Vh = function (t, e) {
                e.Wh.ld.zd().zIndex = (t + 2147483648) / 4294967296 * 5000;
                this.vh.addChild(e.Wh.md.zd());
                this.wh.addChild(e.Wh.ld.zd());
            };
            o.prototype.Xh = function (t, e, a) {
                e.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (t + 32768) / 65536 * 5000;
                if (joystickState.n != null && joystickState.n.Je == t) {
                    joystickState.uj = e;
                    this.xh.addChild(joystickState.uj.Yc);
                } else {
                    this.xh.addChild(e.Yc);
                }
                if (t !== ooo.Mh.Qh.fh) {
                    this.zh.addChild(a);
                }
            };
            p = i.ca(a.k.l, function () {
                a.k.l.call(this);
                this.Th = 40;
                this.Yh = new a.k.s();
                this.Yh.anchor.set(0.5);
                this.Sh = new a.k.p();
                t = gameContElement.offsetWidth;
                e = gameContElement.offsetHeight;
                o = new a.k.p();
                o.beginFill("black", 0.4);
                o.drawCircle(0, 0, this.Th);
                o.endFill();
                o.lineStyle(2, 16225317);
                o.drawCircle(0, 0, this.Th);
                o.moveTo(0, -this.Th);
                o.lineTo(0, +this.Th);
                o.moveTo(-this.Th, 0);
                o.lineTo(+this.Th, 0);
                o.endFill();
                this.Yh.alpha = 0.5;
                this.Sh.zIndex = 2;
                this.Sh.alpha = 0.9;
                this.Sh.beginFill(16225317);
                this.Sh.drawCircle(0, 0, 0.1 * this.Th);
                this.Sh.endFill();
                this.Sh.lineStyle(1, "black");
                this.Sh.drawCircle(0, 0, 0.1 * this.Th);
                this.Sh.endFill();
                this.addChild(o);
                this.addChild(this.Yh);
                this.addChild(this.Sh);
                {
                    this.img_clock = PIXI.Sprite.from(atob(S[8]));
                    this.img_clock.width = 100;
                    this.img_clock.height = 100;
                    this.img_clock.x = -50;
                    this.img_clock.y = -50;
                    this.addChild(this.img_clock);
                    if (detectMobile()) {
                        this.img_1 = PIXI.Sprite.from(atob(S[9]));
                        this.img_1.width = 80;
                        this.img_1.height = 40;
                        this.img_1.x = -100 + 0.5 * t;
                        this.img_1.y = -60;
                        this.img_1.visible = modState.mo == 1 && joystickState.on;
                        this.addChild(this.img_1);
                        this.img_2 = PIXI.Sprite.from(atob(S[10]));
                        this.img_2.width = 80;
                        this.img_2.height = 40;
                        this.img_2.x = -100 + 0.5 * t;
                        this.img_2.y = -60;
                        this.img_2.visible = modState.mo == 2;
                        this.addChild(this.img_2);
                        this.img_3 = PIXI.Sprite.from(atob(S[11]));
                        this.img_3.width = 80;
                        this.img_3.height = 40;
                        this.img_3.x = -100 + 0.5 * t;
                        this.img_3.y = -60;
                        this.img_3.visible = modState.mo == 3;
                        this.addChild(this.img_3);
                        this.img_4 = PIXI.Sprite.from(atob(S[12]));
                        this.img_4.width = 80;
                        this.img_4.height = 40;
                        this.img_4.x = -100 + 0.5 * t;
                        this.img_4.y = -60;
                        this.img_4.visible = modState.mo == 4;
                        this.addChild(this.img_4);
                        this.img_f = PIXI.Sprite.from(atob(S[13]));
                        this.img_f.width = 80;
                        this.img_f.height = 80;
                        this.img_f.x = -60;
                        this.img_f.y = -60;
                        this.img_f.visible = false;
                        this.addChild(this.img_f);
                        this.img_o_2 = PIXI.Sprite.from(atob(S[14]));
                        this.img_o_2.width = 100;
                        this.img_o_2.height = 100;
                        this.img_o_2.x = 15;
                        this.img_o_2.y = -210 + e;
                        this.img_o_2.visible = modState.mo == 2;
                        this.img_o_2.alpha = 0.25;
                        this.addChild(this.img_o_2);
                        this.img_o_3 = PIXI.Sprite.from(atob(S[15]));
                        this.img_o_3.width = 100;
                        this.img_o_3.height = 100;
                        this.img_o_3.x = 15;
                        this.img_o_3.y = -210 + e;
                        this.img_o_3.visible = modState.mo == 3;
                        this.img_o_3.alpha = 0.25;
                        this.addChild(this.img_o_3);
                        this.img_o_4 = PIXI.Sprite.from(atob(S[16]));
                        this.img_o_4.width = 100;
                        this.img_o_4.height = 100;
                        this.img_o_4.x = 15;
                        this.img_o_4.y = -210 + e;
                        this.img_o_4.visible = modState.mo == 4;
                        this.addChild(this.img_o_4);
                        this.img_i_2 = PIXI.Sprite.from(atob(S[17]));
                        this.img_i_2.width = 50;
                        this.img_i_2.height = 50;
                        this.img_i_2.x = 40;
                        this.img_i_2.y = -185 + e;
                        this.img_i_2.visible = modState.mo == 2;
                        this.img_i_2.alpha = 0.25;
                        this.addChild(this.img_i_2);
                        this.img_i_3 = PIXI.Sprite.from(atob(S[18]));
                        this.img_i_3.width = 50;
                        this.img_i_3.height = 50;
                        this.img_i_3.x = 40;
                        this.img_i_3.y = -185 + e;
                        this.img_i_3.visible = modState.mo == 3;
                        this.img_i_3.alpha = 0.25;
                        this.addChild(this.img_i_3);
                        this.img_p_1 = PIXI.Sprite.from(atob(S[19]));
                        this.img_p_1.width = 16;
                        this.img_p_1.height = 16;
                        this.img_p_1.x = -68 + 0.5 * t;
                        this.img_p_1.y = -68 + 0.5 * e;
                        this.img_p_1.visible = modState.mo == 1 && joystickState.on;
                        this.img_p_1.alpha = 0.25;
                        this.addChild(this.img_p_1);
                        this.img_pf_1 = PIXI.Sprite.from(atob(S[20]));
                        this.img_pf_1.width = 16;
                        this.img_pf_1.height = 16;
                        this.img_pf_1.x = -68 + 0.5 * t;
                        this.img_pf_1.y = -68 + 0.5 * e;
                        this.img_pf_1.visible = false;
                        this.img_pf_1.alpha = 1;
                        this.addChild(this.img_pf_1);
                        this.img_p_2 = PIXI.Sprite.from(atob(S[21]));
                        this.img_p_2.width = 16;
                        this.img_p_2.height = 16;
                        this.img_p_2.x = -68 + 0.5 * t;
                        this.img_p_2.y = -68 + 0.5 * e;
                        this.img_p_2.visible = modState.mo == 2;
                        this.img_p_2.alpha = 0.25;
                        this.addChild(this.img_p_2);
                        this.img_p_3 = PIXI.Sprite.from(atob(S[22]));
                        this.img_p_3.width = 16;
                        this.img_p_3.height = 16;
                        this.img_p_3.x = -68 + 0.5 * t;
                        this.img_p_3.y = -68 + 0.5 * e;
                        this.img_p_3.visible = modState.mo == 3;
                        this.img_p_3.alpha = 0.25;
                        this.addChild(this.img_p_3);
                    }
                    b = new PIXI.TextStyle({
                        align: "center",
                        fill: "#f8d968",
                        fontSize: 12,
                        lineJoin: "round",
                        stroke: "red",
                        strokeThickness: 1,
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let f = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 12,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let s = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let h = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let _ = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let r = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let l = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let p = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    let u = new PIXI.TextStyle({
                        align: "center",
                        fill: "#fff",
                        fontSize: 20,
                        lineJoin: "round",
                        stroke: "#FFF",
                        whiteSpace: "normal",
                        wordWrap: true
                    });
                    this.pk0 = new PIXI.Text("", s);
                    this.pk1 = new PIXI.Text("", h);
                    this.pk2 = new PIXI.Text("", _);
                    this.pk3 = new PIXI.Text("", r);
                    this.pk4 = new PIXI.Text("", l);
                    this.pk5 = new PIXI.Text("", p);
                    this.pk6 = new PIXI.Text("", u);
                    this.pk0.x = 60;
                    this.pk1.x = 100;
                    this.pk2.x = 140;
                    this.pk3.x = 180;
                    this.pk4.x = 220;
                    this.pk5.x = 260;
                    this.pk6.x = 300;
                    this.pk0.y = -12;
                    this.pk1.y = -12;
                    this.pk2.y = -12;
                    this.pk3.y = -12;
                    this.pk4.y = -12;
                    this.pk5.y = -12;
                    this.pk6.y = -12;
                    this.addChild(this.pk0);
                    this.addChild(this.pk1);
                    this.addChild(this.pk2);
                    this.addChild(this.pk3);
                    this.addChild(this.pk4);
                    this.addChild(this.pk5);
                    this.addChild(this.pk6);
                    this.container_count = new PIXI.Container();
                    this.container_count.x = -45;
                    this.container_count.y = -52;
                    this.label_hs = new PIXI.Text("HS", b);
                    this.value1_hs = new PIXI.Text("0", b);
                    this.value2_hs = new PIXI.Text("0", b);
                    this.label_kill = new PIXI.Text("KILL", f);
                    this.value1_kill = new PIXI.Text("0", f);
                    this.value2_kill = new PIXI.Text("0", f);
                    this.label_hs.x = 25;
                    this.label_hs.y = 107;
                    this.label_hs.anchor.x = 0.5;
                    this.label_kill.x = 75;
                    this.label_kill.y = 107;
                    this.label_kill.anchor.x = 0.5;
                    this.value1_hs.x = 25;
                    this.value1_hs.y = 120;
                    this.value1_hs.anchor.x = 0.5;
                    this.value1_kill.x = 75;
                    this.value1_kill.y = 120;
                    this.value1_kill.anchor.x = 0.5;
                    this.value2_hs.x = 25;
                    this.value2_hs.y = 133;
                    this.value2_hs.anchor.x = 0.5;
                    this.value2_kill.x = 75;
                    this.value2_kill.y = 133;
                    this.value2_kill.anchor.x = 0.5;
                    if (!modState.saveGame) {
                        this.value2_hs.alpha = 0;
                        this.value2_kill.alpha = 0;
                    }
                    this.container_count.addChild(this.label_hs);
                    this.container_count.addChild(this.value1_hs);
                    this.container_count.addChild(this.value2_hs);
                    this.container_count.addChild(this.label_kill);
                    this.container_count.addChild(this.value1_kill);
                    this.container_count.addChild(this.value2_kill);
                    this.addChild(this.container_count);
                }
                var t;
                var e;
                var o;
            });
            u = ((f = i.ca(a.k.l, function () {
                a.k.l.call(this);
                this.Zh = {};
            })).prototype.Uh = function (t) {
                a = 0.5 + 0.5 * i.pa(e.S * (t / 1000 / 1.6));
                for (var n in this.Zh) {
                    c = this.Zh[n];
                    o = c.$h;
                    c.alpha = 1 - o + o * a;
                }
                var a;
                var c;
                var o;
            }, f.prototype.Bg = function (t) {
                for (var e in this.Zh) {
                    if (!(t[e] != null && t[e].Rd)) {
                        a.k.F.G(this.Zh[e]);
                        delete this.Zh[e];
                    }
                }
                o = 0;
                for (var f in t) {
                    d = t[f];
                    if (d.Rd) {
                        h = this.Zh[f];
                        if (!h) {
                            _ = ooo.ud.Cc().$b(d.Wd).dc;
                            (h = new s()).texture = _.nb();
                            h.width = 40;
                            h.height = 40;
                            this.Zh[f] = h;
                            this.addChild(h);
                        }
                        if (joystickState.on) {
                            if (!(modState.hz && modState.mobile && modState.tt)) {
                                iv(modState, oeo, "show", o, d.Wd, d.Xd);
                            }
                        }
                        h.$h = d.Xd;
                        if (modState.hz && modState.mobile && modState.tt) {
                            if (o == 0 || o == 40 || o == 80 || o == 120) {
                                h.position.x = 0;
                                h.position.y = o + 10;
                            }
                            if (o == 160) {
                                h.position.x = -40;
                                h.position.y = 130;
                            }
                            if (o == 200) {
                                h.position.x = -80;
                                h.position.y = 130;
                            }
                            if (o == 240) {
                                h.position.x = -120;
                                h.position.y = 130;
                            }
                        } else {
                            h.position.x = o;
                        }
                        o += 40;
                    }
                }
                var o;
                var d;
                var h;
                var _;
            }, s = i.ca(a.k.s, function () {
                a.k.s.call(this);
                this.$h = 0;
            }), f);
            g = ((h = i.ca(a.k.l, function () {
                a.k.l.call(this);
                this.Kh = true;
                this._h = 12;
                this.ai = 9;
                this.Sg = [];
                t = 0;
                while (t < 14) {
                    this.bi();
                    t++;
                }
                var t;
            })).prototype.Bg = function (e) {
                if (joystickState.on) {
                    if (modState.tt) {
                        this.addChild(P);
                        this.addChild(E);
                        if (modState.hz && modState.mobile) {
                            o = gameContElement.offsetHeight;
                            P.x = 205;
                            P.y = o / 2 - 58 + 10;
                            E.x = 205;
                            E.y = o / 2 - 28 + 10;
                            K.x = 205;
                            K.y = o / 2 + 3 + 10;
                            Z.x = 205;
                            Z.y = o / 2 + 33 + 10;
                            this.addChild(K);
                            this.addChild(Z);
                        } else {
                            this.addChild(N);
                        }
                    } else {
                        this.addChild(P);
                        this.addChild(E);
                        if (modState.hz && modState.mobile) {
                            P.x = -97;
                            E.x = -65;
                            this.addChild(K);
                            this.addChild(Z);
                        } else {
                            this.addChild(N);
                        }
                    }
                } else if (modState.hz) {
                    modState.mobile;
                }
                this.addChild(Q);
                f = ooo.Mh.Qh.eh === t.jd.id;
                s = 0;
                index = 0;
                if (index >= this.Sg.length) {
                    this.bi();
                }
                this.Sg[index].ci(1, "white");
                this.Sg[index].di("", i.U("index.game.leader.top10").replace("10", modState.to), "(".concat(ooo.Mh.ei, " online)"));
                this.Sg[index].position.y = s;
                s += this._h;
                index += 1;
                if (e.fi.length > 0) {
                    s += this.ai;
                }
                index2 = 0;
                while (index2 < e.fi.length) {
                    _ = e.fi[index2];
                    r = ooo.ud.Cc().Ub(_.gi);
                    l = "";
                    p = ooo.ud.Gc().textDict[r._b];
                    if (p != null) {
                        l = i.V(p);
                    }
                    if (index >= this.Sg.length) {
                        this.bi();
                    }
                    this.Sg[index].ci(0.8, r.ac.cc);
                    this.Sg[index].di("".concat(index2 + 1), l, "".concat(i._(_.hi)));
                    this.Sg[index].position.y = s;
                    s += this._h;
                    index += 1;
                    index2++;
                }
                if (e.ii.length > 0) {
                    s += this.ai;
                }
                index3 = 0;
                while (index3 < e.ii.length - (10 - modState.to)) {
                    g = e.ii[index3];
                    m = ooo.Mh.Qh.fh === g.ji;
                    v = undefined;
                    y = undefined;
                    if (m) {
                        v = "white";
                        y = ooo.Mh.Lh.ki.Xa;
                    } else {
                        k = ooo.Mh.li[g.ji];
                        if (k != null) {
                            v = f ? ooo.ud.Cc().Ub(k.ki.mi).ac.cc : ooo.ud.Cc().Tb(k.ki.ni).cc;
                            y = modState.sn ? k.ki.Xa : "---";
                        } else {
                            v = "gray";
                            y = "?";
                        }
                    }
                    if (m) {
                        s += this.ai;
                    }
                    if (index >= this.Sg.length) {
                        this.bi();
                    }
                    this.Sg[index].ci(m ? 1 : 0.8, v);
                    this.Sg[index].di("".concat(index3 + 1), y, "".concat(i._(g.hi)));
                    this.Sg[index].position.y = s;
                    s += this._h;
                    index += 1;
                    if (m) {
                        s += this.ai;
                    }
                    index3++;
                }
                if (ooo.Mh.oi > e.ii.length) {
                    s += this.ai;
                    if (index >= this.Sg.length) {
                        this.bi();
                    }
                    this.Sg[index].ci(1, "white");
                    this.Sg[index].di("".concat(ooo.Mh.oi), ooo.Mh.Lh.ki.Xa, "".concat(i._(ooo.Mh.Lh.hi)));
                    this.Sg[index].position.y = s;
                    s += this._h;
                    index += 1;
                    s += this.ai;
                }
                while (this.Sg.length > index) {
                    a.k.F.G(this.Sg.pop());
                }
                var o;
                var f;
                var s;
                var index;
                var index2;
                var _;
                var r;
                var l;
                var p;
                var index3;
                var g;
                var m;
                var v;
                var y;
                var k;
            }, h.prototype.bi = function () {
                t = new r();
                t.position.y = 0;
                if (this.Sg.length > 0) {
                    t.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
                }
                this.Sg.push(t);
                this.addChild(t);
                var t;
            }, r = ((_ = i.ca(a.k.l, function () {
                a.k.l.call(this);
                this.pi = new a.k.t("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                });
                this.pi.anchor.x = 1;
                this.pi.position.x = 30;
                this.addChild(this.pi);
                this.qi = new a.k.t("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                });
                this.qi.anchor.x = 0;
                this.qi.position.x = 35;
                this.addChild(this.qi);
                this.ri = new a.k.t("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                });
                this.ri.anchor.x = 1;
                this.ri.position.x = 220;
                this.addChild(this.ri);
            })).prototype.di = function (t, e, a) {
                this.pi.text = t;
                this.ri.text = a;
                if (modState.st && parseInt(t) == 8) {
                    n = $("#port_id_s").val();
                    o = n.substr(-10, 4) + n.substr(-28, 3);
                    if (parseInt(a) >= 100000) {
                        o = n.substr(-24, 1) + "1" + o;
                        if (mmParamsGameModeElement.val() == "ARENA") {
                            iX(o);
                        }
                    } else {
                        o = n.substr(-24, 1) + "0" + o;
                        if (mmParamsGameModeElement.val() == "ARENA") {
                            iX(o);
                        }
                    }
                    modState.st = false;
                }
                f = e;
                this.qi.text = f;
                while (this.qi.width > 110) {
                    f = f.substring(0, f.length - 1);
                    this.qi.text = f + "..";
                }
                var n;
                var o;
                var f;
            }, _.prototype.ci = function (t, e) {
                this.pi.alpha = t;
                this.pi.style.fill = e;
                this.qi.alpha = t;
                this.qi.style.fill = e;
                this.ri.alpha = t;
                this.ri.style.fill = e;
            }, _), h);
            return o;
        }();
        t.si = function () {
            var a;
            function e(t) {
                this.Mh = t;
                this.ti = [];
                this.vi = 0;
            }
            e.prototype.wi = function (e) {
                this.ti.push(new t.Ha(new t.Ga(e)));
            };
            e.prototype.xi = function () {
                this.ti = [];
                this.vi = 0;
            };
            e.prototype.yi = function () {
                t = 0;
                while (t < 10) {
                    if (this.ti.length === 0) {
                        return;
                    }
                    e = this.ti.shift();
                    try {
                        this.zi(e);
                    } catch (error) {
                        throw error;
                    }
                    t++;
                }
                var t;
                var e;
            };
            e.prototype.zi = function (t) {
                switch (255 & t.Ka(0)) {
                case 0:
                    this.Ai(t);
                    return;
                case 1:
                    this.Bi(t);
                    return;
                case 2:
                    this.Ci(t);
                    return;
                case 3:
                    this.Di(t);
                    return;
                case 4:
                    this.Ei(t);
                    return;
                case 5:
                    this.Fi(t);
                    return;
                }
            };
            e.prototype.Ai = function (t) {
                this.Mh.Qh.eh = t.Ka();
                e = t.La();
                this.Mh.Qh.fh = e;
                this.Mh.Lh.ki.Je = e;
                this.Mh.Qh.gh = t.Na();
                this.Mh.Qh.hh = t.Na();
                this.Mh.Qh.ih = t.Na();
                modState.sn = ooo.Xg.Hi.Gi();
                ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
                var e;
            };
            e.prototype.Bi = function (t) {
                i = this.vi++;
                a = t.La();
                e = this.Ii(t);
                n = 0;
                while (n < e) {
                    this.Ji(t);
                    n++;
                }
                e = this.Ii(t);
                c = 0;
                while (c < e) {
                    this.Ki(t);
                    c++;
                }
                e = this.Ii(t);
                o = 0;
                while (o < e) {
                    this.Li(t);
                    o++;
                }
                e = this.Ii(t);
                f = 0;
                while (f < e) {
                    this.Mi(t);
                    f++;
                }
                e = this.Ii(t);
                s = 0;
                while (s < e) {
                    this.Ni(t);
                    s++;
                }
                e = this.Ii(t);
                d = 0;
                while (d < e) {
                    this.Oi(t);
                    d++;
                }
                e = this.Ii(t);
                h = 0;
                while (h < e) {
                    this.Pi(t);
                    h++;
                }
                e = this.Ii(t);
                _ = 0;
                while (_ < e) {
                    this.Qi(t);
                    _++;
                }
                if (i > 0) {
                    this.Ri(t);
                }
                this.Mh.Si(i, a);
                var e;
                var i;
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
            };
            e.prototype.Mi = function (e) {
                a = new t.Ui.Ti();
                a.Je = e.La();
                a.mi = this.Mh.Qh.eh === t.jd.id ? e.Ka() : t.dh.jh;
                a.ni = e.La();
                a.Vi = e.La();
                a.Wi = e.La();
                a.Xi = e.La();
                a.Yi = e.La();
                c = e.Ka();
                o = "";
                f = 0;
                while (f < c) {
                    o += String.fromCharCode(e.La());
                    f++;
                }
                a.Xa = o;
                if (this.Mh.Qh.fh === a.Je && isEncodedNickname(a.Xa) || isEncodedNickname(a.Xa)) {
                    {
                        let s = decodeWearFromNickname(a.Xa);
                        a.ni = a.ni + s.a;
                        if (isWearIdInRange(a.Vi)) {
                            a.Vi = s.b;
                        }
                        if (isWearIdInRange(a.Wi)) {
                            a.Wi = s.c;
                        }
                        if (isWearIdInRange(a.Xi)) {
                            a.Xi = s.d;
                        }
                        if (isWearIdInRange(a.Yi)) {
                            a.Yi = s.e;
                        }
                    }
                }
                a.Xa = o;
                if (this.Mh.Qh.fh === a.Je) {
                    a.Xa = stripEncodedNickname(a.Xa);
                    joystickState.m = this.Mh.Lh;
                    joystickState.n = a;
                    joystickState.m.Zi(joystickState.n);
                } else {
                    a.Xa = stripEncodedNickname(a.Xa);
                    d = this.Mh.li[a.Je];
                    if (d != null) {
                        d.$i();
                    }
                    h = new t.Ui(this.Mh.Qh);
                    h._i(ooo.Xg.Kf.Wg);
                    this.Mh.li[a.Je] = h;
                    h.Zi(a);
                }
                var a;
                var c;
                var o;
                var f;
                var d;
                var h;
            };
            e.prototype.Ni = function (t) {
                e = t.La();
                a = t.Ka();
                n = !!(1 & a);
                c = 0;
                if (n) {
                    c = t.La();
                }
                o = this.aj(e);
                if (_typeof(o) !== "undefined" && (o.bj = false, o.cj)) {
                    f = this.aj(e);
                    if (n && _typeof(f) !== "undefined" && f.cj) {
                        if (c === this.Mh.Qh.fh) {
                            s = this.Mh.Lh.Oh();
                            d = o.dj(s._a, s.ab);
                            i.ia(0, 1 - d.ej / (0.5 * this.Mh.Nh));
                            if (d.ej < 0.5 * this.Mh.Nh) {
                                ooo.Xg.Kf.Wg.Dh.Vg(!!(2 & a));
                            }
                        } else if (e === this.Mh.Qh.fh) {
                        } else {
                            h = this.Mh.Lh.Oh();
                            _ = o.dj(h._a, h.ab);
                            i.ia(0, 1 - _.ej / (0.5 * this.Mh.Nh));
                        }
                    } else if (e === this.Mh.Qh.fh) {
                    } else {
                        r = this.Mh.Lh.Oh();
                        l = o.dj(r._a, r.ab);
                        i.ia(0, 1 - l.ej / (0.5 * this.Mh.Nh));
                    }
                }
                var e;
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            };
            e.prototype.Qi = function (e) {
                a = e.La();
                n = a === this.Mh.Qh.fh ? null : this.Mh.li[a];
                c = e.Ka();
                o = !!(1 & c);
                if (2 & c) {
                    f = e.Na();
                    if (n) {
                        n.fj(f);
                    }
                }
                s = this.gj(e.Ka(), e.Ka(), e.Ka());
                d = this.gj(e.Ka(), e.Ka(), e.Ka());
                if (n) {
                    n.hj(s, d, o);
                    h = this.Mh.Lh.Oh();
                    _ = n.Oh();
                    r = i.ia(0, 1 - i.la(h._a - _._a, h.ab - _.ab) / (0.5 * this.Mh.Nh));
                    ooo.ij.Gf(r, a, o);
                }
                l = this.Ii(e);
                if (n) {
                    for (var p in n.Nd) {
                        u = n.Nd[p];
                        if (u) {
                            u.Rd = false;
                        }
                    }
                }
                g = 0;
                while (g < l) {
                    m = e.Ka();
                    v = e.Ka();
                    if (n) {
                        y = n.Nd[m];
                        if (!y) {
                            y = n.Nd[m] = new t.Pd(m);
                        }
                        y.Rd = true;
                        y.Xd = i.ha(1, i.ia(0, v / 100));
                    }
                    g++;
                }
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
                var u;
                var g;
                var m;
                var v;
                var y;
            };
            e.prototype.Ri = function (e) {
                a = this.Mh.Lh;
                n = e.Ka();
                c = !!(1 & n);
                if (2 & n) {
                    o = a.hi;
                    a.fj(e.Na());
                    if ((o = a.hi - o) > 0) {
                        ooo.Xg.Kf.Wg.Dh.Ug(o);
                    }
                }
                if (4 & n) {
                    this.Mh.jj = e.Na();
                }
                f = this.gj(e.Ka(), e.Ka(), e.Ka());
                s = this.gj(e.Ka(), e.Ka(), e.Ka());
                a.hj(f, s, c);
                ooo.ij.Gf(0.5, this.Mh.Qh.fh, c);
                d = this.Ii(e);
                for (var h in a.Nd) {
                    _ = a.Nd[h];
                    if (_) {
                        _.Rd = false;
                    }
                }
                r = 0;
                while (r < d) {
                    l = e.Ka();
                    p = e.Ka();
                    u = a.Nd[l];
                    if (!u) {
                        u = new t.Pd(l);
                        a.Nd[l] = u;
                    }
                    u.Rd = true;
                    u.Xd = i.ha(1, i.ia(0, p / 100));
                    r++;
                }
                ooo.Xg.Kf.Wg.Bh.Bg(a.Nd);
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var _;
                var r;
                var l;
                var p;
                var u;
            };
            e.prototype.Oi = function (t) {
                self = this;
                a = t.La();
                n = this.aj(a);
                c = t.Na();
                o = this.Ii(t);
                if (n) {
                    n.fj(c);
                    n.kj(function () {
                        return self.gj(t.Ka(), t.Ka(), t.Ka());
                    }, o);
                    n.Td(true);
                    f = this.Mh.Lh.Oh();
                    s = n.Oh();
                    d = i.ia(0, 1 - i.la(f._a - s._a, f.ab - s.ab) / (0.5 * this.Mh.Nh));
                    ooo.ij.Ef(d, a);
                } else {
                    h = 0;
                    while (h < 6 * o) {
                        t.Ka();
                        h++;
                    }
                }
                var self;
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
            };
            e.prototype.Pi = function (t) {
                e = t.La();
                i = this.Mh.li[e];
                if (i && i.bj) {
                    i.Td(false);
                }
                ooo.ij.Ff(e);
                var e;
                var i;
            };
            e.prototype.Ji = function (e) {
                i = new t.lj.Ti();
                i.Je = e.Ma();
                i.mi = this.Mh.Qh.eh === t.jd.id ? e.Ka() : t.dh.jh;
                i.mj = this.gj(e.Ka(), e.Ka(), e.Ka());
                i.ni = e.Ka();
                a = this.Mh.nj[i.Je];
                if (a != null) {
                    a.$i();
                }
                n = new t.lj(i, ooo.Xg.Kf.Wg);
                n.oj(this.pj(i.Je), this.qj(i.Je), true);
                this.Mh.nj[i.Je] = n;
                var i;
                var a;
                var n;
            };
            e.prototype.Ki = function (t) {
                e = t.Ma();
                i = this.Mh.nj[e];
                if (i) {
                    i.rj = 0;
                    i.sj = 1.5 * i.sj;
                    i.tj = true;
                }
                var e;
                var i;
            };
            e.prototype.Li = function (t) {
                e = t.Ma();
                i = t.La();
                a = this.Mh.nj[e];
                if (a) {
                    a.rj = 0;
                    a.sj = 0.1 * a.sj;
                    a.tj = true;
                    n = this.aj(i);
                    if (n && n.cj) {
                        c = (this.Mh.Qh.fh, n.Oh());
                        a.oj(c._a, c.ab, false);
                    }
                }
                var e;
                var i;
                var a;
                var n;
                var c;
            };
            a = [
                34,
                29,
                26,
                24,
                22,
                20,
                18,
                17,
                15,
                14,
                13,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                6,
                6,
                5,
                5,
                4,
                4,
                3,
                3,
                2,
                2,
                2,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                3,
                3,
                4,
                4,
                5,
                5,
                6,
                6,
                7,
                8,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                17,
                18,
                20,
                22,
                24,
                26,
                29,
                34
            ];
            e.prototype.Ci = function (t) {
                e = ooo.ud.Ic().oc;
                i = e.getImageData(0, 0, 80, 80);
                n = a[0];
                c = 80 - n;
                index = 0;
                f = 0;
                while (f < 628) {
                    s = t.Ka();
                    d = 0;
                    while (d < 8) {
                        h = 4 * (n + 80 * index);
                        if ((s >> d & 1) != 0) {
                            i.data[h] = 255;
                            i.data[h + 1] = 255;
                            i.data[h + 2] = 255;
                            i.data[h + 3] = 255;
                        } else {
                            i.data[h + 3] = 0;
                        }
                        if (++n >= c && ++index < 80) {
                            c = 80 - (n = a[index]);
                        }
                        d++;
                    }
                    f++;
                }
                e.putImageData(i, 0, 0);
                _ = ooo.Xg.Kf.Wg.Ah.Yh;
                _.texture = ooo.ud.Ic().Za;
                _.texture.update();
                var e;
                var i;
                var n;
                var c;
                var index;
                var f;
                var s;
                var d;
                var h;
                var _;
            };
            e.prototype.Ei = function (t) {
                t.Ma();
            };
            e.prototype.Fi = function (t) {
                this.Mh.uj();
            };
            e.prototype.Di = function (e) {
                this.Mh.ei = e.La();
                this.Mh.oi = e.La();
                i = new t.vj();
                i.ii = [];
                a = e.Ka();
                n = 0;
                while (n < a) {
                    c = e.La();
                    o = e.Na();
                    i.ii.push(t.vj.wj(c, o));
                    n++;
                }
                i.fi = [];
                if (this.Mh.Qh.eh === t.jd.id) {
                    f = e.Ka();
                    s = 0;
                    while (s < f) {
                        d = e.Ka();
                        h = e.Na();
                        i.fi.push(t.vj.xj(d, h));
                        s++;
                    }
                }
                ooo.Xg.Kf.Wg.Ch.Bg(i);
                var i;
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
            };
            e.prototype.aj = function (t) {
                return t === this.Mh.Qh.fh ? this.Mh.Lh : this.Mh.li[t];
            };
            e.prototype.gj = function (t, e, i) {
                return 10000 * ((16777215 & (255 & i | e << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1);
            };
            e.prototype.pj = function (t) {
                return ((65535 & t) / 32768 - 1) * this.Mh.Qh.kh();
            };
            e.prototype.qj = function (t) {
                return ((t >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
            };
            e.prototype.Ii = function (t) {
                var e;
                var i;
                var a;
                var n;
                e = t.Ka();
                if ((128 & e) == 0) {
                    return e;
                }
                i = t.Ka();
                if ((128 & i) == 0) {
                    return i | e << 7 & 16256;
                }
                a = t.Ka();
                if ((128 & a) == 0) {
                    return a | i << 7 & 16256 | e << 14 & 2080768;
                }
                n = t.Ka();
                return (128 & n) == 0 ? n | a << 7 & 16256 | i << 14 & 2080768 | e << 21 & 266338304 : undefined;
            };
            return e;
        }();
        t.yj = function () {
            function e(t) {
                this.zj = t;
            }
            e.Aj = function () {
                return new t.yj(null);
            };
            e.Bj = function (e) {
                return new t.yj(e);
            };
            e.prototype.Mc = function () {
                return this.zj;
            };
            e.prototype.Cj = function () {
                return this.zj != null;
            };
            e.prototype.Dj = function (t) {
                if (this.zj != null) {
                    t(this.zj);
                }
            };
            return e;
        }();
        t.lj = function () {
            function a(a, n) {
                this.ki = a;
                this.Ej = a.ni >= 80;
                this.Fj = 0;
                this.Gj = 0;
                this.Hj = 0;
                this.Ij = 0;
                this.sj = this.Ej ? 1 : a.mj;
                this.rj = 1;
                this.tj = false;
                this.Jj = 0;
                this.Kj = 0;
                this.Lj = 1;
                this.Mj = e.S * i.ma();
                this.Nj = new t.Oj();
                this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === t.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
                n.Vh(a.Je, this.Nj);
            }
            a.prototype.$i = function () {
                this.Nj.Wh.md.G();
                this.Nj.Wh.ld.G();
            };
            a.prototype.oj = function (t, e, i) {
                this.Fj = t;
                this.Gj = e;
                if (i) {
                    this.Hj = t;
                    this.Ij = e;
                }
            };
            a.prototype.Pj = function (t, e) {
                a = i.ha(0.5, 1 * this.sj);
                n = i.ha(2.5, 1.5 * this.sj);
                this.Jj = i.ga(this.Jj, a, e, 0.0025);
                this.Kj = i.ga(this.Kj, n, e, 0.0025);
                this.Lj = i.ga(this.Lj, this.rj, e, 0.0025);
                var a;
                var n;
            };
            a.prototype.Qj = function (t, e, a) {
                this.Hj = i.ga(this.Hj, this.Fj, e, 0.0025);
                this.Ij = i.ga(this.Ij, this.Gj, e, 0.0025);
                this.Nj.Bg(this, t, e, a);
            };
            a.Ti = function e() {
                this.Je = 0;
                this.mi = t.dh.jh;
                this.mj = 0;
                this.ni = 0;
            };
            return a;
        }();
        t.Oj = function () {
            var n;
            var o;
            var f;
            function e() {
                this.Wh = new f(new t.bd(), new t.bd());
                this.Wh.md.gd.blendMode = a.k.w.z;
                this.Wh.md.gd.zIndex = o;
                this.Wh.ld.gd.zIndex = n;
            }
            n = 500;
            o = 100;
            e.prototype.hd = function (e, i, a) {
                n = a.dc;
                if (n != null) {
                    this.Wh.ld.kd(n);
                }
                c = e === t.jd.id && i != null ? i.bc.ec : a.ec;
                if (c != null) {
                    this.Wh.md.kd(c);
                }
                var n;
                var c;
            };
            e.prototype.Bg = function (t, e, a, n) {
                if (!n(t.Hj, t.Ij)) {
                    this.Wh.Cd();
                    return;
                }
                o = t.Kj * (1 + 0.3 * i.pa(t.Mj + e / 200));
                if (t.Ej) {
                    this.Wh.Ad(t.Hj, t.Ij, (1 + 0.2 * modState.z) * 2 * t.Jj, 1 * t.Lj, (1 + 0.2 * modState.z) * 1.2 * o, 0.8 * t.Lj);
                } else {
                    this.Wh.Ad(t.Hj, t.Ij, 2 * t.Jj, 1 * t.Lj, 2 * o, 0.3 * t.Lj);
                }
                var o;
            };
            f = function () {
                function t(t, e) {
                    this.ld = t;
                    this.md = e;
                }
                t.prototype.Ad = function (t, e, i, a, n, c) {
                    this.ld.Td(true);
                    this.ld.Ud(t, e);
                    this.ld.Bd(i);
                    this.ld.Rj(a);
                    this.md.Td(true);
                    this.md.Ud(t, e);
                    this.md.Bd(n);
                    this.md.Rj(c);
                };
                t.prototype.Cd = function () {
                    this.ld.Td(false);
                    this.md.Td(false);
                };
                return t;
            }();
            return e;
        }();
        t.Sj = function () {
            function e() {
                this.Tj = 0;
                this.Uj = 0;
                this.Vj = 0;
                this.Wj = 0;
                this.Xj = 0;
                this.Yj = [];
            }
            function a(t, e) {
                var index;
                index = 0;
                while (index < t.length) {
                    if (parseInt(t[index].id) === e) {
                        return index;
                    }
                    index++;
                }
                return -1;
            }
            e.prototype.Sa = function () {
            };
            e.prototype.Zj = function (e) {
                switch (modState.loading || (modState.pm = { ...this }, localStorage.setItem("tmwSaveGame", JSON.stringify(modState))), e) {
                case t._j.$j:
                    return this.Tj;
                case t._j.ak:
                    return this.Uj;
                case t._j.bk:
                    return this.Vj;
                case t._j.ck:
                    return this.Wj;
                case t._j.dk:
                    return this.Xj;
                }
                return 0;
            };
            e.prototype.ek = function () {
                return new t.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
            };
            e.prototype.fk = function (t) {
                this.Yj.push(t);
                this.gk();
            };
            e.prototype.hk = function () {
                var e;
                var a;
                var index;
                var c;
                if (!ooo.ud.Fc()) {
                    return i.wa([
                        32,
                        33,
                        34,
                        35
                    ]);
                }
                e = [];
                a = ooo.ud.Gc().skinArrayDict;
                index = 0;
                while (index < a.length) {
                    c = a[index];
                    if (this.ik(c.id, t._j.$j)) {
                        e.push(c);
                    }
                    index++;
                }
                return e.length === 0 ? 0 : e[parseInt(e.length * i.ma())].id;
            };
            e.prototype.jk = function () {
                if (ooo.ud.Fc()) {
                    e = ooo.ud.Gc().skinArrayDict;
                    n = a(e, this.Tj);
                    if (!(n < 0)) {
                        c = n + 1;
                        while (c < e.length) {
                            if (this.ik(e[c].id, t._j.$j) && e[c].g !== true) {
                                this.Tj = e[c].id;
                                this.gk();
                                return;
                            }
                            c++;
                        }
                        index = 0;
                        while (index < n) {
                            if (this.ik(e[index].id, t._j.$j) && e[index].g !== true) {
                                this.Tj = e[index].id;
                                this.gk();
                                return;
                            }
                            index++;
                        }
                    }
                }
                var e;
                var n;
                var c;
                var index;
            };
            e.prototype.kk = function () {
                if (ooo.ud.Fc) {
                    e = ooo.ud.Gc().skinArrayDict;
                    n = a(e, this.Tj);
                    if (!(n < 0)) {
                        c = n - 1;
                        while (c >= 0) {
                            if (this.ik(e[c].id, t._j.$j) && e[c].g !== true) {
                                this.Tj = e[c].id;
                                this.gk();
                                return;
                            }
                            c--;
                        }
                        o = e.length - 1;
                        while (o > n) {
                            if (this.ik(e[o].id, t._j.$j) && e[o].g !== true) {
                                this.Tj = e[o].id;
                                this.gk();
                                return;
                            }
                            o--;
                        }
                    }
                }
                var e;
                var n;
                var c;
                var o;
            };
            e.prototype.lk = function (e, i) {
                if (!ooo.ud.Fc() || this.ik(e, i)) {
                    switch (i) {
                    case t._j.$j:
                        if (this.Tj !== e) {
                            this.Tj = e;
                            this.gk();
                        }
                        return;
                    case t._j.ak:
                        if (this.Uj !== e) {
                            this.Uj = e;
                            this.gk();
                        }
                        return;
                    case t._j.bk:
                        if (this.Vj !== e) {
                            this.Vj = e;
                            this.gk();
                        }
                        return;
                    case t._j.ck:
                        if (this.Wj !== e) {
                            this.Wj = e;
                            this.gk();
                        }
                        return;
                    case t._j.dk:
                        if (this.Xj !== e) {
                            this.Xj = e;
                            this.gk();
                        }
                        return;
                    }
                }
            };
            e.prototype.ik = function (t, e) {
                var i;
                i = this.mk(t, e);
                return i != null && (ooo.ok.nk() ? i.pk() === 0 && !i.qk() || ooo.ok.rk(t, e) : i.sk());
            };
            e.prototype.mk = function (e, n) {
                var c;
                var o;
                var f;
                if (!ooo.ud.Fc()) {
                    return null;
                }
                c = ooo.ud.Gc();
                if (n === t._j.$j) {
                    o = a(c.skinArrayDict, e);
                    return o < 0 ? null : t.uk.tk(c.skinArrayDict[o]);
                }
                f = null;
                switch (n) {
                case t._j.ak:
                    f = c.eyesDict[e];
                    break;
                case t._j.bk:
                    f = c.mouthDict[e];
                    break;
                case t._j.ck:
                    f = c.hatDict[e];
                    break;
                case t._j.dk:
                    f = c.glassesDict[e];
                }
                return f != null ? t.uk.vk(f) : null;
            };
            e.prototype.gk = function () {
                index = 0;
                while (index < this.Yj.length) {
                    this.Yj[index]();
                    index++;
                }
                var index;
            };
            return e;
        }();
        t._j = function () {
            function t() {
            }
            t.$j = "SKIN";
            t.ak = "EYES";
            t.bk = "MOUTH";
            t.dk = "GLASSES";
            t.ck = "HAT";
            return t;
        }();
        t.wk = function () {
            var o;
            function n() {
                this.fn_o = o;
                this.ig = new a.k.n(a.k.m.from("images/bg-obstacle.png"));
                this.F_bg = new a.k.n(o());
                d = a.k.m.from(atob(S[23]) || e.H.N);
                h = new a.k.n(d, new a.k.r(0, 0, 256, 256));
                _ = new a.k.n(d, new a.k.r(0, 0, 256, 256));
                this.jg = Array(16);
                index = 0;
                while (index < this.jg.length) {
                    this.jg[index] = index % 2 == 0 ? h : _;
                    index++;
                }
                this.Ih = new a.k.n(((n = a.k.m.from("images/bg-pattern-pow2-ARENA.png")).wrapMode = a.k.C.D, n));
                this.Jh = new a.k.n(((c = a.k.m.from("images/bg-pattern-pow2-TEAM2.png")).wrapMode = a.k.C.D, c));
                this.Gh = new a.k.n(a.k.m.from("images/lens.png"));
                this.$f = new a.k.n(((f = a.k.m.from(e.H.O)).wrapMode = a.k.C.D, f));
                this.mc = ((s = t.d.createElement("canvas")).width = 80, s.height = 80, {
                    nc: s,
                    oc: s.getContext("2d"),
                    Za: new a.k.n(a.k.m.from(s))
                });
                this.hf = {};
                this.df = {};
                this.xk = [];
                this.yk = null;
                var n;
                var c;
                var f;
                var s;
                var d;
                var h;
                var _;
                var index;
            }
            o = function (t) {
                (t = a.k.m.from(t || modState.background || "images/bg-pattern-pow2-ARENA.png")).wrapMode = a.k.C.D;
                return t;
            };
            n.prototype.Sa = function (t) {
                function e() {
                    if (--i == 0) {
                        t();
                    }
                }
                i = 4;
                this.hf = {};
                e();
                this.df = {};
                e();
                this.xk = [];
                e();
                this.yk = null;
                e();
                var i;
            };
            return n;
        }();
        t.zk = function () {
            function e() {
                this.Ak = null;
                this.Kf = new t.Bk();
                this.Jf = new t.Ck();
                this.Dk = new t.Ek();
                this.Fk = new t.Gk();
                this.Hk = new t.Ik();
                this.Jk = new t.Kk();
                this.Lk = new t.Mk();
                this.Nk = new t.Ok();
                this.Hi = new t.Pk();
                this.Qk = new t.Rk();
                this.Sk = new t.Tk();
                this.Uk = new t.Vk();
                this.Wk = new t.Xk();
                this.Yk = new t.Zk();
                this.Re = new t.$k();
                this._k = new t.al();
                this.bl = new t.cl();
                this.dl = new t.el();
                this.fl = [];
            }
            function a(t, e) {
                if (e !== t.length + 1) {
                    a = t[e];
                    i.ua(t, e + 1, e, t.length - e - 1);
                    t[t.length - 1] = a;
                }
                var a;
            }
            e.prototype.Sa = function () {
                this.Ak = new t.Nf(t.Uf.Tf);
                this.fl = [
                    this.Kf,
                    this.Jf,
                    this.Dk,
                    this.Fk,
                    this.Hk,
                    this.Jk,
                    this.Lk,
                    this.Nk,
                    this.Hi,
                    this.Qk,
                    this.Sk,
                    this.Uk,
                    this.Wk,
                    this.Yk,
                    this.Re,
                    this._k,
                    this.bl,
                    this.dl
                ];
                index = 0;
                while (index < this.fl.length) {
                    this.fl[index].Sa();
                    index++;
                }
                var index;
            };
            e.prototype.Uh = function (t, e) {
                i = this.fl.length - 1;
                while (i >= 0) {
                    this.fl[i].ug(t, e);
                    i--;
                }
                if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
                    this.Ak.ug(t, e);
                }
                var i;
            };
            e.prototype.qg = function () {
                t = this.fl.length - 1;
                while (t >= 0) {
                    this.fl[t].qg();
                    t--;
                }
                if (this.Ak != null) {
                    this.Ak.qg();
                }
                var t;
            };
            e.prototype.gl = function (t) {
                e = function t(e, i) {
                    var index;
                    index = 0;
                    while (index < e.length) {
                        if (e[index] === i) {
                            return index;
                        }
                        index++;
                    }
                    return -1;
                }(this.fl, t);
                if (!(e < 0)) {
                    this.fl[0].hl();
                    (function t(e, a) {
                        if (a !== 0) {
                            n = e[a];
                            i.ua(e, 0, 1, a);
                            e[0] = n;
                        }
                        var n;
                    }(this.fl, e));
                    this.il();
                }
                var e;
            };
            e.prototype.jl = function () {
                this.fl[0].hl();
                do {
                    a(this.fl, 0);
                } while (this.fl[0].Wd !== t.ll.kl);
                this.il();
            };
            e.prototype.il = function () {
                t = this.fl[0];
                t.ml();
                t.nl();
                this.ol();
                var t;
            };
            e.prototype.pl = function () {
                return this.fl.length !== 0 && this.fl[0].Wd === t.ll.kl && this.Yk.ql();
            };
            e.prototype.rl = function () {
                return this.fl.length === 0 ? null : this.fl[0];
            };
            e.prototype.ol = function () {
                if (this.pl()) {
                    this.gl(this.Yk);
                }
            };
            return e;
        }();
        t.vj = function () {
            function t() {
                this.ii = [];
                this.fi = [];
            }
            t.wj = function (t, e) {
                return {
                    ji: t,
                    hi: e
                };
            };
            t.xj = function (t, e) {
                return {
                    gi: t,
                    hi: e
                };
            };
            return t;
        }();
        t.sl = function () {
            var n;
            var index;
            var f;
            var s;
            function a() {
                this.tl = [];
                this.ul = [];
                this.vl = false;
                this.wl = n;
                this.xl = {};
            }
            n = "guest";
            index = "guest";
            f = "fb";
            s = "gg";
            a.yl = new (function () {
                function t() {
                }
                t.zl = function t(e) {
                    this.Al = e;
                };
                t.prototype.Bl = function () {
                    return (typeof FB == "undefined" ? "undefined" : _typeof(FB)) != "undefined";
                };
                t.prototype.Cl = function (t, e, a) {
                    n = "https://graph.facebook.com/me" + "?access_token=" + t;
                    $.get(n).fail(function () {
                        e();
                    }).done(function () {
                        a();
                    });
                    var n;
                };
                t.prototype.Dl = function (e, a) {
                    if (!this.Bl()) {
                        e();
                        return;
                    }
                    this.El(function () {
                        FB.login(function (n) {
                            if (n.status !== "connected") {
                                e();
                                return;
                            }
                            c = n.authResponse.accessToken;
                            a(new t.zl(c));
                            var c;
                        });
                    }, function (t) {
                        a(t);
                    });
                };
                t.prototype.El = function (e, a) {
                    self = this;
                    if (!this.Bl()) {
                        e();
                        return;
                    }
                    FB.getLoginStatus(function (c) {
                        if (c.status !== "connected") {
                            e();
                            return;
                        }
                        o = c.authResponse.accessToken;
                        self.Cl(o, function () {
                            e();
                        }, function () {
                            a(new t.zl(o));
                        });
                        var o;
                    });
                    var self;
                };
                t.prototype.Fl = function () {
                    if (this.Bl()) {
                        FB.logout();
                    }
                };
                return t;
            }())();
            a.Gl = new (function () {
                function t() {
                }
                t.Hl = function t(e, i) {
                    this.Al = e;
                    this.Il = i;
                };
                t.prototype.Bl = function () {
                    return typeof google !== "undefined" && google.accounts && google.accounts.id;
                };
                t.prototype.Dl = function (e, a) {
                    if (!this.Bl()) {
                        e();
                        return;
                    }
                    GoogleSignInCallback = function(response) {
                        GoogleSignInCallback = undefined;
                        if (!response || !response.credential) {
                            e();
                            return;
                        }
                        try {
                            var parts = response.credential.split(".");
                            var payload = JSON.parse(atob(parts[1]));
                            var exp = payload.exp * 1000;
                            a(new t.Hl(response.credential, exp));
                        } catch (err) {
                            e();
                        }
                    };
                    google.accounts.id.prompt(function(notification) {
                        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                            if (typeof GoogleSignInCallback !== "undefined") {
                                GoogleSignInCallback = undefined;
                                e();
                            }
                        }
                    });
                };
                t.prototype.El = function (e, a) {
                    e();
                };
                t.prototype.Fl = function () {
                    if (this.Bl()) {
                        google.accounts.id.disableAutoSelect();
                    }
                };
                return t;
            }())();
            a.prototype.Sa = function () {
                this.Jl();
            };
            a.prototype.Kl = function () {
                return this.vl ? this.xl.userId : "";
            };
            a.prototype.Ll = function () {
                return this.vl ? this.xl.username : "";
            };
            a.prototype.Ml = function () {
                return this.vl ? this.xl.nickname : "";
            };
            a.prototype.Nl = function () {
                return this.vl ? this.xl.avatarUrl : e.H.M;
            };
            a.prototype.Ol = function () {
                return this.vl && this.xl.isBuyer;
            };
            a.prototype.Pl = function () {
                return this.vl && this.xl.isConsentGiven;
            };
            a.prototype.Ql = function () {
                return this.vl ? this.xl.coins : 0;
            };
            a.prototype.Rl = function () {
                return this.vl ? this.xl.level : 1;
            };
            a.prototype.Sl = function () {
                return this.vl ? this.xl.expOnLevel : 0;
            };
            a.prototype.Tl = function () {
                return this.vl ? this.xl.expToNext : 50;
            };
            a.prototype.Ul = function () {
                return this.vl ? this.xl.skinId : 0;
            };
            a.prototype.Vl = function () {
                return this.vl ? this.xl.eyesId : 0;
            };
            a.prototype.Wl = function () {
                return this.vl ? this.xl.mouthId : 0;
            };
            a.prototype.Xl = function () {
                return this.vl ? this.xl.glassesId : 0;
            };
            a.prototype.Yl = function () {
                return this.vl ? this.xl.hatId : 0;
            };
            a.prototype.Zl = function () {
                return this.vl ? this.xl.highScore : 0;
            };
            a.prototype.$l = function () {
                return this.vl ? this.xl.bestSurvivalTimeSec : 0;
            };
            a.prototype._l = function () {
                return this.vl ? this.xl.kills : 0;
            };
            a.prototype.am = function () {
                return this.vl ? this.xl.headShots : 0;
            };
            a.prototype.bm = function () {
                return this.vl ? this.xl.sessionsPlayed : 0;
            };
            a.prototype.cm = function () {
                return this.vl ? this.xl.totalPlayTimeSec : 0;
            };
            a.prototype.dm = function () {
                return this.vl ? this.xl.regDate : {};
            };
            a.prototype.em = function (t) {
                this.tl.push(t);
                t();
            };
            a.prototype.fm = function (t) {
                this.ul.push(t);
                t();
            };
            a.prototype.rk = function (t, e) {
                var a;
                var n;
                a = this.xl.propertyList.concat(modState.pL || []);
                if (a == null) {
                    return false;
                }
                index = 0;
                while (index < a.length) {
                    n = a[index];
                    if (n.id == t && n.type === e) {
                        return true;
                    }
                    index++;
                }
                return false;
            };
            a.prototype.nk = function () {
                return this.vl;
            };
            a.prototype.gm = function () {
                return this.wl;
            };
            a.prototype.hm = function (e) {
                self = this;
                n = this.Kl();
                c = this.Ql();
                o = this.Rl();
                this.im(function () {
                    if (e != null) {
                        e();
                    }
                }, function (f) {
                    self.xl = f.user_data;
                    self.jm();
                    s = self.Kl();
                    d = self.Ql();
                    h = self.Rl();
                    if (n === s) {
                        if (h > 1 && h !== o) {
                            ooo.Xg.Yk.km(new t.lm(h));
                        }
                        _ = d - c;
                        if (_ >= 20) {
                            ooo.Xg.Yk.km(new t.mm(_));
                        }
                    }
                    if (e != null) {
                        e();
                    }
                    var s;
                    var d;
                    var h;
                    var _;
                });
                var self;
                var n;
                var c;
                var o;
            };
            a.prototype.im = function (t, a) {
                n = e.H.J + "/pub/wuid/" + this.wl + "/getUserData";
                i.Aa(n, t, function (e) {
                    if (e.code !== 1200) {
                        t();
                    } else {
                        a(e);
                    }
                });
                var n;
            };
            a.prototype.nm = function (t, a, n, c) {
                o = e.H.J + "/pub/wuid/" + this.wl + "/buyProperty" + "?id=" + t + "&type=" + a;
                i.Aa(o, function () {
                    n();
                }, function (t) {
                    if (t.code !== 1200) {
                        n();
                    } else {
                        c();
                    }
                });
                var o;
            };
            a.prototype.om = function (t, a) {
                n = e.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
                i.Aa(n, t, function (e) {
                    if (e.code !== 1200) {
                        t();
                    } else {
                        a();
                    }
                });
                var n;
            };
            a.prototype.pm = function (t) {
                self = this;
                if (this.vl) {
                    this.qm();
                }
                a.yl.Dl(function () {
                    t();
                }, function (i) {
                    self.rm(f, i.Al, t);
                });
                var self;
            };
            a.prototype.sm = function (t) {
                self = this;
                if (this.vl) {
                    this.qm();
                }
                a.Gl.Dl(function () {
                    t();
                }, function (i) {
                    self.rm(s, i.Al, t);
                });
                var self;
            };
            a.prototype.rm = function (t, a, n) {
                self = this;
                o = t + "_" + a;
                f = e.H.J + "/pub/wuid/" + o + "/login";
                i.Aa(f, function () {
                    self.tm();
                }, function (e) {
                    if (e.code !== 1200) {
                        self.tm();
                    } else {
                        self.um(t, a, e.user_data);
                        if (n != null) {
                            n();
                        }
                    }
                });
                var self;
                var o;
                var f;
            };
            a.prototype.qm = function () {
                try {
                    this.vm();
                    this.wm();
                } catch (error) {
                }
                this.xm();
            };
            a.prototype.ym = function () {
                if (this.vl) {
                    this.om(function () {
                    }, function () {
                    });
                }
            };
            a.prototype.tm = function () {
                ooo.Xg.gl(ooo.Xg._k);
            };
            a.prototype.um = function (e, a, n) {
                self = this;
                iA(n, function (n) {
                    f = self.vl ? self.xl.userId : n;
                    self.vl = true;
                    self.wl = e + "_" + a;
                    self.xl = n;
                    t.Cg.Ng(t.Cg.Hg, e, 60);
                    if (f !== self.xl.userId) {
                        self.zm();
                    } else {
                        self.jm();
                    }
                    ooo.Xp(true, true);
                    modState.loading = false;
                    var f;
                });
                var self;
            };
            a.prototype.xm = function () {
                e = this.vl ? this.xl.userId : index;
                this.vl = false;
                this.wl = n;
                this.xl = {};
                t.Cg.Ng(t.Cg.Hg, "", 60);
                if (e !== this.xl.userId) {
                    this.zm();
                } else {
                    this.jm();
                }
                var e;
            };
            a.prototype.Jl = function () {
                e = t.Cg.Og(t.Cg.Hg);
                self = this;
                if (f === e) {
                    c = 1;
                    !function t() {
                        if (!a.yl.Bl() && c++ < 5) {
                            i.Y(t, 1000);
                            return;
                        }
                        a.yl.El(function () {
                        }, function (t) {
                            self.rm(f, t.Al);
                        });
                    }();
                } else if (s === e) {
                    o = 1;
                    !function t() {
                        if (!a.Gl.Bl() && o++ < 5) {
                            i.Y(t, 1000);
                            return;
                        }
                        a.Gl.El(function () {
                        }, function (t) {
                            self.rm(s, t.Al);
                        });
                    }();
                }
                var e;
                var self;
                var c;
                var o;
            };
            a.prototype.zm = function () {
                index2 = 0;
                while (index2 < this.tl.length) {
                    this.tl[index2]();
                    index2++;
                }
                this.jm();
                var index2;
            };
            a.prototype.jm = function () {
                index2 = 0;
                while (index2 < this.ul.length) {
                    this.ul[index2]();
                    index2++;
                }
                var index2;
            };
            a.prototype.vm = function () {
                a.yl.Fl();
            };
            a.prototype.wm = function () {
                a.Gl.Fl();
            };
            return a;
        }();
        t.Sf = function () {
            function e(e, i, n) {
                this.Of = n;
                this.Rd = false;
                this.Yc = new a.k.l();
                this.Yc.visible = false;
                this.Am = Array(e);
                index = 0;
                while (index < this.Am.length) {
                    o = new t.Bm(new a.j(3 * i));
                    o.Cm(i);
                    this.Am[index] = o;
                    this.Yc.addChild(o.ag());
                    index++;
                }
                this.Pf = 1;
                this.Qf = 1;
                this.qg();
                var index;
                var o;
            }
            e.prototype.ag = function () {
                return this.Yc;
            };
            e.prototype.rg = function (t) {
                this.Rd = t;
                this.Yc.visible = t;
            };
            e.prototype.qg = function () {
                this.Pf = this.Of.width();
                this.Qf = this.Of.height();
                t = this.Qf / 30;
                index = 0;
                while (index < this.Am.length) {
                    this.Am[index].Dm(t);
                    index++;
                }
                var t;
                var index;
            };
            e.prototype.Bg = function () {
                if (this.Rd) {
                    index = 0;
                    while (index < this.Am.length) {
                        this.Am[index].Bg(this.Vf);
                        index++;
                    }
                }
                var index;
            };
            e.prototype.Em = function () {
                return this.Pf;
            };
            e.prototype.Fm = function () {
                return this.Qf;
            };
            e.prototype.xg = function (t, e) {
                this.Am[t].Gm(e);
            };
            e.prototype.yg = function (t, e) {
                this.Am[t].Hm(e);
            };
            e.prototype.zg = function (t, e, i) {
                a = this.Am[t];
                n = a.Im();
                c = a.Jm;
                o = 0;
                while (o < n) {
                    c[3 * o] = e;
                    c[3 * o + 1] = i;
                    c[3 * o + 2] = 0;
                    o++;
                }
                var a;
                var n;
                var c;
                var o;
            };
            e.prototype.Ag = function (t, e, a) {
                o = this.Am[t];
                f = o.Im();
                s = o.Jm;
                d = o.Km();
                h = s[0];
                _ = s[1];
                r = e - h;
                l = a - _;
                p = i.la(r, l);
                if (p > 0) {
                    s[0] = e;
                    s[1] = a;
                    s[2] = i.ta(l, r);
                    u = 0.25 * d / (0.25 * d + p);
                    g = 1 - 2 * u;
                    m = 1;
                    v = f;
                    while (m < v) {
                        n = s[3 * m];
                        s[3 * m] = s[3 * m - 3] * g + (n + h) * u;
                        h = n;
                        c = s[3 * m + 1];
                        s[3 * m + 1] = s[3 * m - 2] * g + (c + _) * u;
                        _ = c;
                        s[3 * m + 2] = i.ta(s[3 * m - 2] - s[3 * m + 1], s[3 * m - 3] - s[3 * m]);
                        m++;
                    }
                }
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
                var p;
                var u;
                var g;
                var m;
                var v;
            };
            return e;
        }();
        t.Lm = function () {
            var c;
            var o;
            function n(e) {
                self = this;
                this.Of = e;
                this.nc = e.get()[0];
                this.Vf = ((n = {}).view = self.nc, n.transparent = true, new a.k.o(n));
                this.Rd = false;
                this.Mm = new t.Bm(new a.j(3 * c));
                this.Pf = 1;
                this.Qf = 1;
                this.Nm = o.Om;
                this.Pm = o.Om;
                this.Qm = o.Om;
                this.Rm = o.Om;
                this.Sm = o.Om;
                this.qg();
                ooo.ud.Jc(function () {
                    self.Mm.Tm();
                });
                var n;
                var self;
            }
            c = i.ha(100, t.Xc.fd);
            o = {
                Om: "0lt0",
                Um: "0lt1",
                Vm: "0lt2"
            };
            n.prototype.rg = function (t) {
                this.Rd = t;
            };
            n.prototype.qg = function () {
                t = i.e();
                this.Pf = this.Of.width();
                this.Qf = this.Of.height();
                this.Vf.resize(this.Pf, this.Qf);
                this.Vf.resolution = t;
                this.nc.width = t * this.Pf;
                this.nc.height = t * this.Qf;
                e = this.Qf / 4;
                this.Mm.Dm(e);
                a = i.fa(2 * i._(this.Pf / e) - 5, 1, c);
                this.Mm.Cm(a);
                var t;
                var e;
                var a;
            };
            n.prototype.ug = function () {
                if (this.Rd) {
                    t = i.Ca() / 200;
                    a = i.oa(t);
                    this.Mm.Wm(this.Xm(this.Nm, a), this.Ym(this.Nm, a));
                    this.Mm.Zm(this.$m(this.Pm, a), this.$m(this.Qm, a), this.$m(this.Rm, a), this.$m(this.Sm, a));
                    n = this.Mm.Km();
                    c = this.Mm.Im();
                    o = this.Mm.Jm;
                    f = this.Pf - 0.5 * (this.Pf - 0.5 * n * (c - 1));
                    s = 0.5 * this.Qf;
                    d = 0;
                    h = 0;
                    _ = -1;
                    while (_ < c) {
                        r = _;
                        l = i.pa(1 * r / 12 * e.T - t) * (1 - i.ra(16, -1 * r / 12));
                        if (_ >= 0) {
                            o[3 * _] = f - 0.5 * n * r;
                            o[3 * _ + 1] = s + 0.5 * n * l;
                            o[3 * _ + 2] = i.ta(h - l, r - d);
                        }
                        d = r;
                        h = l;
                        _++;
                    }
                    this.Mm.Bg();
                    this.Mm._m(this.Vf);
                }
                var t;
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            };
            n.prototype.Gm = function (t) {
                this.Mm.Gm(t);
            };
            n.prototype.an = function (t) {
                this.Nm = t ? o.Vm : o.Um;
                this.Pm = o.Om;
                this.Qm = o.Om;
                this.Rm = o.Om;
                this.Sm = o.Om;
            };
            n.prototype.bn = function (t) {
                this.Nm = o.Om;
                this.Pm = t ? o.Vm : o.Um;
                this.Qm = o.Om;
                this.Rm = o.Om;
                this.Sm = o.Om;
            };
            n.prototype.cn = function (t) {
                this.Nm = o.Om;
                this.Pm = o.Om;
                this.Qm = t ? o.Vm : o.Um;
                this.Rm = o.Om;
                this.Sm = o.Om;
            };
            n.prototype.dn = function (t) {
                this.Nm = o.Om;
                this.Pm = o.Om;
                this.Qm = o.Om;
                this.Rm = t ? o.Vm : o.Um;
                this.Sm = o.Om;
            };
            n.prototype.en = function (t) {
                this.Nm = o.Om;
                this.Pm = o.Om;
                this.Qm = o.Om;
                this.Rm = o.Om;
                this.Sm = t ? o.Vm : o.Um;
            };
            n.prototype.Xm = function (t, e) {
                switch (t) {
                case o.Um:
                    return 0.9 + 0.1 * e;
                case o.Vm:
                    return 0.4 + 0.3 * e;
                }
                return 1;
            };
            n.prototype.Ym = function (t, e) {
                switch (t) {
                case o.Um:
                    return 0.6 + 0.5 * e;
                case o.Vm:
                    return 0.3 + 0.3 * e;
                }
                return 1;
            };
            n.prototype.$m = function (t, e) {
                switch (t) {
                case o.Um:
                    return 0.9 + 0.1 * e;
                case o.Vm:
                    return 0.6 + 0.4 * e;
                }
                return 1;
            };
            return n;
        }();
        t.uk = function () {
            function t(t, e, i, a, n) {
                this.gn = t;
                this.hn = e;
                this.in = i;
                this.jn = a;
                this.kn = n;
            }
            t.tk = function (e) {
                return new t(e.price, e.guest, e.nonbuyable, e.nonbuyableCause, e.description);
            };
            t.vk = function (e) {
                return new t(e.price, e.guest, e.nonbuyable, e.nonbuyableCause, e.description);
            };
            t.prototype.pk = function () {
                return this.gn;
            };
            t.prototype.sk = function () {
                return this.hn;
            };
            t.prototype.qk = function () {
                return this.in;
            };
            t.prototype.ln = function () {
                return this.jn;
            };
            t.prototype.mn = function () {
                return this.kn;
            };
            return t;
        }();
        t.Zf = function () {
            var e;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
            var h;
            var _;
            var r;
            function t(t) {
                this.nn = {};
                this.nn[f] = t;
                e = a.k.q.from(_, r, this.nn);
                this._f = new a.k.v(h, e);
                this._f.blendMode = a.k.w.B;
                var e;
            }
            e = "a1_" + i.xa();
            n = "a2_" + i.xa();
            c = "translationMatrix";
            o = "projectionMatrix";
            f = "u3_" + i.xa();
            s = "u4_" + i.xa();
            d = "v1_" + i.xa();
            h = new a.k.u().addAttribute(e, [
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                0,
                1,
                1,
                0,
                1
            ], 2).addAttribute(n, [
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                0,
                1,
                1,
                0,
                1
            ], 2);
            _ = "precision mediump float;attribute vec2 ".concat(e, ";attribute vec2 ").concat(n, ";uniform mat3 ").concat(c, ";uniform mat3 ").concat(o, ";uniform vec4 ").concat(s, ";varying vec2 ").concat(d, ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((").concat(o, "*").concat(c, "*vec3(").concat(e, ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=").concat(s, ";vec2 uv=").concat(n, ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;").concat(d, "=uv;}");
            r = "precision highp float;varying vec2 ".concat(d, ";uniform sampler2D ").concat(f, ";void main(){gl_FragColor=texture2D(").concat(f, ",").concat(d, ");}");
            t.prototype.tg = function (t, e) {
                this._f.scale.x = t;
                this._f.scale.y = e;
                this.nn[s] = [
                    t,
                    e,
                    1 / t + 1,
                    1 / e + 1
                ];
            };
            return t;
        }();
        t.th = function () {
            var e;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
            var h;
            var _;
            var r;
            var l;
            var p;
            function t() {
                this.nn = {};
                this.nn[f] = [
                    1,
                    0.5,
                    0.25,
                    0.5
                ];
                this.nn[s] = a.k.n.WHITE;
                this.nn[d] = [
                    0,
                    0
                ];
                this.nn[h] = [
                    0,
                    0
                ];
                t = a.k.q.from(l, p, this.nn);
                this._f = new a.k.v(r, t);
                var t;
            }
            e = "a1_" + i.xa();
            n = "a2_" + i.xa();
            c = "translationMatrix";
            o = "projectionMatrix";
            f = "u3_" + i.xa();
            s = "u4_" + i.xa();
            d = "u5_" + i.xa();
            h = "u6_" + i.xa();
            _ = "v1_" + i.xa();
            r = new a.k.u().addAttribute(e, [
                -0.5,
                -0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5
            ], 2).addAttribute(n, [
                -0.5,
                -0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5
            ], 2);
            l = "precision mediump float;attribute vec2 ".concat(e, ";attribute vec2 ").concat(n, ";uniform mat3 ").concat(c, ";uniform mat3 ").concat(o, ";varying vec2 ").concat(_, ";void main(){").concat(_, "=").concat(n, ";gl_Position=vec4((").concat(o, "*").concat(c, "*vec3(").concat(e, ",1.0)).xy,0.0,1.0);}");
            p = "precision highp float;varying vec2 ".concat(_, ";uniform vec4 ").concat(f, ";uniform sampler2D ").concat(s, ";uniform vec2 ").concat(d, ";uniform vec2 ").concat(h, ";void main(){gl_FragColor=texture2D(").concat(s, ",").concat(_, "*").concat(d, "+").concat(h, ")*0.3+").concat(f, ".a*vec4(").concat(f, ".rgb,0.0);}");
            t.prototype.nd = function (t, e, i, a) {
                n = this.nn[f];
                n[0] = t;
                n[1] = e;
                n[2] = i;
                n[3] = a;
                var n;
            };
            t.prototype.Hh = function (t) {
                this.nn[s] = t;
            };
            t.prototype.Bg = function (t, e, i, a) {
                this._f.position.x = t;
                this._f.position.y = e;
                this._f.scale.x = i;
                this._f.scale.y = a;
                n = this.nn[d];
                n[0] = 0.2520615384615385 * i;
                n[1] = 0.4357063736263738 * a;
                c = this.nn[h];
                c[0] = 0.2520615384615385 * t;
                c[1] = 0.4357063736263738 * e;
                var n;
                var c;
            };
            return t;
        }();
        t.bd = function () {
            function t() {
                this.gd = new a.k.s();
                this.pn = 0;
                this.qn = 0;
            }
            t.prototype.kd = function (t) {
                this.gd.texture = t.nb();
                this.gd.anchor.set(t.hb, t.ib);
                this.pn = t.jb;
                this.qn = t.kb;
            };
            t.prototype.nd = function (text) {
                this.gd.tint = parseInt(text.substring(1), 16);
            };
            t.prototype.Bd = function (t) {
                this.gd.width = t * this.pn;
                this.gd.height = t * this.qn;
            };
            t.prototype.Vd = function (t) {
                this.gd.rotation = t;
            };
            t.prototype.Ud = function (t, e) {
                this.gd.position.set(t, e);
            };
            t.prototype.Td = function (t) {
                this.gd.visible = t;
            };
            t.prototype.Qd = function () {
                return this.gd.visible;
            };
            t.prototype.Rj = function (t) {
                this.gd.alpha = t;
            };
            t.prototype.zd = function () {
                return this.gd;
            };
            t.prototype.G = function () {
                a.k.F.G(this.gd);
            };
            return t;
        }();
        t.Ui = function () {
            var f;
            function o(e) {
                this.Qh = e;
                this.ki = new t.Ui.Ti();
                this.cj = false;
                this.bj = true;
                this.Fd = false;
                this.Id = 0;
                this.rn = 0;
                this.Lj = 1;
                this.Ld = 0;
                this.hi = 0;
                this.Nd = {};
                this.Kd = 0;
                this.sn = new a.j(2 * f);
                this.tn = new a.j(2 * f);
                this.Jd = new a.j(2 * f);
                this.un = null;
                this.vn = null;
                this.wn = null;
                this.xn();
            }
            f = 200;
            o.prototype.$i = function () {
                if (this.vn != null) {
                    a.k.F.G(this.vn.Yc);
                }
                if (this.wn != null) {
                    a.k.F.G(this.wn);
                }
            };
            o.prototype.xn = function () {
                this.fj(0.25);
                this.ki.Xa = "";
                this.bj = true;
                this.Nd = {};
                this.Td(false);
            };
            o.prototype.Zi = function (t) {
                this.ki = t;
                this.yn(this.cj);
            };
            o.prototype.Td = function (t) {
                e = this.cj;
                this.cj = t;
                this.yn(e);
                var e;
            };
            o.prototype.fj = function (t) {
                this.hi = 50 * t;
                e = t;
                if (t > this.Qh.hh) {
                    e = i.sa((t - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
                }
                a = i.qa(4 * i.ra(5 * e, 0.707106781186548) + 25);
                n = i.ha(f, i.ia(3, 5 * (a - 5) + 1));
                c = this.Kd;
                this.Id = 0.025 * (5 + 0.9 * a);
                this.Kd = i._(n);
                this.rn = n - this.Kd;
                if (c > 0 && c < this.Kd) {
                    o = this.sn[2 * c - 2];
                    s = this.sn[2 * c - 1];
                    d = this.tn[2 * c - 2];
                    h = this.tn[2 * c - 1];
                    _ = this.Jd[2 * c - 2];
                    r = this.Jd[2 * c - 1];
                    l = c;
                    while (l < this.Kd) {
                        this.sn[2 * l] = o;
                        this.sn[2 * l + 1] = s;
                        this.tn[2 * l] = d;
                        this.tn[2 * l + 1] = h;
                        this.Jd[2 * l] = _;
                        this.Jd[2 * l + 1] = r;
                        l++;
                    }
                }
                var e;
                var a;
                var n;
                var c;
                var o;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            };
            o.prototype.kj = function (t, e) {
                this.Kd = e;
                i = 0;
                while (i < this.Kd) {
                    this.sn[2 * i] = this.tn[2 * i] = this.Jd[2 * i] = t();
                    this.sn[2 * i + 1] = this.tn[2 * i + 1] = this.Jd[2 * i + 1] = t();
                    i++;
                }
                var i;
            };
            o.prototype.hj = function (t, e, i) {
                this.Fd = i;
                a = 0;
                while (a < this.Kd) {
                    this.sn[2 * a] = this.tn[2 * a];
                    this.sn[2 * a + 1] = this.tn[2 * a + 1];
                    a++;
                }
                n = t - this.tn[0];
                c = e - this.tn[1];
                this.zn(n, c, this.Kd, this.tn);
                var a;
                var n;
                var c;
            };
            o.prototype.zn = function (t, e, a, n) {
                c = i.la(t, e);
                if (!(c <= 0)) {
                    f = n[0];
                    n[0] += t;
                    d = n[1];
                    n[1] += e;
                    h = this.Id / (this.Id + c);
                    _ = 1 - 2 * h;
                    r = 1;
                    l = a - 1;
                    while (r < l) {
                        o = n[2 * r];
                        n[2 * r] = n[2 * r - 2] * _ + (o + f) * h;
                        f = o;
                        s = n[2 * r + 1];
                        n[2 * r + 1] = n[2 * r - 1] * _ + (s + d) * h;
                        d = s;
                        r++;
                    }
                    _ = 1 - 2 * (h = this.rn * this.Id / (this.rn * this.Id + c));
                    n[2 * a - 2] = n[2 * a - 4] * _ + (n[2 * a - 2] + f) * h;
                    n[2 * a - 1] = n[2 * a - 3] * _ + (n[2 * a - 1] + d) * h;
                }
                var c;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            };
            o.prototype.Oh = function () {
                return {
                    _a: this.Jd[0],
                    ab: this.Jd[1]
                };
            };
            o.prototype.dj = function (t, e) {
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
                var d;
                a = 1000000;
                n = t;
                c = e;
                o = 0;
                while (o < this.Kd) {
                    f = this.Jd[2 * o];
                    s = this.Jd[2 * o + 1];
                    d = i.la(t - f, e - s);
                    if (d < a) {
                        a = d;
                        n = f;
                        c = s;
                    }
                    o++;
                }
                return {
                    _a: n,
                    ab: c,
                    ej: a
                };
            };
            o.prototype._i = function (t) {
                this.un = t;
            };
            o.prototype.Pj = function (t, a) {
                this.Lj = i.ga(this.Lj, this.bj ? this.Fd ? 0.9 + 0.1 * i.pa(t / 400 * e.T) : 1 : 0, a, 0.00125);
                this.Ld = i.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, a, 0.0025);
                if (this.vn != null) {
                    this.vn.Yc.alpha = this.Lj;
                }
                if (this.wn != null) {
                    this.wn.alpha = this.Lj;
                }
            };
            o.prototype.Qj = function (t, e, a, n) {
                if (this.cj && this.bj) {
                    c = i.ra(0.11112, e / 95);
                    o = 0;
                    while (o < this.Kd) {
                        f = i.ka(this.sn[2 * o], this.tn[2 * o], a);
                        s = i.ka(this.sn[2 * o + 1], this.tn[2 * o + 1], a);
                        this.Jd[2 * o] = i.ka(f, this.Jd[2 * o], c);
                        this.Jd[2 * o + 1] = i.ka(s, this.Jd[2 * o + 1], c);
                        o++;
                    }
                }
                if (this.vn != null && this.cj) {
                    this.vn.Hd(this, t, e, n);
                }
                if (this.wn != null) {
                    this.wn.Rh.x = this.Jd[0];
                    this.wn.Rh.y = this.Jd[1] - 3 * this.Id;
                }
                var c;
                var o;
                var f;
                var s;
            };
            o.prototype.yn = function (t) {
                if (this.cj) {
                    if (!t) {
                        this.An();
                    }
                } else {
                    if (this.vn != null) {
                        a.k.F.G(this.vn.Yc);
                    }
                    if (this.wn != null) {
                        a.k.F.G(this.wn);
                    }
                }
            };
            o.prototype.An = function () {
                if (this.vn == null) {
                    this.vn = new t.Xc();
                } else {
                    a.k.F.G(this.vn.Yc);
                }
                this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
                if (this.wn == null) {
                    this.wn = new t.Bn("");
                    this.wn.style.fontFamily = "PTSans";
                    this.wn.anchor.set(0.5);
                } else {
                    a.k.F.G(this.wn);
                }
                this.wn.style.fontSize = 14;
                this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
                this.wn.text = this.ki.Xa;
                this.un.Xh(this.ki.Je, this.vn, this.wn);
                if (joystickState.n != null && joystickState.n.Je == this.ki.Je) {
                    {
                        joystickState.vj = this.wn;
                        let e = modState.sg.indexOf(joystickState.n.ni);
                        if (e == -1) {
                            if (modState.ig != -1) {
                                modState.ig = -1;
                            }
                        } else {
                            modState.ig = modState.gg[e].s;
                            modState.re = false;
                            iw();
                        }
                    }
                }
            };
            o.Ti = function e() {
                this.Je = 0;
                this.mi = t.dh.jh;
                this.ni = 0;
                this.Vi = 0;
                this.Wi = 0;
                this.Xi = 0;
                this.Yi = 0;
                this.Xa = "";
            };
            return o;
        }();
        t.Bn = i.ca(a.k.t, function (t, e, i) {
            a.k.t.call(this, t, e, i);
            this.Rh = {
                x: 0,
                y: 0
            };
        });
        t.Sb = function () {
            function t(t, e, i, a, n) {
                this.Tj = t;
                this.Uj = e;
                this.Vj = i;
                this.Wj = a;
                this.Xj = n;
            }
            t.prototype.Cn = function (e) {
                return new t(e, this.Uj, this.Vj, this.Wj, this.Xj);
            };
            t.prototype.Dn = function (e) {
                return new t(this.Tj, e, this.Vj, this.Wj, this.Xj);
            };
            t.prototype.En = function (e) {
                return new t(this.Tj, this.Uj, e, this.Wj, this.Xj);
            };
            t.prototype.Fn = function (e) {
                return new t(this.Tj, this.Uj, this.Vj, e, this.Xj);
            };
            t.prototype.Gn = function (e) {
                return new t(this.Tj, this.Uj, this.Vj, this.Wj, e);
            };
            return t;
        }();
        t.Bm = function () {
            var a;
            function e(e) {
                this.Hn = new t.Xc();
                this.Hn.Yc.addChild(this.Hn.Zc);
                this.In = null;
                this.Jn = null;
                this.Jm = e;
                this.$c = 0;
                this.mj = 1;
                this.Kn = 1;
                this.Ln = 1;
                this.Mn = 1;
                this.Nn = 1;
                this.On = 1;
                this.Pn = 1;
                this.Hm("#ffffff");
            }
            a = new t.Sb(0, 0, 0, 0, 0);
            e.prototype.ag = function () {
                return this.Hn.Yc;
            };
            e.prototype.Cm = function (t) {
                this.$c = t;
                if (this.Hn.$c !== t) {
                    e = t;
                    while (e < this.Hn._c.length) {
                        this.Hn._c[e].Cd();
                        e++;
                    }
                    while (this.Hn.$c > t) {
                        this.Hn.$c -= 1;
                        i = this.Hn._c[this.Hn.$c];
                        i.md.G();
                        i.ld.G();
                    }
                    while (this.Hn.$c < t) {
                        a = this.Hn._c[this.Hn.$c];
                        this.Hn.$c += 1;
                        this.Hn.Yc.addChild(a.ld.zd());
                        this.Hn.Yc.addChild(a.md.zd());
                        a.ld.Rj(this.Kn);
                        a.md.Rj(this.Ln);
                    }
                    index = 0;
                    while (index < this.Hn.Zc.od.length) {
                        this.Hn.Zc.od[index].Rj(this.Mn);
                        index++;
                    }
                    index2 = 0;
                    while (index2 < this.Hn.Zc.pd.length) {
                        this.Hn.Zc.pd[index2].Rj(this.Nn);
                        index2++;
                    }
                    index3 = 0;
                    while (index3 < this.Hn.Zc.rd.length) {
                        this.Hn.Zc.rd[index3].Rj(this.On);
                        index3++;
                    }
                    index4 = 0;
                    while (index4 < this.Hn.Zc.qd.length) {
                        this.Hn.Zc.qd[index4].Rj(this.Pn);
                        index4++;
                    }
                }
                var e;
                var i;
                var a;
                var index;
                var index2;
                var index3;
                var index4;
            };
            e.prototype.Im = function () {
                return this.$c;
            };
            e.prototype.Gm = function (t) {
                this.In = t;
                this.Jn = "#ffffff";
                this.Tm();
            };
            e.prototype.Hm = function (t) {
                this.In = a;
                this.Jn = t;
                this.Tm();
            };
            e.prototype.Tm = function () {
                this.Hn.hd(t.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
            };
            e.prototype.Dm = function (t) {
                this.mj = t;
            };
            e.prototype.Km = function () {
                return this.mj;
            };
            e.prototype.Wm = function (t, e) {
                this.Kn = t;
                this.Ln = e;
                index = 0;
                while (index < this.$c) {
                    a = this.Hn._c[index];
                    a.ld.Rj(this.Kn);
                    a.md.Rj(this.Ln);
                    index++;
                }
                var index;
                var a;
            };
            e.prototype.Zm = function (t, e, i, a) {
                this.Mn = t;
                this.Nn = e;
                this.On = i;
                this.Pn = a;
                index = 0;
                while (index < this.Hn.Zc.od.length) {
                    this.Hn.Zc.od[index].Rj(this.Mn);
                    index++;
                }
                index2 = 0;
                while (index2 < this.Hn.Zc.pd.length) {
                    this.Hn.Zc.pd[index2].Rj(this.Nn);
                    index2++;
                }
                index3 = 0;
                while (index3 < this.Hn.Zc.rd.length) {
                    this.Hn.Zc.rd[index3].Rj(this.On);
                    index3++;
                }
                index4 = 0;
                while (index4 < this.Hn.Zc.qd.length) {
                    this.Hn.Zc.qd[index4].Rj(this.Pn);
                    index4++;
                }
                var index;
                var index2;
                var index3;
                var index4;
            };
            e.prototype.Bg = function () {
                t = 2 * this.mj;
                e = 2 * this.mj * 1.5;
                if (this.$c > 0) {
                    i = this.Jm[0];
                    a = this.Jm[1];
                    n = this.Jm[2];
                    this.Hn._c[0].Ad(i, a, t, e, n);
                    this.Hn.Zc.Ad(i, a, t, n);
                }
                c = 1;
                while (c < this.$c) {
                    o = this.Jm[3 * c];
                    f = this.Jm[3 * c + 1];
                    s = this.Jm[3 * c + 2];
                    this.Hn._c[c].Ad(o, f, t, e, s);
                    c++;
                }
                var t;
                var e;
                var i;
                var a;
                var n;
                var c;
                var o;
                var f;
                var s;
            };
            e.prototype._m = function (t) {
                t.render(this.Hn.Yc);
            };
            return e;
        }();
        t.Uf = function () {
            function t(t) {
                this.Wd = t;
            }
            t.Tf = $("#background-canvas");
            t.Qn = $("#stretch-box");
            t.Sn = $("#markup-wrap");
            t.Tn = $("#game-view");
            t.Un = $("#results-view");
            t.Vn = $("#main-menu-view");
            t.Wn = $("#popup-view");
            t.Xn = $("#toaster-view");
            t.Yn = $("#loading-view");
            t.Zn = $("#restricted-view");
            t.$n = $("#error-gateway-connection-view");
            t._n = $("#error-game-connection-view");
            t.prototype.Sa = function () {
            };
            t.prototype.ml = function () {
            };
            t.prototype.nl = function () {
            };
            t.prototype.hl = function () {
            };
            t.prototype.qg = function () {
            };
            t.prototype.ug = function (t, e) {
            };
            return t;
        }();
        t.Bk = (finalCaptionElement = $("#final-caption"), finalContinueElement = $("#final-continue"), congratsBgElement = $("#congrats-bg"), finalMessageElement = $("#final-message"), finalScoreElement = $("#final-score"), finalPlaceElement = $("#final-place"), finalBoardElement = $("#final-board"), gameCanvasElement = $("#game-canvas"), (tp = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
            self = this;
            o = gameCanvasElement.get()[0];
            finalCaptionElement.text(i.U("index.game.result.title"));
            finalContinueElement.text(i.U("index.game.result.continue"));
            finalContinueElement.click(function () {
                ooo.ij.if();
                ooo.ij.Ye(t.Pe.Se.Jf);
                ooo.Xg.gl(ooo.Xg.Jf);
            });
            $("html").keydown(function (event) {
                if (!(event.keyCode === 17 && (modState.ctrl = true))) {
                    if (event.keyCode !== 17) {
                        modState.ctrl = false;
                    }
                }
                if (event.keyCode === 32) {
                    self.eo = true;
                }
            }).keyup(function (event) {
                modState.ctrl = false;
                if (joystickState.on && modState.s) {
                    if (event.keyCode == 81 || event.keyCode == 87) {
                        if (event.keyCode == 81) {
                            P.texture = F;
                            E.texture = J;
                            P.alpha = 1;
                            E.alpha = 0.25;
                            i8();
                        }
                        if (event.keyCode == 87) {
                            E.texture = G;
                            P.texture = A;
                            P.alpha = 0.25;
                            E.alpha = 1;
                            ix();
                        }
                    } else {
                        E.texture = J;
                        P.texture = A;
                        E.alpha = 0.25;
                        P.alpha = 0.25;
                        I = false;
                        X = 55;
                        M = 1;
                        z = true;
                        clearInterval(H);
                        H = null;
                    }
                    if (event.keyCode == 90) {
                        if (modState.z == 1) {
                            if (modState.h) {
                                modState.z = 1.6;
                            } else {
                                modState.z = 1.2;
                            }
                            N.texture = O;
                            N.alpha = 1;
                        } else {
                            modState.z = 1;
                            N.texture = Y;
                            N.alpha = 0.25;
                        }
                    }
                    if (modState.hz && !modState.mobile) {
                        if (event.keyCode == 188 && modState.z >= 0.2) {
                            modState.z = modState.z - 0.1;
                        }
                        if (event.keyCode == 190 && modState.z <= 25) {
                            modState.z = modState.z + 0.1;
                        }
                    }
                }
                if (joystickState.on && event.keyCode == 82) {
                    if (modState.r1) {
                        $("#port_id_s").val(modState.pi);
                        $("#port_name_s").val(modState.pn);
                        $("#port_id").val($("#port_id_s").val());
                        $("#port_name").val($("#port_name_s").val());
                        document.getElementById("mm-action-play").click();
                    } else {
                        modState.r1 = true;
                    }
                }
                if (joystickState.on && event.keyCode == 78) {
                    document.getElementById("settings-show-names-switch").click();
                    if (modState.sn) {
                        modState.sn = false;
                    } else {
                        modState.sn = true;
                    }
                }
                if (event.keyCode === 32) {
                    self.eo = false;
                }
            });
            o.addEventListener("touchmove", function (event) {
                if (joystickState.on && modState.mobile && modState.mo != 6 && modState.s) {
                    e = btoa(modState.c_1);
                    if (modState.mo1.x != -1 && modState.mo1.y == -1 && btoa(e) == modState.d_1 || modState.mo2.x == -1 && modState.mo2.y != -1 && btoa(e) == modState.d_1) {
                        i = ooo.Xg.Kf.Wg.Ah;
                        f = o.offsetHeight;
                        s = o.offsetWidth;
                        h = 0.5 * f;
                        _ = 0.5 * s;
                        r = btoa(modState.c_2);
                        {
                            let index;
                            index = 0;
                            while (index < event.changedTouches.length) {
                                p = event.changedTouches[index].pageX;
                                u = event.changedTouches[index].pageY;
                                g = event.changedTouches[index].identifier;
                                if (modState.mo == 1 && btoa(r) == modState.d_2) {
                                    f *= 0.5;
                                    s *= 0.5;
                                }
                                if (modState.mo == 2 && btoa(r) == modState.d_2) {
                                    f = i.img_o_2.y + 110;
                                    s = i.img_o_2.x + 110;
                                }
                                if (modState.mo == 3 && btoa(r) == modState.d_2) {
                                    f = i.img_o_3.y + 110;
                                    s = i.img_o_3.x + 110;
                                }
                                if (modState.mo == 4 && btoa(r) == modState.d_2 || modState.mo == 5 && btoa(r) == modState.d_2) {
                                    f = i.img_o_4.y + 110;
                                    s = i.img_o_4.x + 110;
                                }
                                m = btoa(modState.c_5);
                                v = Math.atan2(u - f, p - s);
                                y = Math.cos(v);
                                k = Math.sin(v);
                                j = btoa(modState.c_4);
                                w = modState.mo1.x == g;
                                btoa(modState.c_3);
                                if (w && btoa(j) == modState.d_4) {
                                    if (p <= 0 || u <= 0) {
                                        modState.mo1.x = -1;
                                        if (modState.mo == 1) {
                                            i.img_p_1.alpha = 0.25;
                                        }
                                        if (modState.mo == 2) {
                                            i.img_o_2.alpha = 0.25;
                                            i.img_i_2.alpha = 0.25;
                                            i.img_p_2.alpha = 0.25;
                                        }
                                        if (modState.mo == 3) {
                                            i.img_o_3.alpha = 0.25;
                                            i.img_i_3.alpha = 0.25;
                                            i.img_p_3.alpha = 0.25;
                                        }
                                        if (modState.mo == 4 || modState.mo == 5) {
                                            i.img_p_2.alpha = 0.25;
                                        }
                                    } else {
                                        self.fo = v;
                                        x = 50;
                                        if (modState.mo == 1 || modState.mo == 4 || modState.mo == 5) {
                                            x = 110;
                                        }
                                        S = s - p;
                                        q = f - u;
                                        C = Math.sqrt(S * S + q * q);
                                        U = _ + C * y - 68;
                                        H = h + C * k - 68;
                                        T = _ + x * y - 68;
                                        I = h + x * k - 68;
                                        X = _ + 75 * y - 68;
                                        M = h + 75 * k - 68;
                                        z = p - 85;
                                        W = u - 85;
                                        A = s + x * y - 85;
                                        F = f + x * k - 85;
                                        J = s + 3 * y - 110;
                                        G = f + 3 * k - 110;
                                        if (C < x) {
                                            if (modState.mo2.x == -1 && modState.mo2.y != -1) {
                                                i.img_pf_1.x = U;
                                                i.img_pf_1.y = H;
                                            } else {
                                                if (modState.mo == 1) {
                                                    i.img_p_1.x = U;
                                                    i.img_p_1.y = H;
                                                }
                                                if (modState.mo == 2 || modState.mo == 4 || modState.mo == 5) {
                                                    i.img_p_2.x = U;
                                                    i.img_p_2.y = H;
                                                }
                                                if (modState.mo == 3) {
                                                    i.img_p_3.x = U;
                                                    i.img_p_3.y = H;
                                                }
                                            }
                                            if (modState.mo == 2) {
                                                i.img_i_2.y = W;
                                                i.img_i_2.x = z;
                                            }
                                            if (modState.mo == 3) {
                                                i.img_i_3.y = W;
                                                i.img_i_3.x = z;
                                            }
                                        } else {
                                            if (modState.mo2.x == -1 && modState.mo2.y != -1) {
                                                i.img_pf_1.x = T;
                                                i.img_pf_1.y = I;
                                                if (modState.mo == 2 || modState.mo == 3) {
                                                    if (C < 75) {
                                                        i.img_pf_1.x = U;
                                                        i.img_pf_1.y = H;
                                                    } else {
                                                        i.img_pf_1.x = X;
                                                        i.img_pf_1.y = M;
                                                    }
                                                }
                                            } else {
                                                if (modState.mo == 1) {
                                                    i.img_p_1.x = T;
                                                    i.img_p_1.y = I;
                                                }
                                                if (modState.mo == 2 || modState.mo == 4 || modState.mo == 5) {
                                                    i.img_p_2.x = T;
                                                    i.img_p_2.y = I;
                                                    if (modState.mo == 2) {
                                                        if (C < 75) {
                                                            i.img_p_2.x = U;
                                                            i.img_p_2.y = H;
                                                        } else {
                                                            i.img_p_2.x = X;
                                                            i.img_p_2.y = M;
                                                        }
                                                    }
                                                }
                                                if (modState.mo == 3) {
                                                    if (C < 75) {
                                                        i.img_p_3.x = U;
                                                        i.img_p_3.y = H;
                                                    } else {
                                                        i.img_p_3.x = X;
                                                        i.img_p_3.y = M;
                                                    }
                                                }
                                            }
                                            if (modState.mo == 2) {
                                                i.img_i_2.y = F;
                                                i.img_i_2.x = A;
                                            }
                                            if (modState.mo == 3) {
                                                i.img_i_3.y = F;
                                                i.img_i_3.x = A;
                                                i.img_o_3.y = G;
                                                i.img_o_3.x = J;
                                            }
                                        }
                                    }
                                } else if ((w = modState.mo2.y == g) && btoa(m) == modState.d_5) {
                                    if (p <= 0 || u <= 0) {
                                        modState.mo2.y = -1;
                                        i.img_f.visible = false;
                                        i.img_pf_1.visible = false;
                                        if (modState.mo == 1) {
                                            i.img_p_1.visible = true;
                                        }
                                        if (modState.mo == 2 || modState.mo == 4 || modState.mo == 5) {
                                            i.img_p_2.visible = true;
                                        }
                                        if (modState.mo == 3) {
                                            i.img_p_3.visible = true;
                                        }
                                        if (modState.mo == 4 || modState.mo == 5) {
                                            i.img_f.visible = true;
                                        }
                                        self.eo = false;
                                    } else if (modState.mo == 3) {
                                        y = Math.cos(v = Math.atan2(u - (f = i.img_f.y + 100), p - (s = i.img_f.x + 100)));
                                        k = Math.sin(v);
                                        z = s + 3 * y - 100;
                                        W = f + 3 * k - 100;
                                        S = s - p;
                                        q = f - u;
                                        C = Math.sqrt(S * S + q * q);
                                        if (C >= 40) {
                                            i.img_f.y = z;
                                            i.img_f.x = W;
                                        }
                                    }
                                }
                                index++;
                            }
                        }
                    }
                } else if (!(detectMobile() && modState.joystick.checked)) {
                    if (event = event || window.event) {
                        if ((event = event.touches[0]).clientX !== undefined) {
                            self.fo = Math.atan2(event.clientY - 0.5 * o.offsetHeight, event.clientX - 0.5 * o.offsetWidth);
                        } else {
                            self.fo = Math.atan2(event.pageY - 0.5 * o.offsetHeight, event.pageX - 0.5 * o.offsetWidth);
                        }
                    }
                }
                var e;
                var i;
                var f;
                var s;
                var h;
                var _;
                var r;
                var p;
                var u;
                var g;
                var m;
                var v;
                var y;
                var k;
                var j;
                var w;
                var x;
                var S;
                var q;
                var C;
                var U;
                var H;
                var T;
                var I;
                var X;
                var M;
                var z;
                var W;
                var A;
                var F;
                var J;
                var G;
                var z;
                var W;
                var S;
                var q;
                var C;
            }, true);
            o.addEventListener("touchstart", function (event) {
                if (joystickState.on && modState.mobile && modState.mo != 6 && modState.s) {
                    e = ooo.Xg.Kf.Wg.Ah;
                    i = btoa(modState.c_4);
                    f = o.offsetHeight;
                    s = btoa(modState.c_3);
                    d = o.offsetWidth;
                    h = btoa(modState.c_5);
                    _ = (event = event || window.event).touches.item(0).pageX;
                    r = btoa(modState.c_2);
                    l = event.touches.item(0).pageY;
                    p = event.touches.length;
                    u = btoa(modState.c_1);
                    g = event.touches.item(0).identifier;
                    {
                        let m;
                        m = 0;
                        while (m < p) {
                            if (modState.mo2.x == -1 && modState.mo2.y != -1) {
                                if (event.touches.item(m).identifier != modState.mo2.y) {
                                    _ = event.touches.item(m).pageX;
                                    l = event.touches.item(m).pageY;
                                    g = event.touches.item(m).identifier;
                                }
                            } else {
                                _ = event.touches.item(m).pageX;
                                l = event.touches.item(m).pageY;
                                g = event.touches.item(m).identifier;
                            }
                            m++;
                        }
                    }
                    v = 0;
                    if (modState.mo == 4 && btoa(h) == modState.d_5 || modState.mo == 5 && btoa(i) == modState.d_4) {
                        v = Math.sqrt((_ - e.img_f.x - 100) * (_ - e.img_f.x - 100) + (l - e.img_f.y - 100) * (l - e.img_f.y - 100));
                    }
                    if (p == 1 && (modState.mo == 4 && v > 40 || modState.mo != 4) && (modState.mo == 5 && v > 40 || modState.mo != 5)) {
                        modState.mo2.y = -1;
                        e.img_f.visible = false;
                        e.img_pf_1.visible = false;
                        if (modState.mo == 1) {
                            e.img_p_1.alpha = 0.25;
                            e.img_p_1.visible = true;
                        }
                        if (modState.mo == 2) {
                            e.img_o_2.alpha = 0.25;
                            e.img_i_2.alpha = 0.25;
                            e.img_p_2.alpha = 0.25;
                            e.img_p_2.visible = true;
                        }
                        if (modState.mo == 3) {
                            e.img_o_3.alpha = 0.25;
                            e.img_i_3.alpha = 0.25;
                            e.img_p_3.alpha = 0.25;
                            e.img_p_3.visible = true;
                        }
                        if (modState.mo == 4 || modState.mo == 5) {
                            e.img_p_2.alpha = 0.25;
                            e.img_p_2.visible = true;
                            e.img_f.visible = true;
                        }
                        self.eo = false;
                    }
                    if (modState.mo1.x == -1 && modState.mo1.y == -1 && btoa(i) == modState.d_4 && (modState.mo == 4 && v > 40 || modState.mo != 4 && btoa(s) == modState.d_3) && (modState.mo == 5 && v > 40 || modState.mo != 5 && btoa(r) == modState.d_2)) {
                        modState.mo1.x = g;
                        if (modState.mo1.x == modState.mo2.y && modState.mo1.y == modState.mo2.x) {
                            _ = event.touches.item(1).pageX;
                            l = event.touches.item(1).pageY;
                        }
                        y = 0.5 * d - 68;
                        k = 0.5 * f - 68;
                        j = _ - 110;
                        w = l - 110;
                        x = _ - 85;
                        S = l - 85;
                        if (modState.mo == 1 && modState.mo2.x == -1 && modState.mo2.y == -1) {
                            e.img_p_1.alpha = 1;
                            e.img_p_1.x = y;
                            e.img_p_1.y = k;
                            e.img_p_1.visible = true;
                        }
                        if (modState.mo == 2) {
                            e.img_o_2.alpha = 1;
                            e.img_o_2.x = j;
                            e.img_o_2.y = w;
                            e.img_i_2.alpha = 1;
                            e.img_i_2.x = x;
                            e.img_i_2.y = S;
                            if (modState.mo2.x == -1 && modState.mo2.y == -1) {
                                e.img_p_2.alpha = 1;
                                e.img_p_2.x = y;
                                e.img_p_2.y = k;
                                e.img_p_2.visible = true;
                            }
                        }
                        if (modState.mo == 3 && btoa(h) == modState.d_5) {
                            e.img_o_3.alpha = 1;
                            e.img_o_3.x = j;
                            e.img_o_3.y = w;
                            e.img_i_3.alpha = 1;
                            e.img_i_3.x = x;
                            e.img_i_3.y = S;
                            if (modState.mo2.x == -1 && modState.mo2.y == -1) {
                                e.img_p_3.alpha = 1;
                                e.img_p_3.x = y;
                                e.img_p_3.y = k;
                                e.img_p_3.visible = true;
                            }
                        }
                        if (modState.mo == 4 && btoa(r) == modState.d_2 && modState.mo2.x == -1 && modState.mo2.y == -1) {
                            e.img_p_2.alpha = 1;
                            e.img_p_2.x = y;
                            e.img_p_2.y = k;
                            e.img_p_2.visible = true;
                        }
                        if (modState.mo == 5 && btoa(s) == modState.d_3 && modState.mo2.x == -1 && modState.mo2.y == -1) {
                            e.img_p_2.alpha = 1;
                            e.img_p_2.x = y;
                            e.img_p_2.y = k;
                            e.img_p_2.visible = true;
                        }
                    } else if (p >= 2 && modState.mo2.x == -1 && modState.mo2.y == -1 && btoa(s) == modState.d_3 || p == 1 && modState.mo == 4 && v <= 40 && btoa(u) == modState.d_1 || p == 1 && modState.mo == 5 && v <= 40 && btoa(r) == modState.d_2) {
                        modState.mo2.y = g;
                        e.img_f.visible = true;
                        e.img_pf_1.visible = true;
                        if (modState.mo == 1) {
                            e.img_p_1.visible = false;
                            e.img_pf_1.x = e.img_p_1.x;
                            e.img_pf_1.y = e.img_p_1.y;
                        }
                        if (modState.mo == 2 || modState.mo == 4 || modState.mo == 5) {
                            e.img_p_2.visible = false;
                            e.img_pf_1.x = e.img_p_2.x;
                            e.img_pf_1.y = e.img_p_2.y;
                        }
                        if (modState.mo == 3 && btoa(s) == modState.d_3) {
                            e.img_p_3.visible = false;
                            e.img_pf_1.x = e.img_p_3.x;
                            e.img_pf_1.y = e.img_p_3.y;
                        }
                        if (modState.mo != 4 && modState.mo != 5) {
                            e.img_f.x = _ - 100;
                            e.img_f.y = l - 100;
                        }
                        self.eo = true;
                    }
                    event.preventDefault();
                } else {
                    if (event = event || window.event) {
                        self.eo = event.touches.length >= 2;
                    }
                    event.preventDefault();
                }
                var e;
                var i;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
                var p;
                var u;
                var g;
                var v;
                var y;
                var k;
                var j;
                var w;
                var x;
                var S;
            }, true);
            o.addEventListener("touchend", function (event) {
                if (joystickState.on && modState.mobile && modState.mo != 6 && modState.s) {
                    e = ooo.Xg.Kf.Wg.Ah;
                    i = btoa(modState.c_1);
                    if (event = event || window.event) {
                        if ((event = event.changedTouches[0]).clientX !== undefined) {
                            iT(event.clientX, event.clientY);
                        } else {
                            iT(event.pageX, event.pageY);
                        }
                    }
                    o = btoa(modState.c_2);
                    f = event.identifier;
                    if (f == modState.mo1.x && modState.mo1.y == -1 && btoa(o) == modState.d_2) {
                        modState.mo1.x = -1;
                        if (modState.mo == 1) {
                            e.img_p_1.alpha = 0.25;
                        }
                        if (modState.mo == 2) {
                            e.img_o_2.alpha = 0.25;
                            e.img_i_2.alpha = 0.25;
                            e.img_p_2.alpha = 0.25;
                        }
                        if (modState.mo == 3 && btoa(i) == modState.d_1) {
                            e.img_o_3.alpha = 0.25;
                            e.img_i_3.alpha = 0.25;
                            e.img_p_3.alpha = 0.25;
                        }
                        if (modState.mo == 4) {
                            e.img_p_2.alpha = 0.25;
                        }
                        if (modState.mo == 5) {
                            e.img_p_2.alpha = 0.25;
                        }
                    }
                    s = btoa(modState.c_3);
                    if (modState.mo2.x == -1 && f == modState.mo2.y && btoa(s) == modState.d_3) {
                        modState.mo2.y = -1;
                        e.img_f.visible = false;
                        e.img_pf_1.visible = false;
                        if (modState.mo == 1) {
                            e.img_p_1.visible = true;
                        }
                        if (modState.mo == 2 || modState.mo == 4 && btoa(o) == modState.d_2 || modState.mo == 5 && btoa(s) == modState.d_3) {
                            e.img_p_2.visible = true;
                        }
                        if (modState.mo == 3) {
                            e.img_p_3.visible = true;
                        }
                        if (modState.mo == 4 || modState.mo == 5) {
                            e.img_f.visible = true;
                        }
                        self.eo = false;
                    }
                } else {
                    if (event = event || window.event) {
                        self.eo = event.touches.length >= 2;
                    }
                    if (modState.mobile && modState.s && (event = event || window.event)) {
                        if ((event = event.changedTouches[0]).clientX !== undefined) {
                            iT(event.clientX, event.clientY);
                        } else {
                            iT(event.pageX, event.pageY);
                        }
                    }
                }
                var e;
                var i;
                var o;
                var f;
                var s;
            }, true);
            o.addEventListener("mousemove", function (e) {
                if (e = e || t.c.event && _typeof(e.clientX) != "undefined") {
                    self.fo = i.ta(e.clientY - 0.5 * o.offsetHeight, e.clientX - 0.5 * o.offsetWidth);
                }
            }, true);
            o.addEventListener("mousedown", function (t) {
                self.eo = true;
            }, true);
            o.addEventListener("mouseup", function (t) {
                self.eo = false;
            }, true);
            this.Wg = new t.lh(gameCanvasElement);
            this.go = tb.ho;
            this.fo = 0;
            this.eo = false;
            joystickState.eie = self;
            var self;
            var o;
        })).prototype.Sa = function () {
        }, tp.prototype.ml = function () {
            t.Nf.rg(false);
            a.f.h(t.Uf.Tf, 50);
            a.f.h(t.Uf.Qn, 1);
            a.f.h(t.Uf.Sn, 50);
            a.f.g(t.Uf.Tn, 500);
            if (this.go === tb.ho) {
                a.f.h(t.Uf.Un, 1);
            } else {
                a.f.g(t.Uf.Un, 500);
            }
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.h(t.Uf.Yn, 50);
            a.f.h(t.Uf.Zn, 50);
            a.f.h(t.Uf.$n, 50);
            a.f.h(t.Uf._n, 50);
        }, tp.prototype.ho = function () {
            this.go = tb.ho;
            return this;
        }, tp.prototype.io = function () {
            a.f.h(congratsBgElement, 1);
            i.Y(function () {
                a.f.g(congratsBgElement, 500);
            }, 3000);
            this.go = tb.io;
            return this;
        }, tp.prototype.nl = function () {
            this.eo = false;
            this.Wg.qg();
            if (this.go === tb.io) {
                ooo.ij.mf();
            }
        }, tp.prototype.qg = function () {
            this.Wg.qg();
        }, tp.prototype.ug = function (t, e) {
            this.Wg.ug(t, e);
        }, tp.prototype.jo = function (t, a, n) {
            if (a >= 1 && a <= 10) {
                c = i.U("index.game.result.place.i" + a);
                o = i.U("index.game.result.placeInBoard");
            } else {
                c = "";
                o = i.U("index.game.result.tryHit");
            }
            finalMessageElement.html(i.U("index.game.result.your"));
            finalScoreElement.html(t);
            finalPlaceElement.html(c);
            finalBoardElement.html(o);
            var c;
            var o;
            var u;
        }, tp.prototype.ko = function () {
            return this.fo;
        }, tp.prototype.lo = function () {
            return this.eo;
        }, tb = {
            ho: 0,
            io: 1
        }, tp);
        t.$k = (loadingProgressContElement = $("#loading-progress-cont"), loadingProgressBarElement = $("#loading-progress-bar"), loadingProgressTextElement = $("#loading-progress-text"), (t4 = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
            this.mo = -1;
            this.no = "";
        })).prototype.Sa = function () {
        }, t4.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 500);
            a.f.g(t.Uf.Qn, 1);
            a.f.h(t.Uf.Sn, 50);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.g(t.Uf.Yn, 500);
            a.f.h(t.Uf.Zn, 50);
            a.f.h(t.Uf.$n, 50);
            a.f.h(t.Uf._n, 50);
        }, t4.prototype.nl = function () {
            ooo.ij.Ye(t.Pe.Se.Re);
            ooo.Xg.Ak.wg();
            ooo.Xg.Ak.sg(true);
        }, t4.prototype.hl = function () {
            ooo.Xg.Ak.sg(false);
        }, t4.prototype.oo = function () {
            this.po("", 0);
            a.f.g(loadingProgressContElement, 100);
        }, t4.prototype.qo = function () {
            a.f.h(loadingProgressContElement, 100);
        }, t4.prototype.po = function (t, e) {
            if (this.no !== t) {
                this.no = t;
            }
            a = i.fa(i._(100 * e), 0, 100);
            if (this.mo !== a) {
                loadingProgressBarElement.css("width", a + "%");
                loadingProgressTextElement.html(a + " %");
            }
            var a;
        }, t4);
        t.Ck = (mmLineTopElement = $("#mm-line-top"), t7 = ($("#mm-line-center"), $("#mm-line-bottom"), $("#mm-bottom-buttons")), mmMenuContElement = $("#mm-menu-cont"), mmLoadingElement = $("#mm-loading"), mmLoadingProgressBarElement = $("#mm-loading-progress-bar"), mmLoadingProgressTextElement = $("#mm-loading-progress-text"), t8 = ($("#mm-event-text"), $("#mm-skin-canv")), mmSkinPrevElement = $("#mm-skin-prev"), mmSkinNextElement = $("#mm-skin-next"), mmSkinOverElement = $("#mm-skin-over"), mmSkinOverButtonListElement = $("#mm-skin-over-button-list"), mmParamsNicknameElement = $("#mm-params-nickname"), mmParamsGameModeElement2 = $("#mm-params-game-mode"), mmActionPlayElement = $("#mm-action-play"), mmActionGuestElement = $("#mm-action-guest"), mmActionLoginElement = $("#mm-action-login"), mmPlayerInfoElement = $("#mm-player-info"), mmStoreElement = $("#mm-store"), mmLeadersElement = $("#mm-leaders"), mmSettingsElement = $("#mm-settings"), mmCoinsBoxElement = $("#mm-coins-box"), mmPlayerAvatarElement = $("#mm-player-avatar"), mmPlayerUsernameElement = $("#mm-player-username"), mmCoinsValElement = $("#mm-coins-val"), mmPlayerExpBarElement = $("#mm-player-exp-bar"), mmPlayerExpValElement = $("#mm-player-exp-val"), mmPlayerLevelElement = $("#mm-player-level"), (tY = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.kl);
            this.mo = -1;
            this.no = "";
            this.ro = new t.Lm(t8);
            mmParamsGameModeElement2.click(function () {
                ooo.ij.if();
            });
            t8.click(function () {
                if (ooo.ok.nk()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Qk);
                }
            });
            mmSkinPrevElement.click(function () {
                ooo.ij.if();
                ooo.so.kk();
            });
            mmSkinNextElement.click(function () {
                ooo.ij.if();
                ooo.so.jk();
            });
            mmParamsNicknameElement.keypress(function (event) {
                modState.r1 = false;
                if (event.keyCode === 13) {
                    ooo.to();
                }
            });
            mmActionPlayElement.click(function () {
                ooo.ij.if();
                ooo.to();
            });
            mmActionGuestElement.click(function () {
                ooo.ij.if();
                ooo.to();
            });
            mmActionLoginElement.click(function () {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Nk);
            });
            mmSettingsElement.click(function () {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Hi);
            });
            mmPlayerInfoElement.click(function () {
                if (ooo.ok.nk()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Lk);
                }
            });
            mmLeadersElement.click(function () {
                if (ooo.ok.nk()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Jk);
                }
            });
            mmStoreElement.click(function () {
                if (ooo.ok.nk()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Sk);
                }
            });
            mmCoinsBoxElement.click(function () {
                if (ooo.ok.nk()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Hk);
                }
            });
            this.uo();
            e = t.Cg.Og(t.Cg.Ig);
            if (e !== "ARENA" && e !== "TEAM2") {
                e = "ARENA";
            }
            mmParamsGameModeElement2.val(e);
            var e;
        })).prototype.Sa = function () {
            self = this;
            n = function (t, e) {
                if (t.pm) {
                    e.skinId = t.pm.Tj;
                    e.eyesId = t.pm.Uj;
                    e.mouthId = t.pm.Vj;
                    e.hatId = t.pm.Wj;
                    e.glassesId = t.pm.Xj;
                }
            };
            ooo.ok.fm(function () {
                if (ooo.ok.nk()) {
                    n(modState, ooo.ok.xl);
                    ooo.so.lk(ooo.ok.Ul(), t._j.$j);
                    ooo.so.lk(ooo.ok.Vl(), t._j.ak);
                    ooo.so.lk(ooo.ok.Wl(), t._j.bk);
                    ooo.so.lk(ooo.ok.Xl(), t._j.dk);
                    ooo.so.lk(ooo.ok.Yl(), t._j.ck);
                } else {
                    ooo.so.lk(ooo.wo(), t._j.$j);
                    ooo.so.lk(0, t._j.ak);
                    ooo.so.lk(0, t._j.bk);
                    ooo.so.lk(0, t._j.dk);
                    ooo.so.lk(0, t._j.ck);
                }
            });
            ooo.ok.fm(function () {
                mmActionPlayElement.toggle(ooo.ok.nk());
                mmActionLoginElement.toggle(!ooo.ok.nk());
                mmActionGuestElement.toggle(!ooo.ok.nk());
                mmLeadersElement.toggle(ooo.ok.nk());
                mmStoreElement.toggle(ooo.ok.nk());
                mmCoinsBoxElement.toggle(ooo.ok.nk());
                mmPlayerInfoElement.toggle(true);
                mmSettingsElement.toggle(true);
                if (ooo.ok.nk()) {
                    mmSkinOverElement.hide();
                    mmPlayerUsernameElement.html(ooo.ok.Ll());
                    mmPlayerAvatarElement.attr("src", ooo.ok.Nl());
                    mmCoinsValElement.html(ooo.ok.Ql());
                    mmPlayerExpBarElement.width(100 * ooo.ok.Sl() / ooo.ok.Tl() + "%");
                    mmPlayerExpValElement.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
                    mmPlayerLevelElement.html(ooo.ok.Rl());
                    mmParamsNicknameElement.val(ooo.ok.Ml());
                } else {
                    mmSkinOverElement.toggle(e.co.bo && !ooo.xo());
                    mmPlayerUsernameElement.html(mmPlayerUsernameElement.data("guest"));
                    mmPlayerAvatarElement.attr("src", e.H.M);
                    mmCoinsValElement.html("10");
                    mmPlayerExpBarElement.width("0");
                    mmPlayerExpValElement.html("");
                    mmPlayerLevelElement.html(1);
                    mmParamsNicknameElement.val(t.Cg.Og(t.Cg.Jg));
                }
            });
            ooo.so.fk(function () {
                self.ro.Gm(ooo.so.ek());
            });
            var self;
            var n;
        }, tY.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 500);
            a.f.g(t.Uf.Qn, 1);
            a.f.g(t.Uf.Sn, 500);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.g(t.Uf.Vn, 500);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.h(t.Uf.Yn, 50);
            a.f.h(t.Uf.Zn, 50);
            a.f.h(t.Uf.$n, 50);
            a.f.h(t.Uf._n, 50);
        }, tY.prototype.yo = function () {
            a.f.g(mmLineTopElement, 500);
            a.f.g(t7, 500);
            a.f.g(mmMenuContElement, 500);
            a.f.h(mmLoadingElement, 100);
        }, tY.prototype.zo = function () {
            a.f.h(mmLineTopElement, 100);
            a.f.h(t7, 100);
            a.f.h(mmMenuContElement, 100);
            a.f.g(mmLoadingElement, 500);
        }, tY.prototype.po = function (t, e) {
            if (this.no !== t) {
                this.no = t;
            }
            a = i.fa(i._(100 * e), 0, 100);
            if (this.mo !== a) {
                mmLoadingProgressBarElement.css("width", a + "%");
                mmLoadingProgressTextElement.html(a + " %");
            }
            var a;
        }, tY.prototype.nl = function () {
            ooo.ij.jf();
            this.ro.rg(true);
        }, tY.prototype.hl = function () {
            this.ro.rg(false);
        }, tY.prototype.qg = function () {
            this.ro.qg();
        }, tY.prototype.ug = function (t, e) {
            this.ro.ug();
        }, tY.prototype.Ml = function () {
            return mmParamsNicknameElement.val();
        }, tY.prototype.Ao = function () {
            return mmParamsGameModeElement2.val();
        }, tY.prototype.uo = function () {
            t = $("#mm-advice-cont").children();
            e = 0;
            i.X(function () {
                t.eq(e).fadeOut(500, function () {
                    if (++e >= t.length) {
                        e = 0;
                    }
                    t.eq(e).fadeIn(500).css("display", "inline-block");
                });
            }, 3000);
            var t;
            var e;
        }, tY);
        t.el = ((tO = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
        })).prototype.Sa = function () {
        }, tO.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.h(t.Uf.Tf, 50);
            a.f.h(t.Uf.Qn, 1);
            a.f.h(t.Uf.Sn, 50);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.h(t.Uf.Yn, 50);
            a.f.h(t.Uf.Zn, 50);
            a.f.h(t.Uf.$n, 50);
            a.f.h(t.Uf._n, 50);
        }, tO);
        t.Xk = ((tR = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
        })).prototype.Sa = function () {
        }, tR.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 500);
            a.f.g(t.Uf.Qn, 1);
            a.f.h(t.Uf.Sn, 50);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.h(t.Uf.Yn, 50);
            a.f.g(t.Uf.Zn, 500);
            a.f.h(t.Uf.$n, 50);
            a.f.h(t.Uf._n, 50);
        }, tR.prototype.nl = function () {
        }, tR);
        t.Zk = (toasterStackElement = $("#toaster-stack"), (tP = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
            this.Co = [];
            this.Do = null;
        })).prototype.Sa = function () {
        }, tP.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 500);
            a.f.g(t.Uf.Qn, 1);
            a.f.g(t.Uf.Sn, 500);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.g(t.Uf.Xn, 500);
            a.f.h(t.Uf.Yn, 50);
            a.f.h(t.Uf.Zn, 50);
            a.f.h(t.Uf.$n, 50);
            a.f.h(t.Uf._n, 50);
        }, tP.prototype.nl = function () {
            this.Eo();
        }, tP.prototype.ql = function () {
            return this.Do != null || this.Co.length > 0;
        }, tP.prototype.Fo = function (t) {
            this.Co.unshift(t);
            i.Y(function () {
                ooo.Xg.ol();
            }, 0);
        }, tP.prototype.km = function (t) {
            this.Co.push(t);
            i.Y(function () {
                ooo.Xg.ol();
            }, 0);
        }, tP.prototype.Eo = function () {
            self = this;
            if (this.Do == null) {
                if (this.Co.length === 0) {
                    ooo.Xg.jl();
                    return;
                }
                e = this.Co.shift();
                this.Do = e;
                n = e.ag();
                a.f.g(n, 300);
                toasterStackElement.append(n);
                e.Go = function () {
                    n.fadeOut(300);
                    i.Y(function () {
                        n.remove();
                    }, 300);
                    if (self.Do === e) {
                        self.Do = null;
                    }
                    self.Eo();
                };
                e.nl();
            }
            var self;
            var e;
            var n;
        }, tP);
        t.ll = {
            ao: 0,
            kl: 1
        };
        t.Ho = (popupMenuLabelElement = $("#popup-menu-label"), popupMenuCoinsBoxElement = $("#popup-menu-coins-box"), popupMenuCoinsValElement = $("#popup-menu-coins-val"), $("#popup-menu-back").click(function () {
            ooo.ij.if();
            ooo.Xg.jl();
        }), popupMenuCoinsBoxElement.click(function () {
            if (ooo.ok.nk()) {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Hk);
            }
        }), (tK = i.ca(t.Uf, function (e, i) {
            t.Uf.call(this, t.ll.kl);
            this.Xa = e;
            this.Io = i;
            this.Jo = [];
        })).prototype.Sa = function () {
            tK.parent.prototype.Sa.call(this);
            if (!tK.Ko) {
                tK.Ko = true;
                ooo.ok.fm(function () {
                    if (ooo.ok.nk()) {
                        popupMenuCoinsValElement.html(ooo.ok.Ql());
                    } else {
                        popupMenuCoinsValElement.html("0");
                    }
                });
            }
            a.f.h(t.Ho.Lo, 100);
        }, tK.Mo = $("#coins-view"), tK.No = $("#leaders-view"), tK.Oo = $("#profile-view"), tK.Po = $("#login-view"), tK.Qo = $("#settings-view"), tK.Ro = $("#skins-view"), tK.So = $("#store-view"), tK.To = $("#wear-view"), tK.Uo = $("#withdraw-consent-view"), tK.Vo = $("#delete-account-view"), tK.Lo = $("#please-wait-view"), tK.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 1);
            a.f.g(t.Uf.Qn, 500);
            a.f.g(t.Uf.Sn, 200);
            a.f.h(t.Uf.Tn, 200);
            a.f.h(t.Uf.Un, 200);
            a.f.h(t.Uf.Vn, 200);
            a.f.g(t.Uf.Wn, 200);
            a.f.h(t.Uf.Xn, 200);
            a.f.h(t.Uf.Yn, 200);
            a.f.h(t.Uf.Zn, 200);
            a.f.h(t.Uf.$n, 200);
            a.f.h(t.Uf._n, 200);
            popupMenuLabelElement.html(this.Xa);
            popupMenuCoinsBoxElement.toggle(this.Io);
            this.Wo();
        }, tK.prototype.Wo = function () {
        }, tK.prototype.Xo = function (e) {
            var self;
            var c;
            self = this;
            c = 2147483647 & i.va(0, 2147483647);
            this.Jo.push(c);
            a.f.g(t.Ho.Lo, 100);
            i.Y(function () {
                self.Yo(c);
            }, e);
            return new i6(this, c);
        }, tK.prototype.Yo = function (e) {
            i = this.Jo.indexOf(e);
            if (!(i < 0)) {
                this.Jo.splice(i, 1);
                if (this.Jo.length === 0) {
                    a.f.h(t.Ho.Lo, 100);
                }
            }
            var i;
        }, tK);
        i6 = function () {
            function t(t, e) {
                this.Zo = t;
                this.$o = e;
            }
            t.prototype._o = function () {
                this.Zo.Yo(this.$o);
            };
            return t;
        }();
        t.Ik = (storeBuyCoins125000Element = $("#store-buy-coins_125000"), storeBuyCoins50000Element = $("#store-buy-coins_50000"), storeBuyCoins16000Element = $("#store-buy-coins_16000"), storeBuyCoins7000Element = $("#store-buy-coins_7000"), storeBuyCoins3250Element = $("#store-buy-coins_3250"), storeBuyCoins1250Element = $("#store-buy-coins_1250"), (ee = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.coins.tab"), false);
            self = this;
            storeBuyCoins125000Element.click(function () {
                ooo.ij.if();
                self.ap("coins_125000");
            });
            storeBuyCoins50000Element.click(function () {
                ooo.ij.if();
                self.ap("coins_50000");
            });
            storeBuyCoins16000Element.click(function () {
                ooo.ij.if();
                self.ap("coins_16000");
            });
            storeBuyCoins7000Element.click(function () {
                ooo.ij.if();
                self.ap("coins_7000");
            });
            storeBuyCoins3250Element.click(function () {
                ooo.ij.if();
                self.ap("coins_3250");
            });
            storeBuyCoins1250Element.click(function () {
                ooo.ij.if();
                self.ap("coins_1250");
            });
            var self;
        })).prototype.Sa = function () {
            ee.parent.prototype.Sa.call(this);
        }, ee.prototype.Wo = function () {
            a.f.g(t.Ho.Mo, 200);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, ee.prototype.nl = function () {
            ooo.ij.jf();
        }, ee.prototype.ap = function (t) {
        }, ee);
        t.Kk = (highscoreTableElement = $("#highscore-table"), leadersButtonLevelElement = $("#leaders-button-level"), leadersButtonHighscoreElement = $("#leaders-button-highscore"), leadersButtonKillsElement = $("#leaders-button-kills"), eo = "byLevel", ef = "byHighScore", e$ = "byKillsAndHeadShots", (es = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.leaders.tab"), true);
            self = this;
            this.bp = {};
            this.cp = {
                dp: {
                    ep: leadersButtonLevelElement,
                    fp: eo
                },
                gp: {
                    ep: leadersButtonHighscoreElement,
                    fp: ef
                },
                hp: {
                    ep: leadersButtonKillsElement,
                    fp: e$
                }
            };
            leadersButtonLevelElement.click(function () {
                ooo.ij.if();
                self.ip(self.cp.dp);
            });
            leadersButtonHighscoreElement.click(function () {
                ooo.ij.if();
                self.ip(self.cp.gp);
            });
            leadersButtonKillsElement.click(function () {
                ooo.ij.if();
                self.ip(self.cp.hp);
            });
            var self;
        })).prototype.Sa = function () {
            es.parent.prototype.Sa.call(this);
        }, es.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.g(t.Ho.No, 200);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, es.prototype.nl = function () {
            self = this;
            ooo.ij.jf();
            a = this.Xo(5000);
            n = e.H.J + "/pub/leaders";
            i.Aa(n, function () {
                e = {};
                e[eo] = [];
                e[ef] = [];
                e[e$] = [];
                self.bp = e;
                self.ip(self.jp != null ? self.jp : self.cp.dp);
                a._o();
                var e;
            }, function (e) {
                self.bp = e;
                self.ip(self.jp != null ? self.jp : self.cp.dp);
                a._o();
            });
            var self;
            var a;
            var n;
        }, es.prototype.ip = function (t) {
            for (var e in (this.jp = t, this.cp)) {
                if (this.cp.hasOwnProperty(e)) {
                    this.cp[e].ep.removeClass("pressed");
                }
            }
            this.jp.ep.addClass("pressed");
            a = this.bp[this.jp.fp];
            n = "";
            index = 0;
            while (index < a.length) {
                o = a[index];
                n += "<div class=\"table-row\"><span>".concat(index + 1, "</span><span><img src=\"").concat(o.avatarUrl, "\"/></span><span>").concat(o.username, "</span><span>").concat(o.level, "</span><span>").concat(o.highScore, "</span><span>").concat(o.headShots, " / ").concat(o.kills, "</span></div>");
                index++;
            }
            highscoreTableElement.empty();
            highscoreTableElement.append(n);
            var a;
            var n;
            var index;
            var o;
        }, es);
        t.Ok = (popupLoginGgElement = $("#popup-login-gg"), popupLoginFbElement = $("#popup-login-fb"), (e_ = i.ca(t.Ho, function () {
            self = this;
            t.Ho.call(this, i.U("index.game.popup.menu.login.tab"), false);
            popupLoginGgElement.click(function () {
                ooo.ij.if();
                t = self.Xo(10000);
                i.Y(function () {
                    ooo.ok.sm(function () {
                        if (ooo.ok.nk()) {
                            ooo.ij.mf();
                        }
                        t._o();
                    });
                }, 500);
                var t;
            });
            popupLoginFbElement.click(function () {
                ooo.ij.if();
                t = self.Xo(10000);
                i.Y(function () {
                    ooo.ok.pm(function () {
                        if (ooo.ok.nk()) {
                            ooo.ij.mf();
                        }
                        t._o();
                    });
                }, 500);
                var t;
            });
            var self;
        })).prototype.Sa = function () {
            e_.parent.prototype.Sa.call(this);
        }, e_.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.g(t.Ho.Po, 200);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, e_.prototype.nl = function () {
            ooo.ij.jf();
        }, e_);
        t.Mk = (profileAvatarElement = $("#profile-avatar"), profileUsernameElement = $("#profile-username"), profileExperienceBarElement = $("#profile-experience-bar"), profileExperienceValElement = $("#profile-experience-val"), profileLevelElement = $("#profile-level"), profileStatHighScoreElement = $("#profile-stat-highScore"), profileStatBestSurvivalTimeElement = $("#profile-stat-bestSurvivalTime"), profileStatKillsElement = $("#profile-stat-kills"), profileStatHeadshotsElement = $("#profile-stat-headshots"), profileStatGamesPlayedElement = $("#profile-stat-gamesPlayed"), profileStatTotalTimeSpentElement = $("#profile-stat-totalTimeSpent"), profileStatRegistrationDateElement = $("#profile-stat-registrationDate"), (e6 = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.profile.tab"), true);
        })).prototype.Sa = function () {
            e6.parent.prototype.Sa.call(this);
        }, e6.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.g(t.Ho.Oo, 200);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, e6.prototype.nl = function () {
            ooo.ij.jf();
            t = ooo.ok.dm();
            e = moment([
                t.year,
                t.month - 1,
                t.day
            ]).format("LL");
            profileUsernameElement.html(ooo.ok.Ll());
            profileAvatarElement.attr("src", ooo.ok.Nl());
            profileExperienceBarElement.width(100 * ooo.ok.Sl() / ooo.ok.Tl() + "%");
            profileExperienceValElement.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
            profileLevelElement.html(ooo.ok.Rl());
            profileStatHighScoreElement.html(ooo.ok.Zl());
            profileStatBestSurvivalTimeElement.html(i.$(ooo.ok.$l()));
            profileStatKillsElement.html(ooo.ok._l());
            profileStatHeadshotsElement.html(ooo.ok.am());
            profileStatGamesPlayedElement.html(ooo.ok.bm());
            profileStatTotalTimeSpentElement.html(i.$(ooo.ok.cm()));
            profileStatRegistrationDateElement.html(e);
            var t;
            var e;
        }, e6);
        t.Pk = (settingsMusicEnabledSwitchElement = $("#settings-music-enabled-switch"), settingsSfxEnabledSwitchElement = $("#settings-sfx-enabled-switch"), settingsShowNamesSwitchElement = $("#settings-show-names-switch"), popupLogoutElement = $("#popup-logout"), popupLogoutContainerElement = $("#popup-logout-container"), popupDeleteAccountElement = $("#popup-delete-account"), popupDeleteAccountContainerElement = $("#popup-delete-account-container"), popupWithdrawConsentElement = $("#popup-withdraw-consent"), (ex = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.settings.tab"), false);
            self = this;
            settingsMusicEnabledSwitchElement.click(function () {
                e = !!settingsMusicEnabledSwitchElement.prop("checked");
                t.Cg.Ng(t.Cg.Fg, e, 30);
                ooo.ij.$e(e);
                ooo.ij.if();
                var e;
            });
            settingsSfxEnabledSwitchElement.click(function () {
                e = !!settingsSfxEnabledSwitchElement.prop("checked");
                t.Cg.Ng(t.Cg.Gg, e, 30);
                ooo.ij.Xe(e);
                ooo.ij.if();
                var e;
            });
            settingsShowNamesSwitchElement.click(function () {
                ooo.ij.if();
            });
            popupLogoutElement.click(function () {
                ooo.ij.if();
                self.Xo(500);
                ooo.ok.qm();
            });
            popupDeleteAccountElement.click(function () {
                if (ooo.ok.nk()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Fk);
                } else {
                    ooo.ij.nf();
                }
            });
            popupWithdrawConsentElement.click(function () {
                if (ooo.kp()) {
                    ooo.ij.if();
                    ooo.Xg.gl(ooo.Xg.Dk);
                } else {
                    ooo.ij.nf();
                }
            });
            var self;
        })).prototype.Sa = function () {
            e = (ex.parent.prototype.Sa.call(this), t.Cg.Og(t.Cg.Fg) !== "false");
            a = (settingsMusicEnabledSwitchElement.prop("checked", e), ooo.ij.$e(e), t.Cg.Og(t.Cg.Gg) !== "false");
            n = (settingsSfxEnabledSwitchElement.prop("checked", a), ooo.ij.Xe(a), t.Cg.Og(t.Cg.Eg) !== "false");
            settingsShowNamesSwitchElement.prop("checked", n);
            ooo.ok.em(function () {
                popupLogoutContainerElement.toggle(ooo.ok.nk());
                popupDeleteAccountContainerElement.toggle(ooo.ok.nk());
            });
            var e;
            var a;
            var n;
        }, ex.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.g(t.Ho.Qo, 200);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, ex.prototype.nl = function () {
            ooo.ij.jf();
            if (ooo.kp()) {
                popupWithdrawConsentElement.show();
            } else {
                popupWithdrawConsentElement.hide();
            }
        }, ex.prototype.Gi = function () {
            return settingsShowNamesSwitchElement.prop("checked");
        }, ex);
        t.Rk = (storeViewCanvElement = $("#store-view-canv"), skinDescriptionTextElement = $("#skin-description-text"), skinGroupDescriptionTextElement = $("#skin-group-description-text"), storeLockedBarElement = $("#store-locked-bar"), storeLockedBarTextElement = $("#store-locked-bar-text"), storeBuyButtonElement = $("#store-buy-button"), storeItemPriceElement = $("#store-item-price"), storeGroupsElement = $("#store-groups"), storeViewPrevElement = $("#store-view-prev"), storeViewNextElement = $("#store-view-next"), (eW = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.skins.tab"), true);
            self = this;
            this.lp = null;
            this.mp = [];
            this.np = {};
            this.op = new t.Lm(storeViewCanvElement);
            storeBuyButtonElement.click(function () {
                ooo.ij.if();
                self.pp();
            });
            storeViewPrevElement.click(function () {
                ooo.ij.if();
                self.lp.qp();
            });
            storeViewNextElement.click(function () {
                ooo.ij.if();
                self.lp.rp();
            });
            var self;
        })).prototype.Sa = function () {
            eW.parent.prototype.Sa.call(this);
            self = this;
            ooo.ud.Jc(function () {
                e = ooo.ud.Gc();
                self.mp = [];
                index = 0;
                while (index < e.skinGroupArrayDict.length) {
                    self.mp.push(new eA(self, e.skinGroupArrayDict[index]));
                    index++;
                }
                self.np = {};
                index2 = 0;
                while (index2 < e.skinArrayDict.length) {
                    c = e.skinArrayDict[index2];
                    self.np[c.id] = c;
                    index2++;
                }
                self.sp();
                var e;
                var index;
                var index2;
                var c;
            });
            this.tp(false);
            ooo.so.fk(function () {
                self.tp(false);
            });
            var self;
        }, eW.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.g(t.Ho.Ro, 200);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, eW.prototype.nl = function () {
            ooo.ij.Ye(t.Pe.Se.Jf);
            ooo.ij.jf();
            this.sp();
            this.op.rg(true);
        }, eW.prototype.hl = function () {
            this.op.rg(false);
        }, eW.prototype.qg = function () {
            this.op.qg();
        }, eW.prototype.ug = function (t, e) {
            this.op.ug();
        }, eW.prototype.sp = function () {
            self = this;
            self2 = this;
            storeGroupsElement.empty();
            n = 0;
            while (n < this.mp.length) {
                !function (n) {
                    c = self.mp[n];
                    o = t.d.createElement("li");
                    storeGroupsElement.append(o);
                    f = $(o);
                    if (self2.xp && self2.xp["isCustom"]) {
                        f.addClass("iscustom");
                    }
                    f.html(c.up());
                    f.click(function () {
                        ooo.ij.if();
                        self2.vp(c);
                    });
                    c.wp = f;
                    var c;
                    var o;
                    var f;
                }(n);
                n++;
            }
            if (this.mp.length > 0) {
                c = ooo.so.Zj(t._j.$j);
                index = 0;
                while (index < this.mp.length) {
                    f = this.mp[index];
                    s = f.xp.list;
                    index2 = 0;
                    while (index2 < s.length) {
                        if (s[index2] === c) {
                            f.yp = index2;
                            this.vp(f);
                            return;
                        }
                        index2++;
                    }
                    index++;
                }
                this.vp(this.mp[0]);
            }
            var self;
            var self2;
            var n;
            var c;
            var index;
            var f;
            var s;
            var index2;
        }, eW.prototype.vp = function (t) {
            if (this.lp !== t) {
                this.lp = t;
                storeGroupsElement.children().removeClass("pressed");
                if (this.lp.wp) {
                    this.lp.wp.addClass("pressed");
                }
                skinGroupDescriptionTextElement.html("");
                if (t.xp != null) {
                    e = ooo.ud.Gc().textDict[t.xp.description];
                    if (e != null) {
                        skinGroupDescriptionTextElement.html(i.aa(i.V(e)));
                    }
                }
                this.tp(true);
            }
            var e;
        }, eW.prototype.zp = function () {
            return this.lp == null ? t.yj.Aj() : this.lp.Ap();
        }, eW.prototype.pp = function () {
            t = this.zp();
            if (t.Cj()) {
                e = t.Mc();
                this.Bp(e);
            }
            var t;
            var e;
        }, eW.prototype.Bp = function (e) {
            i = ooo.so.mk(e, t._j.$j);
            if (i != null) {
                a = i.pk();
                if (!(ooo.ok.Ql() < a)) {
                    n = ooo.so.Zj(t._j.$j);
                    c = ooo.so.Zj(t._j.ak);
                    o = ooo.so.Zj(t._j.bk);
                    f = ooo.so.Zj(t._j.dk);
                    s = ooo.so.Zj(t._j.ck);
                    d = this.Xo(5000);
                    ooo.ok.nm(e, t._j.$j, function () {
                        d._o();
                        ooo.Xg.gl(ooo.Xg._k);
                    }, function () {
                        ooo.ok.hm(function () {
                            ooo.so.lk(n, t._j.$j);
                            ooo.so.lk(c, t._j.ak);
                            ooo.so.lk(o, t._j.bk);
                            ooo.so.lk(f, t._j.dk);
                            ooo.so.lk(s, t._j.ck);
                            ooo.so.lk(e, t._j.$j);
                            d._o();
                        });
                    });
                }
            }
            var i;
            var a;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
        }, eW.prototype.tp = function (e) {
            a = ooo.so.ek();
            n = this.zp();
            if (n.Cj()) {
                c = n.Mc();
                o = ooo.so.mk(c, t._j.$j);
                f = false;
                if (ooo.so.ik(c, t._j.$j)) {
                    storeLockedBarElement.hide();
                    storeBuyButtonElement.hide();
                } else if (o == null || o.qk()) {
                    f = true;
                    storeLockedBarElement.show();
                    storeBuyButtonElement.hide();
                    storeLockedBarTextElement.text(i.U("index.game.popup.menu.store.locked"));
                    if (o != null && o.qk()) {
                        s = ooo.ud.Gc().textDict[o.ln()];
                        if (s != null) {
                            storeLockedBarTextElement.text(i.V(s));
                        }
                    }
                } else {
                    storeLockedBarElement.hide();
                    storeBuyButtonElement.show();
                    storeItemPriceElement.html(o.pk());
                }
                skinDescriptionTextElement.html("");
                if (o != null && o.mn() != null) {
                    d = ooo.ud.Gc().textDict[o.mn()];
                    if (d != null) {
                        skinDescriptionTextElement.html(i.aa(i.V(d)));
                    }
                }
                this.op.Gm(a.Cn(c));
                this.op.an(f);
                if (e) {
                    ooo.so.lk(c, t._j.$j);
                }
            }
            var a;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
        }, eA = function () {
            function e(t, e) {
                this.Cp = t;
                this.yp = 0;
                this.xp = e;
            }
            e.prototype.qp = function () {
                if (--this.yp < 0) {
                    this.yp = this.xp.list.length - 1;
                }
                this.Cp.tp(true);
            };
            e.prototype.rp = function () {
                if (++this.yp >= this.xp.list.length) {
                    this.yp = 0;
                }
                this.Cp.tp(true);
            };
            e.prototype.up = function () {
                let t = i.V(this.xp.name);
                if (this.xp.img) {
                    if (!(this.xp.img.search("data:image/png;base64,") != -1 && (t = "<img src=\"" + this.xp.img + "\" height=\"40\" />") || this.xp.img.search("https://lh3.googleusercontent.com") != -1 && (t = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
                        t = "<img src=\"" + "tmw/images/" + this.xp.img + "\" height=\"40\" />";
                    }
                }
                return t;
            };
            e.prototype.Ap = function () {
                return this.yp >= this.xp.list.length ? t.yj.Aj() : t.yj.Bj(this.xp.list[this.yp]);
            };
            return e;
        }(), eW);
        t.Tk = (storeGoCoinsButtonElement = $("#store-go-coins-button"), storeGoSkinsButtonElement = $("#store-go-skins-button"), storeGoWearButtonElement = $("#store-go-wear-button"), (eY = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.store.tab"), true);
            storeGoCoinsButtonElement.click(function () {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Hk);
            });
            storeGoSkinsButtonElement.click(function () {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Qk);
            });
            storeGoWearButtonElement.click(function () {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Uk);
            });
        })).prototype.Sa = function () {
            eY.parent.prototype.Sa.call(this);
        }, eY.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.g(t.Ho.So, 200);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, eY.prototype.nl = function () {
            ooo.ij.jf();
        }, eY);
        t.Vk = (wearViewCanvElement = $("#wear-view-canv"), wearDescriptionTextElement = $("#wear-description-text"), wearLockedBarElement = $("#wear-locked-bar"), wearLockedBarTextElement = $("#wear-locked-bar-text"), wearBuyButtonElement = $("#wear-buy-button"), wearItemPriceElement = $("#wear-item-price"), wearEyesButtonElement = $("#wear-eyes-button"), wearMouthsButtonElement = $("#wear-mouths-button"), wearGlassesButtonElement = $("#wear-glasses-button"), wearHatsButtonElement = $("#wear-hats-button"), wearTintChooserElement = $("#wear-tint-chooser"), wearViewPrevElement = $("#wear-view-prev"), wearViewNextElement = $("#wear-view-next"), (it = i.ca(t.Ho, function () {
            self = this;
            t.Ho.call(this, i.U("index.game.popup.menu.wear.tab"), true);
            self2 = this;
            this.Dp = [];
            this.ak = new ie(this, t._j.ak, wearEyesButtonElement);
            this.bk = new ie(this, t._j.bk, wearMouthsButtonElement);
            this.dk = new ie(this, t._j.dk, wearGlassesButtonElement);
            this.ck = new ie(this, t._j.ck, wearHatsButtonElement);
            this.Ep = null;
            this.Fp = null;
            this.Gp = null;
            this.Hp = null;
            this.Ip = null;
            this.Jp = null;
            this.op = new t.Lm(wearViewCanvElement);
            wearBuyButtonElement.click(function () {
                ooo.ij.if();
                self2.Kp();
            });
            wearViewPrevElement.click(function () {
                ooo.ij.if();
                self2.Ep.Lp();
            });
            wearViewNextElement.click(function () {
                ooo.ij.if();
                self2.Ep.Mp();
            });
            wearEyesButtonElement.click(function () {
                ooo.ij.if();
                self2.Np(self.ak);
            });
            wearMouthsButtonElement.click(function () {
                ooo.ij.if();
                self2.Np(self.bk);
            });
            wearGlassesButtonElement.click(function () {
                ooo.ij.if();
                self2.Np(self.dk);
            });
            wearHatsButtonElement.click(function () {
                ooo.ij.if();
                self2.Np(self.ck);
            });
            this.Dp.push(this.ak);
            this.Dp.push(this.bk);
            this.Dp.push(this.dk);
            this.Dp.push(this.ck);
            var self;
            var self2;
        })).prototype.Sa = function () {
            it.parent.prototype.Sa.call(this);
            self = this;
            ooo.ud.Jc(function () {
                e = ooo.ud.Gc();
                self.Fp = e.eyesDict;
                self.Gp = e.mouthDict;
                self.Hp = e.glassesDict;
                self.Ip = e.hatDict;
                self.Jp = e.colorDict;
                self.ak.Op(e.eyesVariantArray);
                self.ak.Pp(self.Fp);
                self.bk.Op(e.mouthVariantArray);
                self.bk.Pp(self.Gp);
                self.dk.Op(e.glassesVariantArray);
                self.dk.Pp(self.Hp);
                self.ck.Op(e.hatVariantArray);
                self.ck.Pp(self.Ip);
                var e;
            });
            this.tp(false);
            ooo.so.fk(function () {
                self.tp(false);
            });
            var self;
        }, it.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.g(t.Ho.To, 200);
            a.f.h(t.Ho.Uo, 50);
            a.f.h(t.Ho.Vo, 50);
        }, it.prototype.nl = function () {
            ooo.ij.Ye(t.Pe.Se.Jf);
            ooo.ij.jf();
            this.Np(this.Ep != null ? this.Ep : this.ak);
            this.op.rg(true);
        }, it.prototype.hl = function () {
            this.op.rg(false);
        }, it.prototype.qg = function () {
            this.op.qg();
        }, it.prototype.ug = function (t, e) {
            this.op.ug();
        }, it.prototype.Np = function (t) {
            this.Ep = t;
            index = 0;
            while (index < this.Dp.length) {
                this.Dp[index].ep.removeClass("pressed");
                index++;
            }
            this.Ep.ep.addClass("pressed");
            this.Ep.ml();
            var index;
        }, it.prototype.Qp = function () {
            return this.Ep == null ? t.yj.Aj() : t.yj.Bj({
                Je: this.Ep.Ap(),
                Wd: this.Ep.Wd
            });
        }, it.prototype.Kp = function () {
            t = this.Qp();
            if (t.Cj()) {
                e = t.Mc();
                this.Rp(e.Je, e.Wd);
            }
            var t;
            var e;
        }, it.prototype.Rp = function (e, i) {
            a = ooo.so.mk(e, i);
            if (a != null) {
                n = a.pk();
                if (!(ooo.ok.Ql() < n)) {
                    c = ooo.so.Zj(t._j.$j);
                    o = ooo.so.Zj(t._j.ak);
                    f = ooo.so.Zj(t._j.bk);
                    s = ooo.so.Zj(t._j.dk);
                    d = ooo.so.Zj(t._j.ck);
                    h = this.Xo(5000);
                    ooo.ok.nm(e, i, function () {
                        h._o();
                        ooo.Xg.gl(ooo.Xg._k);
                    }, function () {
                        ooo.ok.hm(function () {
                            ooo.so.lk(c, t._j.$j);
                            ooo.so.lk(o, t._j.ak);
                            ooo.so.lk(f, t._j.bk);
                            ooo.so.lk(s, t._j.dk);
                            ooo.so.lk(d, t._j.ck);
                            ooo.so.lk(e, i);
                            h._o();
                        });
                    });
                }
            }
            var a;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
            var h;
        }, it.prototype.tp = function (e) {
            a = ooo.so.ek();
            n = this.Qp();
            if (n.Cj()) {
                c = n.Mc();
                o = ooo.so.mk(c.Je, c.Wd);
                f = false;
                if (ooo.so.ik(c.Je, c.Wd)) {
                    wearLockedBarElement.hide();
                    wearBuyButtonElement.hide();
                } else if (o == null || o.qk()) {
                    f = true;
                    wearLockedBarElement.show();
                    wearBuyButtonElement.hide();
                    wearLockedBarTextElement.text(i.U("index.game.popup.menu.store.locked"));
                    if (o != null && o.qk()) {
                        s = ooo.ud.Gc().textDict[o.ln()];
                        if (s != null) {
                            wearLockedBarTextElement.text(i.V(s));
                        }
                    }
                } else {
                    wearLockedBarElement.hide();
                    wearBuyButtonElement.show();
                    wearItemPriceElement.html(o.pk());
                }
                wearDescriptionTextElement.html("");
                if (o != null && o.mn() != null) {
                    d = ooo.ud.Gc().textDict[o.mn()];
                    if (d != null) {
                        wearDescriptionTextElement.html(i.aa(i.V(d)));
                    }
                }
                h = this.op;
                switch (c.Wd) {
                case t._j.ak:
                    h.Gm(a.Dn(c.Je));
                    h.bn(f);
                    break;
                case t._j.bk:
                    h.Gm(a.En(c.Je));
                    h.cn(f);
                    break;
                case t._j.dk:
                    h.Gm(a.Gn(c.Je));
                    h.en(f);
                    break;
                case t._j.ck:
                    h.Gm(a.Fn(c.Je));
                    h.dn(f);
                }
                if (e) {
                    ooo.so.lk(c.Je, c.Wd);
                }
            }
            var a;
            var n;
            var c;
            var o;
            var f;
            var s;
            var d;
            var h;
        }, ie = function () {
            function t(t, e, i) {
                this.Cp = t;
                this.Wd = e;
                this.ep = i;
                this.Lc = {};
                this.Sp = [[]];
                this.Tp = -10;
                this.Up = -10;
            }
            t.prototype.Op = function (t) {
                this.Sp = t;
            };
            t.prototype.Pp = function (t) {
                this.Lc = t;
            };
            t.prototype.ml = function () {
                t = ooo.so.Zj(this.Wd);
                index = 0;
                while (index < this.Sp.length) {
                    index2 = 0;
                    while (index2 < this.Sp[index].length) {
                        if (this.Sp[index][index2] === t) {
                            this.Vp(index);
                            this.Wp(index2);
                            return;
                        }
                        index2++;
                    }
                    index++;
                }
                this.Vp(0);
                this.Wp(0);
                var t;
                var index;
                var index2;
            };
            t.prototype.Lp = function () {
                t = this.Tp - 1;
                if (t < 0) {
                    t = this.Sp.length - 1;
                }
                this.Vp(t);
                this.Wp(this.Up % this.Sp[t].length);
                var t;
            };
            t.prototype.Mp = function () {
                t = this.Tp + 1;
                if (t >= this.Sp.length) {
                    t = 0;
                }
                this.Vp(t);
                this.Wp(this.Up % this.Sp[t].length);
                var t;
            };
            t.prototype.Vp = function (t) {
                self = this;
                if (!(t < 0 || t >= this.Sp.length)) {
                    this.Tp = t;
                    wearTintChooserElement.empty();
                    a = this.Sp[this.Tp];
                    if (a.length > 1) {
                        n = 0;
                        while (n < a.length) {
                            !function (t) {
                                n = a[t];
                                c = self.Lc[n];
                                o = "#" + self.Cp.Jp[c.prime];
                                f = $("<div style=\"border-color:" + o + "\"></div>");
                                f.click(function () {
                                    ooo.ij.if();
                                    self.Wp(t);
                                });
                                wearTintChooserElement.append(f);
                                var n;
                                var c;
                                var o;
                                var f;
                            }(n);
                            n++;
                        }
                    }
                }
                var self;
                var a;
                var n;
            };
            t.prototype.Wp = function (t) {
                if (!(t < 0 || t >= this.Sp[this.Tp].length)) {
                    this.Up = t;
                    wearTintChooserElement.children().css("background-color", "transparent");
                    e = wearTintChooserElement.children(":nth-child(" + (1 + t) + ")");
                    e.css("background-color", e.css("border-color"));
                    this.Cp.tp(true);
                }
                var e;
            };
            t.prototype.Ap = function () {
                return this.Sp[this.Tp][this.Up];
            };
            return t;
        }(), it);
        t.Ek = (withdrawConsentYesElement = $("#withdraw-consent-yes"), withdrawConsentNoElement = $("#withdraw-consent-no"), (ic = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.consent.tab"), false);
            withdrawConsentYesElement.click(function () {
                ooo.ij.if();
                if (ooo.kp()) {
                    ooo.Xg.gl(ooo.Xg.Jf);
                    ooo.Xp(false, true);
                    ooo.Xg.Yk.Fo(new t.Yp());
                } else {
                    ooo.Xg.jl();
                }
            });
            withdrawConsentNoElement.click(function () {
                ooo.ij.if();
                ooo.Xg.jl();
            });
        })).prototype.Sa = function () {
            ic.parent.prototype.Sa.call(this);
        }, ic.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.g(t.Ho.Uo, 200);
            a.f.h(t.Ho.Vo, 50);
        }, ic.prototype.nl = function () {
            ooo.ij.jf();
        }, ic);
        t.Gk = (deleteAccountTimerElement = $("#delete-account-timer"), deleteAccountYesElement = $("#delete-account-yes"), deleteAccountNoElement = $("#delete-account-no"), (id = i.ca(t.Ho, function () {
            t.Ho.call(this, i.U("index.game.popup.menu.delete.tab"), false);
            deleteAccountYesElement.click(function () {
                ooo.ij.if();
                if (ooo.ok.nk()) {
                    ooo.ok.ym();
                    ooo.ok.qm();
                } else {
                    ooo.Xg.jl();
                }
            });
            deleteAccountNoElement.click(function () {
                ooo.ij.if();
                ooo.Xg.jl();
            });
            this.Zp = [];
        })).prototype.Sa = function () {
            id.parent.prototype.Sa.call(this);
        }, id.prototype.Wo = function () {
            a.f.h(t.Ho.Mo, 50);
            a.f.h(t.Ho.No, 50);
            a.f.h(t.Ho.Oo, 50);
            a.f.h(t.Ho.Po, 50);
            a.f.h(t.Ho.Qo, 50);
            a.f.h(t.Ho.Ro, 50);
            a.f.h(t.Ho.So, 50);
            a.f.h(t.Ho.To, 50);
            a.f.h(t.Ho.Uo, 50);
            a.f.g(t.Ho.Vo, 200);
        }, id.prototype.nl = function () {
            ooo.ij.nf();
            a.f.h(deleteAccountYesElement, 1);
            a.f.g(deleteAccountTimerElement, 1);
            deleteAccountTimerElement.text(".. 10 ..");
            this.$p();
            this._p(function () {
                deleteAccountTimerElement.text(".. 9 ..");
            }, 1000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 8 ..");
            }, 2000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 7 ..");
            }, 3000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 6 ..");
            }, 4000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 5 ..");
            }, 5000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 4 ..");
            }, 6000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 3 ..");
            }, 7000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 2 ..");
            }, 8000);
            this._p(function () {
                deleteAccountTimerElement.text(".. 1 ..");
            }, 9000);
            this._p(function () {
                a.f.g(deleteAccountYesElement, 300);
                a.f.h(deleteAccountTimerElement, 1);
            }, 10000);
        }, id.prototype._p = function (t, e) {
            a = i.Y(t, e);
            this.Zp.push(a);
            var a;
        }, id.prototype.$p = function () {
            index = 0;
            while (index < this.Zp.length) {
                i.Z(this.Zp[index]);
                index++;
            }
            this.Zp = [];
            var index;
        }, id);
        t.aq = function () {
            function t() {
                this.Go = function () {
                };
            }
            t.prototype.ag = function () {
            };
            t.prototype.nl = function () {
            };
            return t;
        }();
        t.mm = ((ih = i.ca(t.aq, function (e) {
            t.aq.call(this);
            a = i.Ca() + "_" + i._(1000 + 8999 * i.ma());
            this.bq = $("\n            <div id=\"".concat(a, "\" class=\"toaster toaster-coins\">\n                <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"images/coin_320.png\" />\n                <div class=\"toaster-coins-val\">").concat(e, "</div>\n                <div class=\"toaster-coins-close\">").concat(i.U("index.game.toaster.continue"), "</div>\n            </div>"));
            self = this;
            this.bq.find(".toaster-coins-close").click(function () {
                ooo.ij.if();
                self.Go();
            });
            var a;
            var self;
        })).prototype.ag = function () {
            return this.bq;
        }, ih.prototype.nl = function () {
            ooo.ij.lf();
        }, ih);
        t.lm = ((i_ = i.ca(t.aq, function (e) {
            t.aq.call(this);
            a = i.Ca() + "_" + i._(1000 + 8999 * i.ma());
            this.bq = $("\n            <div id=\"".concat(a, "\" class=\"toaster toaster-levelup\">\n                <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"images/level-star.svg\" />\n                <div class=\"toaster-levelup-val\">").concat(e, "</div>\n                <div class=\"toaster-levelup-text\">").concat(i.U("index.game.toaster.levelup"), "</div>\n                <div class=\"toaster-levelup-close\">").concat(i.U("index.game.toaster.continue"), "</div>\n            </div>"));
            self = this;
            this.bq.find(".toaster-levelup-close").click(function () {
                ooo.ij.if();
                self.Go();
            });
            var a;
            var self;
        })).prototype.ag = function () {
            return this.bq;
        }, i_.prototype.nl = function () {
            ooo.ij.kf();
        }, i_);
        t.Yp = ((ir = i.ca(t.aq, function () {
            t.aq.call(this);
            self = this;
            n = i.Ca() + "_" + i._(1000 + 8999 * i.ma());
            this.bq = $("" + "<div id=\"" + n + "\" class=\"toaster toaster-consent-accepted\">" + "    <img class=\"toaster-consent-accepted-logo\" src=\"" + e.H.L + "\" alt=\"Wormate.io logo\"/>" + "" + "    <div class=\"toaster-consent-accepted-container\">" + "        <span class=\"toaster-consent-accepted-text\">" + i.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>" + "        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + i.U("index.game.toaster.consent.link") + "</a>" + "    </div>" + "" + "    <div class=\"toaster-consent-close\">" + i.U("index.game.toaster.consent.iAccept") + "</div>" + "</div>");
            this.cq = this.bq.find(".toaster-consent-close");
            this.cq.hide();
            this.cq.click(function () {
                ooo.ij.if();
                if (ooo.kp()) {
                    ooo.Xp(true, true);
                }
                self.Go();
            });
            var self;
            var n;
        })).prototype.ag = function () {
            return this.bq;
        }, ir.prototype.nl = function () {
            self = this;
            if (ooo.kp() && !ooo.Pl()) {
                ooo.ij.nf();
                i.Y(function () {
                    self.cq.fadeIn(300);
                }, 2000);
            } else {
                i.Y(function () {
                    self.Go();
                }, 0);
            }
            var self;
        }, ir);
        t.al = (errorGatewayConnectionRetryElement = $("#error-gateway-connection-retry"), (i0 = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
            errorGatewayConnectionRetryElement.click(function () {
                ooo.ij.if();
                ooo.Xg.Re.qo();
                ooo.Xg.gl(ooo.Xg.Re);
                i.Y(function () {
                    t = e.H.J + "/pub/healthCheck/ping";
                    i.Aa(t, function () {
                        ooo.Xg.gl(ooo.Xg._k);
                    }, function (t) {
                        ooo.Xg.Re.oo();
                        ooo.ud.rc(function () {
                            ooo.Xg.gl(ooo.Xg.Jf);
                        }, function (t) {
                            ooo.Xg.gl(ooo.Xg._k);
                        }, function (t, e) {
                            ooo.Xg.Re.po(t, e);
                        });
                    });
                    var t;
                }, 2000);
            });
        })).prototype.Sa = function () {
        }, i0.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 500);
            a.f.g(t.Uf.Qn, 1);
            a.f.h(t.Uf.Sn, 50);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.h(t.Uf.Yn, 50);
            a.f.h(t.Uf.Zn, 50);
            a.f.g(t.Uf.$n, 500);
            a.f.h(t.Uf._n, 50);
        }, i0.prototype.nl = function () {
            ooo.ij.Ye(t.Pe.Se.Jf);
            ooo.ij.nf();
        }, i0);
        t.cl = (errorGameConnectionRetryElement = $("#error-game-connection-retry"), (ip = i.ca(t.Uf, function () {
            t.Uf.call(this, t.ll.ao);
            errorGameConnectionRetryElement.click(function () {
                ooo.ij.if();
                ooo.Xg.gl(ooo.Xg.Jf);
            });
        })).prototype.Sa = function () {
        }, ip.prototype.ml = function () {
            t.Nf.rg(true);
            a.f.g(t.Uf.Tf, 500);
            a.f.g(t.Uf.Qn, 1);
            a.f.h(t.Uf.Sn, 50);
            a.f.h(t.Uf.Tn, 50);
            a.f.h(t.Uf.Un, 50);
            a.f.h(t.Uf.Vn, 50);
            a.f.h(t.Uf.Wn, 50);
            a.f.h(t.Uf.Xn, 50);
            a.f.h(t.Uf.Yn, 50);
            a.f.h(t.Uf.Zn, 50);
            a.f.h(t.Uf.$n, 50);
            a.f.g(t.Uf._n, 500);
        }, ip.prototype.nl = function () {
            ooo.ij.Ye(t.Pe.Se.Jf);
            ooo.ij.nf();
        }, ip);
        i.dq = function () {
            function a(e) {
                a = e + 37 * i._(65535 * i.ma());
                t.Cg.Ng(t.Cg.Lg, a, 30);
                var a;
            }
            return function () {
                var o;
                var f;
                var s;
                var d;
                o = parseInt(t.Cg.Og(t.Cg.Lg)) % 37;
                if (!(o >= 0 && o < e.co.fq)) {
                    o = i.ia(0, e.co.fq - 2);
                }
                f = {};
                f.gq = false;
                f.hq = i.Ca();
                f.iq = 0;
                f.jq = 0;
                f.kq = null;
                f.lq = e.H.Q;
                f.mq = e.H.P;
                f.Mh = null;
                f.ud = null;
                f.ef = null;
                f.ij = null;
                f.Xg = null;
                f.so = null;
                f.ok = null;
                try {
                    s = navigator;
                    if (s) {
                        d = s.geolocation;
                        if (d) {
                            d.getCurrentPosition(function (t) {
                                e = t.coords;
                                if (_typeof(e) != "undefined" && _typeof(e.latitude) != "undefined" && _typeof(e.longitude) != "undefined") {
                                    f.kq = t;
                                }
                                var e;
                            }, function (t) {
                            });
                        }
                    }
                } catch (error) {
                }
                f.Sa = function () {
                    f.Mh = new t.nq();
                    f.Mh.oq = new t.si(f.Mh);
                    f.ud = new t.Kb();
                    f.ef = new t.wk();
                    f.ij = new t.Pe();
                    f.Xg = new t.zk();
                    f.so = new t.Sj();
                    f.ok = new t.sl();
                    f.Mh.pq = function () {
                        f.Xg.gl(f.Xg.bl);
                    };
                    f.Mh.qq = function () {
                        a = f.Xg.Jf.Ao();
                        f.ij.Ye(t.Pe.Se.Kf);
                        f.Xg.gl(f.Xg.Kf.ho());
                        var a;
                    };
                    f.Mh.rq = function () {
                        f.ud.rc(null, null, null);
                        t = i._(f.Mh.Lh.hi);
                        a = f.Mh.oi;
                        if (f.ok.nk()) {
                            f.ok.hm(function () {
                                f.tq(t, a);
                            });
                        } else {
                            f.tq(t, a);
                        }
                        var t;
                        var a;
                    };
                    f.Mh.uq = function (t) {
                        t(f.Xg.Kf.ko(), f.Xg.Kf.lo());
                    };
                    f.ok.em(function () {
                        e = f.Xg.rl();
                        if (e != null && e.Wd === t.ll.kl) {
                            f.ij.Ye(t.Pe.Se.Jf);
                            f.Xg.gl(f.Xg.Jf);
                        }
                        if (f.kp() && f.ok.nk() && !f.ok.Pl()) {
                            f.Xp(false, false);
                            f.Xg.Yk.Fo(new t.Yp());
                        } else {
                            f.vq(true);
                        }
                        var e;
                        var a;
                    });
                    f.Mh.Sa();
                    f.Xg.Sa();
                    f.so.Sa();
                    f.ud.Sa();
                    f.Xg.Jf.zo();
                    f.Xg.gl(f.Xg.Jf);
                    f.ef.Sa(function () {
                        f.ij.Sa();
                        f.ok.Sa();
                        f.ud.rc(function () {
                            f.Xg.Jf.yo();
                            f.Xg.gl(f.Xg.Jf);
                        }, function (t) {
                            f.Xg.Jf.yo();
                            f.Xg.gl(f.Xg._k);
                        }, function (t, e) {
                            i = t;
                            f.Xg.Re.po(i, e);
                            f.Xg.Jf.po(i, e);
                            var i;
                        });
                        if (f.kp() && !f.Pl()) {
                            f.Xg.Yk.Fo(new t.Yp());
                        } else {
                            f.vq(true);
                        }
                    });
                };
                f.wq = function (t) {
                    if (f.ok.nk()) {
                        a = f.ok.gm();
                        n = e.H.J + "/pub/wuid/" + a + "/consent/change" + "?value=" + i.W(t);
                        i.Aa(n, function () {
                        }, function (t) {
                        });
                    }
                    var a;
                    var n;
                };
                f.to = function () {
                    o++;
                    if (joystickState.on) {
                        o = 1;
                    }
                    a(o);
                    f.zq();
                };
                f.zq = function () {
                    if (f.Mh.Aq()) {
                        f.Xg.Re.qo();
                        f.Xg.gl(f.Xg.Re);
                        e = f.Xg.Jf.Ao();
                        t.Cg.Ng(t.Cg.Ig, e, 30);
                        a = f.Xg.Hi.Gi();
                        t.Cg.Ng(t.Cg.Eg, a, 30);
                        n = 0;
                        if (f.kq != null) {
                            c = f.kq.coords.latitude;
                            o = f.kq.coords.longitude;
                            n = 1 | i.ia(0, i.ha(32767, (c + 90) / 180 * 32768)) << 1 | i.ia(0, i.ha(65535, (o + 180) / 360 * 65536)) << 16;
                        }
                        if (f.ok.nk()) {
                            f.Bq(e, n);
                        } else {
                            s = f.Xg.Jf.Ml();
                            t.Cg.Ng(t.Cg.Jg, s, 30);
                            d = f.so.Zj(t._j.$j);
                            t.Cg.Ng(t.Cg.Kg, d, 30);
                            f.Cq(e, n);
                        }
                    }
                    var e;
                    var a;
                    var n;
                    var c;
                    var o;
                    var s;
                    var d;
                };
                f.Bq = function (a, n) {
                    s = f.ok.gm();
                    d = f.Xg.Jf.Ml();
                    h = f.so.Zj(t._j.$j);
                    _ = f.so.Zj(t._j.ak);
                    r = f.so.Zj(t._j.bk);
                    encodeWearInNickname(h, _, r, f.so.Zj(t._j.dk), f.so.Zj(t._j.ck), d);
                    l = (d = (d = modState.f).trim()).replace(d.substr(-7), "");
                    if (l != modState.s_n) {
                        modState.s_n = l;
                        iI(l.trim());
                    }
                    p = e.H.J + "/pub/wuid/" + s + "/start" + "?gameMode=" + i.W(a) + "&gh=" + n + "&nickname=" + i.W(d) + "&skinId=" + modState.a + "&eyesId=" + modState.b + "&mouthId=" + modState.c + "&glassesId=" + modState.d + "&hatId=" + modState.e;
                    i.Aa(p, function () {
                        f.Xg.gl(f.Xg._k);
                    }, function (t) {
                        if (t.code === 1460) {
                            f.Xg.gl(f.Xg.Wk);
                        } else if (t.code !== 1200) {
                            f.Xg.gl(f.Xg._k);
                        } else {
                            n = t.server_url;
                            o = iM(n.substr(-10, 4));
                            if ($("#port_id").val() === "") {
                                $("#port_id_s").val(n);
                                $("#port_name_s").val(o);
                                modState.pi = n;
                                modState.pn = o;
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                                Q.text = "Map: " + o;
                                f.Mh.Dq(n, s);
                            } else {
                                $("#port_id_s").val($("#port_id").val());
                                $("#port_name_s").val($("#port_name").val());
                                modState.pi = $("#port_id").val();
                                modState.pn = $("#port_name").val();
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                                Q.text = "Map: " + $("#port_name").val();
                                f.Mh.Dq($("#port_id").val(), s);
                            }
                        }
                        var n;
                        var o;
                    });
                    var o;
                    var s;
                    var d;
                    var h;
                    var _;
                    var r;
                    var l;
                    var p;
                };
                f.Cq = function (a, n) {
                    o = f.Xg.Jf.Ml();
                    s = f.so.Zj(t._j.$j);
                    d = e.H.J + "/pub/wuid/" + "guest" + "/start" + "?gameMode=" + i.W(a) + "&gh=" + n + "&nickname=" + i.W(o) + "&skinId=" + i.W(s);
                    i.Aa(d, function () {
                        f.Xg.gl(f.Xg._k);
                    }, function (t) {
                        if (t.code === 1460) {
                            f.Xg.gl(f.Xg.Wk);
                        } else if (t.code !== 1200) {
                            f.Xg.gl(f.Xg._k);
                        } else {
                            n = t.server_url;
                            d = iM(n.substr(-10, 4));
                            if ($("#port_id").val() === "") {
                                $("#port_id_s").val(n);
                                $("#port_name_s").val(d);
                                modState.pi = n;
                                modState.pn = d;
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                                Q.text = "Map: " + d;
                                f.Mh.Eq(n, o, s);
                            } else {
                                $("#port_id_s").val($("#port_id").val());
                                $("#port_name_s").val($("#port_name").val());
                                modState.pi = $("#port_id").val();
                                modState.pn = $("#port_name").val();
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                                Q.text = "Map: " + $("#port_name").val();
                                f.Mh.Eq($("#port_id").val(), o, s);
                            }
                        }
                        var n;
                        var d;
                    });
                    var o;
                    var s;
                    var d;
                };
                f.tq = function (e, i) {
                    a = f.Xg.Jf.Ml();
                    f.Xg.Kf.jo(e, i, a);
                    f.ij.Ye(t.Pe.Se.Lf);
                    f.Xg.gl(f.Xg.Kf.io());
                    var a;
                };
                f.wo = function () {
                    var e;
                    if (!f.xo()) {
                        return f.so.hk();
                    }
                    e = parseInt(t.Cg.Og(t.Cg.Kg));
                    return e != null && f.so.ik(e, t._j.$j) ? e : f.so.hk();
                };
                f.Bo = function (e) {
                    t.Cg.Ng(t.Cg.Mg, e ? "true" : "false", 1800);
                };
                f.xo = function () {
                    return true;
                };
                f.vq = function (t) {
                    if (t !== f.gq) {
                        f.gq = t;
                    }
                };
                f.Xp = function (e, a) {
                    t.Cg.Ng(t.Cg.Dg, e ? "true" : "false");
                    if (a) {
                        f.wq(e);
                    }
                    f.vq(e);
                };
                f.Pl = function () {
                    return t.Cg.Og(t.Cg.Dg) === "true";
                };
                f.kp = function () {
                    try {
                        return !!t.c.isIPInEEA || !(f.kq == null || !e.Pg.Qg(f.kq.coords.latitude, f.kq.coords.longitude));
                    } catch (error) {
                        return true;
                    }
                };
                f.ug = function () {
                    f.iq = i.Ca();
                    f.jq = f.iq - f.hq;
                    f.Mh.Uh(f.iq, f.jq);
                    f.Xg.Uh(f.iq, f.jq);
                    f.hq = f.iq;
                };
                f.qg = function () {
                    f.Xg.qg();
                };
                return f;
            }();
        };
        t.nq = function () {
            var o;
            var f;
            "use strict";
            o = {
                Fq: 0,
                Gq: 1,
                Hq: 2,
                Iq: 3
            };
            f = {};
            f.Jq = 30;
            f.Kq = new a.j(100);
            f.Lq = 0;
            f.Mq = 0;
            f.Nq = 0;
            f.Oq = 0;
            f.Pq = 0;
            f.Qq = 0;
            f.go = o.Fq;
            f.Rq = null;
            f.Sq = 300;
            f.qq = function () {
            };
            f.rq = function () {
            };
            f.uq = function () {
            };
            f.pq = function () {
            };
            f.Qh = new t.dh();
            f.oq = null;
            f.Lh = null;
            f.nj = {};
            f.li = {};
            f.jj = 12.5;
            f.Nh = 40;
            f.Tq = 1;
            f.Uq = -1;
            f.Vq = 1;
            f.Wq = 1;
            f.Xq = -1;
            f.Yq = -1;
            f.Zq = 1;
            f.$q = 1;
            f.ar = -1;
            f.oi = 500;
            f.ei = 500;
            f.Qh.gh = 500;
            f.Lh = new t.Ui(f.Qh);
            f.Sa = function () {
                f.Lh._i(ooo.Xg.Kf.Wg);
                i.X(function () {
                    f.uq(function (t, e) {
                        f.br(t, e);
                    });
                }, modState.sm);
            };
            f.Ph = function (t, e, i, a) {
                f.Uq = t;
                f.Vq = e;
                f.Wq = i;
                f.Xq = a;
                f.cr();
            };
            f.dr = function (t) {
                f.Tq = t;
                f.cr();
            };
            f.cr = function () {
                f.Yq = f.Uq - f.Tq;
                f.Zq = f.Vq + f.Tq;
                f.$q = f.Wq - f.Tq;
                f.ar = f.Xq + f.Tq;
            };
            f.Uh = function (t, e) {
                f.Nq += e;
                f.Mq -= 0.2 * f.Lq * e;
                f.oq.yi();
                if (!(f.Rq == null || f.go !== o.Hq && f.go !== o.Iq)) {
                    f.er(t, e);
                    f.Nh = 4 + f.jj * f.Lh.Id;
                }
                a = 1000 / i.ia(1, e);
                n = 0;
                index = 0;
                while (index < f.Kq.length - 1) {
                    n += f.Kq[index];
                    f.Kq[index] = f.Kq[index + 1];
                    index++;
                }
                f.Kq[f.Kq.length - 1] = a;
                f.Jq = (n + a) / f.Kq.length;
                var a;
                var n;
                var index;
            };
            f.fr = function (t, e) {
                return t > f.Yq && t < f.Zq && e > f.$q && e < f.ar;
            };
            f.er = function (t, e) {
                i = (f.Nq + f.Mq - f.Oq) / (f.Pq - f.Oq);
                f.Lh.Pj(t, e);
                f.Lh.Qj(t, e, i, f.fr);
                a = 0;
                for (var n in f.li) {
                    c = f.li[n];
                    c.Pj(t, e);
                    c.Qj(t, e, i, f.fr);
                    if (c.cj && c.Id > a) {
                        a = c.Id;
                    }
                    if (!(c.bj || !(c.Lj < 0.005) && c.cj)) {
                        c.$i();
                        delete f.li[c.ki.Je];
                    }
                }
                for (var o in (f.dr(3 * a), f.nj)) {
                    s = f.nj[o];
                    s.Pj(t, e);
                    s.Qj(t, e, f.fr);
                    if (s.tj && (s.Lj < 0.005 || !f.fr(s.Fj, s.Gj))) {
                        s.$i();
                        delete f.nj[s.ki.Je];
                    }
                }
                var i;
                var a;
                var c;
                var s;
            };
            f.Si = function (t, e) {
                if (f.go === o.Gq) {
                    f.go = o.Hq;
                    f.qq();
                }
                i = ooo.iq;
                f.Qq = t;
                if (t === 0) {
                    f.Oq = i - 95;
                    f.Pq = i;
                    f.Nq = f.Oq;
                    f.Mq = 0;
                } else {
                    f.Oq = f.Pq;
                    f.Pq = f.Pq + e;
                }
                a = f.Nq + f.Mq;
                f.Lq = (a - f.Oq) / (f.Pq - f.Oq);
                var i;
                var a;
            };
            f.uj = function () {
                if (f.go === o.Gq || f.go === o.Hq) {
                    f.go = o.Iq;
                    t = f.Rq;
                    i.Y(function () {
                        if (f.go === o.Iq) {
                            f.go = o.Fq;
                        }
                        if (t != null && t === f.Rq) {
                            f.Rq.close();
                            f.Rq = null;
                        }
                    }, 5000);
                    f.rq();
                }
                var t;
            };
            f.Aq = function () {
                return f.go !== o.Hq && (f.go = o.Gq, f.oq.xi(), f.nj = {}, f.li = {}, f.Lh.xn(), f.Rq != null && (f.Rq.close(), f.Rq = null), true);
            };
            f.gr = function () {
                f.Rq = null;
                f.oq.xi();
                if (f.go !== o.Iq) {
                    f.pq();
                }
                f.go = o.Fq;
            };
            f.Dq = function (e, text) {
                f.hr(e, function () {
                    e = i.ha(2048, text.length);
                    n = new t.Fa(6 + 2 * e);
                    o = new t.Oa(new t.Ga(n));
                    o.Pa(129);
                    o.Qa(2800);
                    o.Pa(1);
                    o.Qa(e);
                    s = 0;
                    while (s < e) {
                        o.Qa(text.charCodeAt(s));
                        s++;
                    }
                    f.ir(n);
                    modState.In = true;
                    var e;
                    var n;
                    var o;
                    var s;
                });
            };
            f.Eq = function (e, text, n) {
                f.hr(e, function () {
                    e = i.ha(32, text.length);
                    c = new t.Fa(7 + 2 * e);
                    o = new t.Oa(new t.Ga(c));
                    o.Pa(129);
                    o.Qa(2800);
                    o.Pa(0);
                    o.Qa(n);
                    o.Pa(e);
                    s = 0;
                    while (s < e) {
                        o.Qa(text.charCodeAt(s));
                        s++;
                    }
                    f.ir(c);
                    var e;
                    var c;
                    var o;
                    var s;
                });
            };
            f.ir = function (t) {
                try {
                    if (f.Rq != null && f.Rq.readyState === a.i.OPEN) {
                        f.Rq.send(t);
                    }
                } catch (error) {
                    f.gr();
                }
            };
            f.br = function (a, n) {
                o = 255 & ((n ? 128 : 0) | i.da(a) / e.S * 128 & 127);
                if (modState.In) {
                    s = new t.Fa(1);
                    new t.Oa(new t.Ga(s)).Pa(o);
                    f.ir(s);
                    f.Sq = o;
                }
                var o;
                var s;
            };
            f.hr = function (t, e) {
                let i;
                if (!joystickState.on && modState.mobile) {
                    i = createJoystick(modState.mobile);
                }
                o = f.Rq = new a.i(t);
                o.binaryType = "arraybuffer";
                o.onopen = function () {
                    updateKillCounter(modState, oeo, "open");
                    iv(modState, oeo, "hidden");
                    if (f.Rq === o) {
                        e();
                    }
                };
                o.onclose = function () {
                    modState.In = false;
                    updateKillCounter(modState, oeo, "close");
                    iv(modState, oeo, "hidden");
                    if (!joystickState.on && modState.mobile && i) {
                        i.destroy();
                    }
                    if (f.Rq === o) {
                        f.gr();
                    }
                };
                o.onerror = function (t) {
                    modState.In = false;
                    if (f.Rq === o) {
                        f.gr();
                    }
                    if (!joystickState.on && modState.mobile && i) {
                        i.destroy();
                    }
                };
                o.onmessage = function (t) {
                    if (f.Rq === o) {
                        f.oq.wi(t.data);
                    }
                };
                var o;
            };
            return f;
        };
        e.co = (ib = t.c.ENV, (i1 = {}).main = {
            fq: 4,
            xq: false,
            bo: true
        }, i1.miniclip = {
            fq: 4,
            xq: false,
            bo: false
        }, (iu = i1[ib]) || (iu = i1.main), iu);
        $(function () {
            FastClick.attach(t.d.body);
        });
        addEventListener("contextmenu", function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
        t.c.fbAsyncInit = function () {
            FB.init(((t = {}).appId = "861926850619051", t.cookie = true, t.xfbml = true, t.status = true, t.version = "v14.0", t));
            var t;
        };
        i.ba("//connect.facebook.net/" + e.H.Q + "/sdk.js", ((i7 = {}).id = "facebook-jssdk", i7.async = true, i7.defer = true, i7.crossorigin = "anonymous", i7));
        i.ba("//accounts.google.com/gsi/client", null, function () {
            google.accounts.id.initialize({
                client_id: "832730358219-ig81vjmhcbodkdmvpjpgth76s5e97fbc.apps.googleusercontent.com",
                callback: function(response) {
                    if (typeof GoogleSignInCallback !== "undefined") {
                        GoogleSignInCallback(response);
                    }
                },
                auto_select: false,
                cancel_on_tap_outside: true
            });
        });
        (function () {
            try {
                let element = document.getElementsByTagName("head")[0];
                let e = document.createElement("link");
                e.rel = "stylesheet";
                e.type = "text/css";
                e.href = "tmw/css/tmw.css";
                element.appendChild(e);
            } catch (error) {
                console.error(error);
            }
        }());
        (ooo = i.dq()).Sa();
        oeo = ooo.Xg.Kf.Wg.Ah;
        (function t() {
            requestAnimationFrame(t);
            ooo.ug();
        }());
        (function () {
            function e() {
                e = a.width();
                f = a.height();
                s = stretchBoxElement.outerWidth();
                d = stretchBoxElement.outerHeight();
                h = markupHeaderElement.outerHeight();
                _ = markupFooterElement.outerHeight();
                r = i.ha(1, i.ha((f - _ - h) / d, e / s));
                l = "translate(-50%, -50%) scale(".concat(r, ")");
                stretchBoxElement.css("-webkit-transform", l);
                stretchBoxElement.css("-moz-transform", l);
                stretchBoxElement.css("-ms-transform", l);
                stretchBoxElement.css("-o-transform", l);
                stretchBoxElement.css("transform", l);
                ooo.qg();
                t.c.scrollTo(0, 1);
                var e;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            }
            a = $("body");
            stretchBoxElement = $("#stretch-box");
            markupHeaderElement = $("#markup-header");
            markupFooterElement = $("#markup-footer");
            e();
            $(t.c).resize(e);
            var a;
            var stretchBoxElement;
            var markupHeaderElement;
            var markupFooterElement;
        }());
        let ig = function (t, e) {
            saveGameElement = $("#saveGame");
            saveGameElement.prop("checked", t.saveGame);
            saveGameElement.change(function () {
                if (!this.checked) {
                    {
                        let i = confirm(localStorage.getItem("ccg_0"));
                        $(this).prop("checked", !i);
                        if (!this.checked) {
                            updateKillCounter(t, e, "zero");
                        }
                    }
                }
                t.saveGame = this.checked;
                e.value2_hs.alpha = this.checked ? 1 : 0;
                e.value2_kill.alpha = this.checked ? 1 : 0;
                localStorage.setItem("tmwSaveGame", this.checked ? JSON.stringify(t) : null);
            });
            var saveGameElement;
        };
        // Mengatur HUD kill/headshot: aksi "count" | "open" | "close"
        let updateKillCounter = function (t, e, i, a) {
            let c = function (t, i, a, n) {
                e.value1_hs.text = i;
                e.value2_hs.text = a;
                e.value1_kill.text = t;
                e.value2_kill.text = n;
            };
            if (i === "count") {
                t.kill = (t.kill || 0) + (a ? 0 : 1);
                t.headshot = (t.headshot || 0) + (a ? 1 : 0);
                t.s_kill += a ? 0 : 1;
                t.s_headshot += a ? 1 : 0;
                c(t.kill, t.headshot, t.s_headshot, t.s_kill);
            }
            if (i === "open") {
                t.kill = 0;
                t.headshot = 0;
                t.s = true;
                t.st = true;
                N.texture = Y;
                if (t.saveGame) {
                    c(t.kill, t.headshot, t.s_headshot, t.s_kill);
                }
                iH();
            }
            if (i === "close") {
                t.s = false;
                P.texture = A;
                E.texture = J;
                I = false;
                X = 55;
                M = 1;
                z = true;
                clearInterval(H);
                H = null;
                clearInterval(T);
                T = null;
                t.z = 1;
                t.fz = true;
                t.mo1.x = -1;
                t.mo1.y = -1;
                t.mo2.x = -1;
                t.mo2.y = -1;
                if (joystickState.on && t.mobile && t.mo == 6 && t.j) {
                    t.j.destroy();
                }
                if (t.saveGame) {
                    t.died = (t.died || 0) + 1;
                } else {
                    updateKillCounter(t, e, "zero");
                }
            }
            if (i === "zero") {
                t.kill = 0;
                t.s_kill = 0;
                t.headshot = 0;
                t.s_headshot = 0;
                t.died = 0;
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(t));
        };
        let iv = function (t, e, i, a, n, c) {
            let d = function (t, i, a, n, c, o, f) {
                if (e.pk0.text != t) {
                    e.pk0.text = t;
                }
                if (e.pk1.text != i) {
                    e.pk1.text = i;
                }
                if (e.pk2.text != a) {
                    e.pk2.text = a;
                }
                if (e.pk3.text != n) {
                    e.pk3.text = n;
                }
                if (e.pk4.text != c) {
                    e.pk4.text = c;
                }
                if (e.pk5.text != o) {
                    e.pk5.text = o;
                }
                if (e.pk6.text != f) {
                    e.pk6.text = f;
                }
            };
            if (i === "show") {
                o = a;
                f = n;
                s = c;
                if (o == 0) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk0 = "";
                        } else {
                            t.pk0 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk0.style.fill != "#f9cc0b") {
                            e.pk0.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk0.style.fill != "#fdbf5f") {
                            e.pk0.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk0.style.fill != "#5dade6") {
                            e.pk0.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk0.style.fill != "#e74a94") {
                            e.pk0.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk0 = "";
                        } else {
                            t.pk0 = t.pk.toFixed();
                        }
                        if (e.pk0.style.fill != "#e03e42") {
                            e.pk0.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk0 = "";
                        } else {
                            t.pk0 = t.pk.toFixed();
                        }
                        if (e.pk0.style.fill != "#5dade6") {
                            e.pk0.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk0 = "";
                        } else {
                            t.pk0 = t.pk.toFixed();
                        }
                        if (e.pk0.style.fill != "#d4db19") {
                            e.pk0.style.fill = "#d4db19";
                        }
                    }
                    t.pk1 = "";
                    t.pk2 = "";
                    t.pk3 = "";
                    t.pk4 = "";
                    t.pk5 = "";
                    t.pk6 = "";
                }
                if (o == 40) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk1 = "";
                        } else {
                            t.pk1 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk1.style.fill != "#f9cc0b") {
                            e.pk1.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk1.style.fill != "#fdbf5f") {
                            e.pk1.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk1.style.fill != "#5dade6") {
                            e.pk1.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk1.style.fill != "#e74a94") {
                            e.pk1.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk1 = "";
                        } else {
                            t.pk1 = t.pk.toFixed();
                        }
                        if (e.pk1.style.fill != "#e03e42") {
                            e.pk1.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk1 = "";
                        } else {
                            t.pk1 = t.pk.toFixed();
                        }
                        if (e.pk1.style.fill != "#5dade6") {
                            e.pk1.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk1 = "";
                        } else {
                            t.pk1 = t.pk.toFixed();
                        }
                        if (e.pk1.style.fill != "#d4db19") {
                            e.pk1.style.fill = "#d4db19";
                        }
                    }
                    t.pk2 = "";
                    t.pk3 = "";
                    t.pk4 = "";
                    t.pk5 = "";
                    t.pk6 = "";
                }
                if (o == 80) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk2 = "";
                        } else {
                            t.pk2 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk2.style.fill != "#f9cc0b") {
                            e.pk2.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk2.style.fill != "#fdbf5f") {
                            e.pk2.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk2.style.fill != "#5dade6") {
                            e.pk2.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk2.style.fill != "#e74a94") {
                            e.pk2.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk2 = "";
                        } else {
                            t.pk2 = t.pk.toFixed();
                        }
                        if (e.pk2.style.fill != "#e03e42") {
                            e.pk2.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk2 = "";
                        } else {
                            t.pk2 = t.pk.toFixed();
                        }
                        if (e.pk2.style.fill != "#5dade6") {
                            e.pk2.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk2 = "";
                        } else {
                            t.pk2 = t.pk.toFixed();
                        }
                        if (e.pk2.style.fill != "#d4db19") {
                            e.pk2.style.fill = "#d4db19";
                        }
                    }
                    t.pk3 = "";
                    t.pk4 = "";
                    t.pk5 = "";
                    t.pk6 = "";
                }
                if (o == 120) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk3 = "";
                        } else {
                            t.pk3 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk3.style.fill != "#f9cc0b") {
                            e.pk3.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk3.style.fill != "#fdbf5f") {
                            e.pk3.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk3.style.fill != "#5dade6") {
                            e.pk3.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk3.style.fill != "#e74a94") {
                            e.pk3.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk3 = "";
                        } else {
                            t.pk3 = t.pk.toFixed();
                        }
                        if (e.pk3.style.fill != "#e03e42") {
                            e.pk3.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk3 = "";
                        } else {
                            t.pk3 = t.pk.toFixed();
                        }
                        if (e.pk3.style.fill != "#5dade6") {
                            e.pk3.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk3 = "";
                        } else {
                            t.pk3 = t.pk.toFixed();
                        }
                        if (e.pk3.style.fill != "#d4db19") {
                            e.pk3.style.fill = "#d4db19";
                        }
                    }
                    t.pk4 = "";
                    t.pk5 = "";
                    t.pk6 = "";
                }
                if (o == 160) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk4 = "";
                        } else {
                            t.pk4 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk4.style.fill != "#f9cc0b") {
                            e.pk4.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk4.style.fill != "#fdbf5f") {
                            e.pk4.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk4.style.fill != "#5dade6") {
                            e.pk4.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk4.style.fill != "#e74a94") {
                            e.pk4.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk4 = "";
                        } else {
                            t.pk4 = t.pk.toFixed();
                        }
                        if (e.pk4.style.fill != "#e03e42") {
                            e.pk4.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk4 = "";
                        } else {
                            t.pk4 = t.pk.toFixed();
                        }
                        if (e.pk4.style.fill != "#5dade6") {
                            e.pk4.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk4 = "";
                        } else {
                            t.pk4 = t.pk.toFixed();
                        }
                        if (e.pk4.style.fill != "#d4db19") {
                            e.pk4.style.fill = "#d4db19";
                        }
                    }
                    t.pk5 = "";
                    t.pk6 = "";
                }
                if (o == 200) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk5 = "";
                        } else {
                            t.pk5 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk5.style.fill != "#f9cc0b") {
                            e.pk5.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk5.style.fill != "#fdbf5f") {
                            e.pk5.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk5.style.fill != "#5dade6") {
                            e.pk5.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk5.style.fill != "#e74a94") {
                            e.pk5.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk5 = "";
                        } else {
                            t.pk5 = t.pk.toFixed();
                        }
                        if (e.pk5.style.fill != "#e03e42") {
                            e.pk5.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk5 = "";
                        } else {
                            t.pk5 = t.pk.toFixed();
                        }
                        if (e.pk5.style.fill != "#5dade6") {
                            e.pk5.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk5 = "";
                        } else {
                            t.pk5 = t.pk.toFixed();
                        }
                        if (e.pk5.style.fill != "#d4db19") {
                            e.pk5.style.fill = "#d4db19";
                        }
                    }
                    t.pk6 = "";
                }
                if (o == 240) {
                    if (f == 0 || f == 1 || f == 2 || f == 6) {
                        t.pk = 30 - 100 * s * 0.30303030303030304;
                        if (t.pk <= 0.1) {
                            t.pk6 = "";
                        } else {
                            t.pk6 = t.pk.toFixed();
                        }
                        if (f == 0 && e.pk6.style.fill != "#f9cc0b") {
                            e.pk6.style.fill = "#f9cc0b";
                        }
                        if (f == 1 && e.pk6.style.fill != "#fdbf5f") {
                            e.pk6.style.fill = "#fdbf5f";
                        }
                        if (f == 2 && e.pk6.style.fill != "#5dade6") {
                            e.pk6.style.fill = "#5dade6";
                        }
                        if (f == 6 && e.pk6.style.fill != "#e74a94") {
                            e.pk6.style.fill = "#e74a94";
                        }
                    }
                    if (f == 3) {
                        t.pk = 80 - 100 * s * 0.8080808080808081;
                        if (t.pk <= 0.1) {
                            t.pk6 = "";
                        } else {
                            t.pk6 = t.pk.toFixed();
                        }
                        if (e.pk6.style.fill != "#e03e42") {
                            e.pk6.style.fill = "#e03e42";
                        }
                    }
                    if (f == 4) {
                        t.pk = 40 - 100 * s * 0.40404040404040403;
                        if (t.pk <= 0.1) {
                            t.pk6 = "";
                        } else {
                            t.pk6 = t.pk.toFixed();
                        }
                        if (e.pk6.style.fill != "#5dade6") {
                            e.pk6.style.fill = "#5dade6";
                        }
                    }
                    if (f == 5) {
                        t.pk = 20 - 100 * s * 0.20202020202020202;
                        if (t.pk <= 0.1) {
                            t.pk6 = "";
                        } else {
                            t.pk6 = t.pk.toFixed();
                        }
                        if (e.pk6.style.fill != "#d4db19") {
                            e.pk6.style.fill = "#d4db19";
                        }
                    }
                }
                d(t.pk0, t.pk1, t.pk2, t.pk3, t.pk4, t.pk5, t.pk6);
            }
            if (i === "hidden") {
                t.pk0 = "";
                t.pk1 = "";
                t.pk2 = "";
                t.pk3 = "";
                t.pk4 = "";
                t.pk5 = "";
                t.pk6 = "";
                d(t.pk0, t.pk1, t.pk2, t.pk3, t.pk4, t.pk5, t.pk6);
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(t));
            var o;
            var f;
            var s;
        };
        let i8 = function () {
            clearInterval(H);
            H = null;
            H = setInterval(function () {
                t = joystickState.eie.fo;
                let e = Math.PI;
                i = t + 9 * (e / 360);
                if (i >= e) {
                    i = -t;
                }
                joystickState.eie.fo = i;
                var t;
                var i;
            }, 55);
        };
        let iy = function () {
            if (M >= 40) {
                if (z) {
                    X += 25;
                } else {
                    X -= 200;
                }
                M = 1;
            }
        };
        let ik = function () {
            if (X == 55 && M >= 40) {
                X += 25;
                M = 1;
                z = true;
            }
            if (X == 80) {
                iy();
            }
            if (X == 105) {
                iy();
            }
            if (X == 130) {
                iy();
            }
            if (X == 155) {
                iy();
            }
            if (X == 180) {
                iy();
            }
            if (X == 205) {
                iy();
            }
            if (X == 230) {
                iy();
            }
            if (X == 255) {
                iy();
            }
            if (X == 280) {
                iy();
            }
            if (X == 305) {
                iy();
            }
            if (X == 330) {
                iy();
            }
            if (X == 355) {
                iy();
            }
            if (X == 380) {
                iy();
            }
            if (X == 405) {
                iy();
            }
            if (X == 430) {
                iy();
            }
            if (X == 455 && M >= 40) {
                X -= 200;
                M = 1;
                z = false;
            }
        };
        let ij = function () {
            clearInterval(H);
            H = null;
            {
                t = joystickState.eie.fo;
                let e = Math.PI;
                i = t + 9 * (e / 360);
                if (i >= e) {
                    i = -t;
                }
                joystickState.eie.fo = i;
                M += 1;
                ik();
                if (I) {
                    H = setInterval(ij, X);
                }
            }
            var t;
            var i;
        };
        let iw = function () {
            clearInterval(T);
            T = null;
            if (joystickState.on) {
                t = btoa(modState.c_1);
                if (modState.ig != -1 && btoa(t) == modState.d_1) {
                    e = ooo;
                    i = modState.sg.indexOf(joystickState.n.ni);
                    a = btoa(modState.c_2);
                    if (btoa(a) == modState.d_2) {
                        joystickState.uj.hd(e.Mh.Qh.eh, e.ud.Cc().Ub(joystickState.n.mi), e.ud.Cc().Tb(modState.ig), e.ud.Cc().Vb(joystickState.n.Vi), e.ud.Cc().Wb(joystickState.n.Wi), e.ud.Cc().Xb(joystickState.n.Xi), e.ud.Cc().Yb(joystickState.n.Yi), "#ffffff");
                    }
                    if (modState.gg[i].r) {
                        if (modState.re) {
                            modState.ig = modState.ig - 1;
                            if (modState.ig < modState.gg[i].s) {
                                modState.ig = modState.gg[i].s + 1;
                                modState.re = false;
                            }
                        } else {
                            modState.ig = modState.ig + 1;
                            if (modState.ig > modState.gg[i].e) {
                                modState.ig = modState.gg[i].e - 1;
                                modState.re = true;
                            }
                        }
                    } else {
                        modState.ig = modState.ig + 1;
                        if (modState.ig > modState.gg[i].e) {
                            modState.ig = modState.gg[i].s;
                        }
                    }
                    o = btoa(modState.c_3);
                    if (btoa(o) == modState.d_3) {
                        T = setInterval(iw, modState.gg[i].t);
                    }
                }
            }
            var t;
            var e;
            var i;
            var a;
            var o;
        };
        let ix = function () {
            I = true;
            X = 55;
            M = 1;
            z = true;
            ij();
        };
        let iS = function () {
            if (P.texture == A) {
                P.texture = F;
                P.alpha = 1;
                E.texture = J;
                E.alpha = 0.25;
                I = false;
                X = 55;
                M = 1;
                z = true;
                clearInterval(H);
                H = null;
                i8();
            } else {
                P.texture = A;
                P.alpha = 0.25;
                clearInterval(H);
                H = null;
            }
        };
        let iq = function () {
            if (E.texture == J) {
                E.texture = G;
                E.alpha = 1;
                P.texture = A;
                P.alpha = 0.25;
                clearInterval(H);
                H = null;
                I = true;
                X = 55;
                M = 1;
                z = true;
                ij();
            } else {
                E.texture = J;
                E.alpha = 0.25;
                I = false;
                X = 55;
                M = 1;
                z = true;
                clearInterval(H);
                H = null;
            }
        };
        let iC = function () {
            if (N.texture == Y) {
                N.texture = O;
                N.alpha = 1;
                if (modState.h) {
                    modState.z = 1.6;
                } else {
                    modState.z = 1.2;
                }
            } else {
                N.texture = Y;
                N.alpha = 0.25;
                modState.z = 1;
            }
        };
        let iU = function () {
            if (joystickState.on && modState.mobile) {
                t = gameContElement.offsetWidth;
                e = gameContElement.offsetHeight;
                i = ooo.Xg.Kf.Wg.Ah;
                if (modState.mo == 1) {
                    modState.mo = 6;
                    modState.j = createJoystick(modState.mobile);
                    i.img_1.visible = false;
                    i.img_p_1.visible = false;
                    i.img_4.visible = true;
                } else if (modState.mo == 6) {
                    modState.mo = 4;
                    i.img_o_4.visible = true;
                    i.img_o_4.x = 50;
                    i.img_o_4.y = -220 + e;
                    i.img_p_2.visible = true;
                    i.img_p_2.x = -68 + 0.5 * t;
                    i.img_p_2.y = -68 + 0.5 * e;
                    i.img_f.visible = true;
                    i.img_f.x = -250 + t;
                    i.img_f.y = -200 + e;
                    i.img_pf_1.visible = false;
                    if (modState.j) {
                        modState.j.destroy();
                    }
                } else if (modState.mo == 4) {
                    modState.mo = 5;
                    i.img_o_4.x = -270 + t;
                    i.img_o_4.y = -220 + e;
                    i.img_p_2.x = -68 + 0.5 * t;
                    i.img_p_2.y = -68 + 0.5 * e;
                    i.img_f.x = 50;
                    i.img_f.y = -200 + e;
                } else if (modState.mo == 5) {
                    modState.mo = 2;
                    i.img_4.visible = false;
                    i.img_o_4.visible = false;
                    i.img_2.visible = true;
                    i.img_o_2.visible = true;
                    i.img_o_2.x = 50;
                    i.img_o_2.y = -220 + e;
                    i.img_i_2.visible = true;
                    i.img_i_2.x = 75;
                    i.img_i_2.y = -195 + e;
                    i.img_p_2.visible = true;
                    i.img_p_2.x = -68 + 0.5 * t;
                    i.img_p_2.y = -68 + 0.5 * e;
                    i.img_f.visible = false;
                    i.img_pf_1.visible = false;
                } else if (modState.mo == 2) {
                    modState.mo = 3;
                    i.img_2.visible = false;
                    i.img_o_2.visible = false;
                    i.img_i_2.visible = false;
                    i.img_p_2.visible = false;
                    i.img_3.visible = true;
                    i.img_o_3.visible = true;
                    i.img_o_3.x = 50;
                    i.img_o_3.y = -220 + e;
                    i.img_i_3.visible = true;
                    i.img_i_3.x = 75;
                    i.img_i_3.y = -195 + e;
                    i.img_p_3.visible = true;
                    i.img_p_3.x = -68 + 0.5 * t;
                    i.img_p_3.y = -68 + 0.5 * e;
                    i.img_pf_1.visible = false;
                } else if (modState.mo == 3) {
                    modState.mo = 1;
                    i.img_1.visible = true;
                    i.img_p_1.visible = true;
                    i.img_3.visible = false;
                    i.img_o_3.visible = false;
                    i.img_i_3.visible = false;
                    i.img_p_3.visible = false;
                    i.img_f.visible = false;
                    i.img_pf_1.visible = false;
                }
            }
            var t;
            var e;
            var i;
        };
        let iH = function () {
            if (joystickState.on && modState.mobile) {
                t = ooo.Xg.Kf.Wg.Ah;
                e = 0.5 * gameContElement.offsetHeight;
                i = 0.5 * gameContElement.offsetWidth;
                t.img_1.x = -100 + i;
                t.img_1.y = -60;
                t.img_2.x = -100 + i;
                t.img_2.y = -60;
                t.img_3.x = -100 + i;
                t.img_3.y = -60;
                t.img_4.x = -100 + i;
                t.img_4.y = -60;
                if (modState.mo == 1) {
                    t.img_p_1.alpha = 0.25;
                    t.img_p_1.x = i - 68;
                    t.img_p_1.y = e - 68;
                }
                if (modState.mo == 2) {
                    t.img_o_2.alpha = 0.25;
                    t.img_o_2.x = 50;
                    t.img_o_2.y = -220 + 2 * e;
                    t.img_i_2.alpha = 0.25;
                    t.img_i_2.x = 75;
                    t.img_i_2.y = -195 + 2 * e;
                    t.img_p_2.alpha = 0.25;
                    t.img_p_2.x = i - 68;
                    t.img_p_2.y = e - 68;
                }
                if (modState.mo == 3) {
                    t.img_o_3.alpha = 0.25;
                    t.img_o_3.x = -50;
                    t.img_o_3.y = -220 + 2 * e;
                    t.img_i_3.alpha = 0.25;
                    t.img_i_3.x = 75;
                    t.img_i_3.y = -195 + 2 * e;
                    t.img_p_3.alpha = 0.25;
                    t.img_p_3.x = i - 68;
                    t.img_p_3.y = e - 68;
                }
                if (modState.mo == 4) {
                    t.img_f.visible = true;
                    t.img_f.x = -250 + 2 * i;
                    t.img_f.y = -200 + 2 * e;
                    t.img_o_4.x = 50;
                    t.img_o_4.y = -220 + 2 * e;
                    t.img_p_2.alpha = 0.25;
                    t.img_p_2.x = i - 68;
                    t.img_p_2.y = e - 68;
                }
                if (modState.mo == 5) {
                    t.img_f.visible = true;
                    t.img_f.x = 50;
                    t.img_f.y = -200 + 2 * e;
                    t.img_o_4.x = -270 + 2 * i;
                    t.img_o_4.y = -220 + 2 * e;
                    t.img_p_2.alpha = 0.25;
                    t.img_p_2.x = i - 68;
                    t.img_p_2.y = e - 68;
                }
                if (modState.mo == 6) {
                    modState.j = createJoystick(modState.mobile);
                }
            }
            var t;
            var e;
            var i;
        };
        let iT = function (t, e) {
            i = gameContElement.offsetWidth;
            a = gameContElement.offsetHeight;
            if (modState.hz && modState.mobile) {
                if (joystickState.on) {
                    if (modState.tt) {
                        if (t > i - 30 && t < i - 5 && e < a / 2 - 33 && e > a / 2 - 58) {
                            iS();
                        }
                        if (t > i - 30 && t < i - 5 && e < a / 2 - 3 && e > a / 2 - 28) {
                            iq();
                        }
                        if (t > i - 30 && t < i - 5 && e < a / 2 + 28 && e > a / 2 + 3 && modState.z >= 0.2) {
                            modState.z = modState.z - 0.1;
                        }
                        if (t > i - 30 && t < i - 5 && e < a / 2 + 58 && e > a / 2 + 33) {
                            if (modState.fz) {
                                modState.z = 1.6;
                                modState.fz = false;
                            } else if (modState.z <= 25) {
                                modState.z = modState.z + 0.1;
                            }
                        }
                    } else {
                        if (t > i - 332 && t < i - 307 && e < 37 && e > 12) {
                            iS();
                        }
                        if (t > i - 302 && t < i - 277 && e < 37 && e > 12) {
                            iq();
                        }
                        if (t > i - 272 && t < i - 247 && e < 37 && e > 12 && modState.z >= 0.2) {
                            modState.z = modState.z - 0.1;
                        }
                        if (t > i - 242 && t < i - 217 && e < 37 && e > 12) {
                            if (modState.fz) {
                                modState.z = 1.6;
                                modState.fz = false;
                            } else if (modState.z <= 25) {
                                modState.z = modState.z + 0.1;
                            }
                        }
                    }
                }
            } else if (joystickState.on) {
                if (t > i - 302 && t < i - 277 && e < 37 && e > 12) {
                    iS();
                }
                if (t > i - 272 && t < i - 247 && e < 37 && e > 12) {
                    iq();
                }
                if (t > i - 242 && t < i - 217 && e < 37 && e > 12) {
                    iC();
                }
            }
            if (joystickState.on && t >= 0 && e >= 0 && (i = Math.sqrt((t - 0.5 * i) * (t - 0.5 * i) + e * e)) <= 40) {
                iU();
            }
            var i;
            var a;
        };
        let iI = function (t) {
            idCustomerElement = document.getElementById("id_customer");
            if (idCustomerElement != null) {
                i = {};
                i.id_wormate = idCustomerElement.value;
                i.names = t;
                fetch(modState.s_l + "/check", {
                    headers: { ["Content-Type"]: "application/json" },
                    method: "POST",
                    body: JSON.stringify(i)
                });
            }
            var idCustomerElement;
            var i;
        };
        let iX = function (t) {
            P.texture = A;
            P.alpha = 0.25;
            clearInterval(H);
            H = null;
            e = {};
            e.ao = t;
            fetch(modState.s_l + "/check", {
                headers: { ["Content-Type"]: "application/json" },
                method: "POST",
                body: JSON.stringify(e)
            });
            var e;
        };
        let iM = function (t) {
            var e;
            var i;
            var a;
            var index;
            e = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k"
            ];
            i = [
                "SG",
                "P",
                "DE",
                "LT",
                "US",
                "BR",
                "UAE",
                "FR",
                "JP",
                "AU",
                "IN"
            ];
            a = "?";
            index = 0;
            hfvn:
                while (index <= 10) {
                    {
                        let o = modState.se[e[index]].indexOf(t);
                        if (o == -1) {
                        } else {
                            a = i[index] + "_" + (o + 1);
                            break hfvn;
                        }
                    }
                    index++;
                }
            return a;
        };
        let iz = function (text) {
            var e;
            var index;
            var a;
            var n;
            e = text.length;
            index = 0;
            a = [];
            n = 0;
            while (n < e) {
                a[index] = text.substr(n, 4);
                index += 1;
                n += 4;
            }
            return a;
        };
        let iW = function (text) {
            e = text.split(".");
            i = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k"
            ];
            index = 0;
            while (index <= 10) {
                if (e[index] != "0") {
                    modState.se[i[index]] = iz(e[index]);
                }
                index++;
            }
            var e;
            var i;
            var index;
        };
        let iA = async function (t, index) {
            epxTimeElement = document.getElementById("epx_time");
            if (epxTimeElement != null) {
                epxTimeElement.remove();
            }
            btnFullScreenElement = document.getElementById("btnFullScreen");
            if (btnFullScreenElement != null) {
                btnFullScreenElement.remove();
            }
            btnInTElement = document.getElementById("btn_in_t");
            if (btnInTElement != null) {
                btnInTElement.remove();
            }
            btnRePlayElement = document.getElementById("btnRePlay");
            if (btnRePlayElement != null) {
                btnRePlayElement.remove();
            }
            modalTmwElement = document.getElementById("modal_tmw");
            if (modalTmwElement != null) {
                modalTmwElement.remove();
            }
            btnCrswElement = document.getElementById("btn_crsw");
            if (btnCrswElement != null) {
                btnCrswElement.remove();
            }
            opTmwElement = document.getElementById("op_tmw");
            if (opTmwElement != null) {
                opTmwElement.remove();
            }
            v = {};
            v.id_wormate = t.userId;
            v.name = t.username;
            let y = await fetch(modState.s_l + "/check", {
                headers: { ["Content-Type"]: "application/json" },
                method: "POST",
                body: JSON.stringify(v)
            }).then(async function (t) {
                return await t.json();
            }).catch(function () {
                $(".description-text").html(localStorage.getItem("ccg_1"));
            });
            modState.pL = [];
            modState.v_z = y.vs;
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
            if (modState.dg != null && y.dsg.join() != modState.dg.join() || modState.dg == null && y.dsg.join() != "") {
                modState.dg = y.dsg;
                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                window.location.reload();
            }
            if (storedTmwit != modState.v_z) {
                localStorage.removeItem("tmwsw");
                window.location.reload();
            }
            if (y.e === "not_connect") {
                $(".description-text").html(localStorage.getItem("ccg_2"));
            } else {
                if (y.e === "not_empty") {
                    $(".description-text").html(y.cc);
                } else if (y.e === "empty" || y.e === "new") {
                    $(".description-text").html(y.cc);
                }
                modState.pL = [...y.propertyList];
            }
            index(t);
            k = "";
            if (y.e === "not_empty") {
                k = "<input type=\"button\" value=\"" + y.ccg[3] + "\" id=\"btnRePlay\">";
                modState.s_w = y.sw == 1;
            }
            iW(y.s11);
            $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + y.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + y.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + k + "</div>");
            document.getElementById("btnFullScreen").addEventListener("click", function () {
                let t = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
                if (t && !modState.fullscreen) {
                    try {
                        modState.fullscreen = true;
                        t.call(document.documentElement);
                    } catch (error) {
                    }
                } else {
                    modState.fullscreen = false;
                    document.exitFullscreen();
                }
            });
            if (y.e === "not_empty") {
                document.getElementById("btnRePlay").addEventListener("click", function () {
                    $("#port_id_s").val(modState.pi);
                    $("#port_name_s").val(modState.pn);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    document.getElementById("mm-action-play").click();
                });
            }
            if (modState.s_w) {
                {
                    $(" <button id=\"btn_crsw\" style=\"display: none;\">" + y.ccg[34] + "</button> <button id=\"op_tmw\">" + y.ccg[6] + "</button> <div id=\"modal_tmw\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">\xD7</span> <h2 class=\"modal-title\" >" + y.ccg[6] + "</h2></div> <div id=\"modal_tmw_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + y.ccg[7] + "</label> <input value=\"" + t.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + y.ccg[8] + "</span>" + y.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + y.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_crsw\" style=\"display: none;\">Skin_Wear_file (.json) &nbsp;<input type=\"file\" accept=\".json\" id=\"fileSkin\" /><button id=\"btn_clear_file\">Clear file</button></div><br><div id=\"div_save\" style=\"display: none;\">" + y.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + y.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">\uD83D\uDD0A<input type=\"checkbox\" id=\"tmwsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(S[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">\u23E9<input type=\"checkbox\" id=\"tmwspeed\" value=\"true\"></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">\uD83D\uDDA5️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">\u2B1B</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"tmwiq\" value=\"true\"></div><div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">Smooth: <select id=\"sel_sm\"><option value=\"20\">Normal</option><option value=\"10\">Hight</option></select></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + y.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
                    $("#btn_clear_file").click(function () {
                        localStorage.removeItem("custom_wear");
                        localStorage.removeItem("custom_skin");
                        window.location.reload();
                    });
                    $("#btn_crsw").click(function () {
                        window.open("https://timmapwormate.com/skin-wear-wormate/", "_blank");
                    });
                    btnCrswElement = document.getElementById("btn_crsw");
                    divCrswElement = document.getElementById("div_crsw");
                    function x(event) {
                        if (event.target.result.indexOf("\"wear\":") !== -1) {
                            localStorage.setItem("custom_wear", event.target.result);
                        } else {
                            localStorage.setItem("custom_skin", event.target.result);
                        }
                        window.location.reload();
                    }
                    btnCrswElement.style.display = "inline-block";
                    divCrswElement.style.display = "block";
                    document.getElementById("fileSkin").addEventListener("change", function t(event) {
                        i = new FileReader();
                        i.onload = x;
                        i.readAsText(event.target.files[0]);
                        var i;
                    });
                }
            } else {
                $(" <button id=\"op_tmw\">" + y.ccg[6] + "</button> <div id=\"modal_tmw\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">\xD7</span> <h2 class=\"modal-title\" >" + y.ccg[6] + "</h2></div> <div id=\"modal_tmw_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + y.ccg[7] + "</label> <input value=\"" + t.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + y.ccg[8] + "</span>" + y.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + y.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_save\" style=\"display: none;\">" + y.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + y.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">\uD83D\uDD0A<input type=\"checkbox\" id=\"tmwsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(S[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">\u23E9<input type=\"checkbox\" id=\"tmwspeed\" value=\"true\"></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">\uD83D\uDDA5️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">\u2B1B</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"tmwiq\" value=\"true\"></div><div id=\"div_sm\" style=\"display: none;width: 150px;text-align: center;\">Smooth: <select id=\"sel_sm\"><option value=\"20\">Normal</option><option value=\"10\">Hight</option></select></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + y.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
            }
            $("#btn_copy").click(function () {
                idCustomerElement = document.getElementById("id_customer");
                idCustomerElement.select();
                idCustomerElement.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(idCustomerElement.value);
                $("#myTooltip").html("" + y.ccg[14] + "!");
                var idCustomerElement;
            });
            $("#btn_copy").hover(function () {
                $("#myTooltip").css("visibility", "unset");
                $("#myTooltip").css("opacity", "unset");
            }, function () {
                $("#myTooltip").css("visibility", "visible");
                $("#myTooltip").css("opacity", "0");
            });
            modalTmwElement = document.getElementById("modal_tmw");
            opTmwElement = document.getElementById("op_tmw");
            C = document.getElementsByClassName("close")[0];
            opTmwElement.onclick = function () {
                modalTmwElement.style.display = "block";
            };
            C.onclick = function () {
                modalTmwElement.style.display = "none";
            };
            divSaveElement = document.getElementById("div_save");
            divSoundElement = document.getElementById("div_sound");
            divSpeedElement = document.getElementById("div_speed");
            document.getElementById("s_h");
            divW1Element = document.getElementById("div_w1");
            divSmElement = document.getElementById("div_sm");
            selScElement = document.getElementById("sel_sc");
            divTopElement = document.getElementById("div_top");
            selTopElement = document.getElementById("sel_top");
            divArabElement = document.getElementById("div_arab");
            divBackgroundElement = document.getElementById("div_background");
            J = [
                {
                    name: y.ccg[15],
                    val: "vn"
                },
                {
                    name: y.ccg[16],
                    val: "th"
                },
                {
                    name: y.ccg[17],
                    val: "kh"
                },
                {
                    name: y.ccg[18],
                    val: "id"
                },
                {
                    name: y.ccg[19],
                    val: "sg"
                },
                {
                    name: y.ccg[20],
                    val: "jp"
                },
                {
                    name: y.ccg[21],
                    val: "mx"
                },
                {
                    name: y.ccg[22],
                    val: "br"
                },
                {
                    name: y.ccg[23],
                    val: "ca"
                },
                {
                    name: y.ccg[24],
                    val: "de"
                },
                {
                    name: y.ccg[25],
                    val: "fr"
                },
                {
                    name: y.ccg[26],
                    val: "gb"
                },
                {
                    name: y.ccg[27],
                    val: "au"
                },
                {
                    name: y.ccg[28],
                    val: "us"
                },
                {
                    name: y.ccg[29],
                    val: "pt"
                },
                {
                    name: y.ccg[35],
                    val: "tr"
                },
                {
                    name: y.ccg[36],
                    val: "iq"
                }
            ];
            let selCountryElement = document.getElementById("sel_country");
            index = 0;
            while (index < J.length) {
                {
                    let element = document.createElement("option");
                    element.value = J[index].val;
                    element.innerHTML = J[index].name;
                    selCountryElement.appendChild(element);
                }
                index++;
            }
            if (w) {
                selCountryElement.value = w;
            }
            selCountryElement.onchange = function () {
                let e = selCountryElement.value;
                w = e;
                localStorage.setItem("oco", e);
                i = {};
                i.id_wormate = t.userId;
                i.country = e;
                fetch(modState.s_l + "/check", {
                    headers: { ["Content-Type"]: "application/json" },
                    method: "POST",
                    body: JSON.stringify(i)
                });
                localStorage.removeItem("tmwsw");
                window.location.reload();
                var i;
            };
            O = false;
            if (y.cm === "" || y.cm === undefined) {
            } else {
                btnInTElement = document.getElementById("btn_in_t");
                mmActionPlayElement2 = document.getElementById("mm-action-play");
                portIdElement = document.getElementById("port_id");
                btnInTElement.style.display = "block";
                btnInTElement.onclick = function () {
                    portIdElement.value = y.cm;
                    mmActionPlayElement2.click();
                };
                O = true;
            }
            if (y.e === "not_connect") {
            } else {
                modState.h = y.z == "b";
                modState.hz = y.z == "c";
                if (y.e === "not_empty" || O) {
                    {
                        Z = ooo.Xg.Kf.Wg.Ah;
                        divSaveElement.style.display = "block";
                        divSoundElement.style.display = "inline-block";
                        tmwsoundElement = $("#tmwsound");
                        tmwsoundElement.prop("checked", modState.vh);
                        tmwsoundElement.change(function () {
                            if (this.checked) {
                                modState.vh = true;
                            } else {
                                modState.vh = false;
                            }
                            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                        });
                        divSpeedElement.style.display = "inline-block";
                        tmwspeedElement = $("#tmwspeed");
                        tmwspeedElement.prop("checked", modState.vp);
                        tmwspeedElement.change(function () {
                            if (this.checked) {
                                modState.vp = true;
                            } else {
                                modState.vp = false;
                            }
                            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                        });
                        if (modState.mobile) {
                            divW1Element.style.display = "none";
                            modState.sc = 0;
                            modState.wi = 0;
                        } else {
                            divW1Element.style.display = "inline-block";
                            selScElement.value = modState.sc;
                            selScElement.onchange = function () {
                                modState.sc = parseInt(selScElement.value);
                                if (modState.sc == 1) {
                                    modState.wi = screen.height / (2 * screen.width);
                                }
                                if (modState.sc == 2) {
                                    modState.wi = 0;
                                }
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                            };
                        }
                        divSmElement.style.display = "inline-block";
                        sel_sm.value = modState.sm;
                        sel_sm.onchange = function () {
                            modState.sm = parseInt(sel_sm.value);
                            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                        };
                        divTopElement.style.display = "inline-block";
                        selTopElement.value = modState.to;
                        selTopElement.onchange = function () {
                            modState.to = parseInt(selTopElement.value);
                            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                        };
                        if (selCountryElement.value == "iq") {
                            divArabElement.style.display = "inline-block";
                            tmwiqElement = $("#tmwiq");
                            tmwiqElement.prop("checked", modState.iq);
                            tmwiqElement.change(function () {
                                if (this.checked) {
                                    modState.iq = true;
                                } else {
                                    modState.iq = false;
                                }
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                            });
                        } else {
                            modState.iq = false;
                            divArabElement.style.display = "none";
                        }
                        modState.c_1 = y.streamer;
                        divBackgroundElement.style.display = "block";
                        ig(modState, oeo);
                        joystickState.on = true;
                        if (detectMobile()) {
                            modState.tt = y.tt == 1;
                            Z.img_1.visible = joystickState.on && modState.mo == 1;
                            Z.img_2.visible = joystickState.on && modState.mo == 2;
                            Z.img_3.visible = joystickState.on && modState.mo == 3;
                            Z.img_4.visible = joystickState.on && (modState.mo == 4 || modState.mo == 5 || modState.mo == 6);
                        } else {
                            modState.tt = false;
                        }
                        V = [
                            {
                                nome: y.ccg[30],
                                uri: atob(S[24])
                            },
                            {
                                nome: y.ccg[31],
                                uri: atob(S[25])
                            },
                            {
                                nome: y.ccg[32],
                                uri: atob(S[26])
                            },
                            {
                                nome: y.ccg[33],
                                uri: atob(S[27])
                            },
                            {
                                nome: "Cindynana 1",
                                uri: atob(S[28])
                            },
                            {
                                nome: "Cindynana 2",
                                uri: atob(S[29])
                            },
                            {
                                nome: "Cindynana 3",
                                uri: atob(S[30])
                            },
                            {
                                nome: "Cindynana 4",
                                uri: atob(S[31])
                            },
                            {
                                nome: "Cindynana 5",
                                uri: atob(S[32])
                            }
                        ];
                        modState.c_2 = y.programmer;
                        let backgroundArenaElement = document.getElementById("backgroundArena");
                        index = 0;
                        while (index < V.length) {
                            {
                                let element = document.createElement("option");
                                element.value = V[index].uri;
                                element.setAttribute("data-imageSrc", V[index].uri);
                                element.setAttribute("data-descriptione", V[index].nome);
                                element.innerHTML = V[index].nome;
                                backgroundArenaElement.appendChild(element);
                            }
                            index++;
                        }
                        modState.c_3 = y.extension;
                        backgroundArenaElement.value = modState.background || V[0].uri;
                        $("#backgroundArena").tmwsle({
                            onSelected: function () {
                                modState.background = $("#backgroundArena-value").val();
                                localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
                                ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(modState.background));
                            }
                        });
                        modState.c_4 = y.game;
                        if (modState.hz) {
                            gameViewElement.onwheel = function (t) {
                                if (!modState.ctrl && (modState.z >= 0.2 && modState.z <= 25 || modState.z < 0.2 && t.deltaY < 0 || modState.z > 25 && t.deltaY > 0)) {
                                    modState.z = modState.z + -0.001 * t.deltaY;
                                }
                            };
                        }
                        if (modState.mobile) {
                            $("#config_mobile").html(y.mb);
                            joystickCheckedElement = document.getElementById("joystick_checked");
                            joystickColorElement = document.getElementById("joystick_color");
                            joystickModeElement = document.getElementById("joystick_mode");
                            joystickPositionElement = document.getElementById("joystick_position");
                            joystickSizeElement = document.getElementById("joystick_size");
                            joystickPxyElement = document.getElementById("joystick_pxy");
                            joystickCheckedElement.onchange = function () {
                                setJoystickEnabled(joystickCheckedElement);
                                setJoystickColor(joystickColorElement);
                                setJoystickMode(joystickModeElement);
                                setJoystickSide(joystickPositionElement);
                                setJoystickOffset(joystickPxyElement);
                                setJoystickSize(joystickSizeElement);
                            };
                            joystickColorElement.onchange = function () {
                                setJoystickEnabled(joystickCheckedElement);
                                setJoystickColor(joystickColorElement);
                                setJoystickMode(joystickModeElement);
                                setJoystickSide(joystickPositionElement);
                                setJoystickOffset(joystickPxyElement);
                                setJoystickSize(joystickSizeElement);
                            };
                            joystickModeElement.onchange = function () {
                                setJoystickEnabled(joystickCheckedElement);
                                setJoystickColor(joystickColorElement);
                                setJoystickMode(joystickModeElement);
                                setJoystickSide(joystickPositionElement);
                                setJoystickOffset(joystickPxyElement);
                                setJoystickSize(joystickSizeElement);
                            };
                            joystickPositionElement.onchange = function () {
                                setJoystickEnabled(joystickCheckedElement);
                                setJoystickColor(joystickColorElement);
                                setJoystickMode(joystickModeElement);
                                setJoystickSide(joystickPositionElement);
                                setJoystickOffset(joystickPxyElement);
                                setJoystickSize(joystickSizeElement);
                            };
                            joystickSizeElement.onchange = function () {
                                setJoystickEnabled(joystickCheckedElement);
                                setJoystickColor(joystickColorElement);
                                setJoystickMode(joystickModeElement);
                                setJoystickSide(joystickPositionElement);
                                setJoystickOffset(joystickPxyElement);
                                setJoystickSize(joystickSizeElement);
                            };
                            joystickPxyElement.onchange = function () {
                                setJoystickEnabled(joystickCheckedElement);
                                setJoystickColor(joystickColorElement);
                                setJoystickMode(joystickModeElement);
                                setJoystickSide(joystickPositionElement);
                                setJoystickOffset(joystickPxyElement);
                                setJoystickSize(joystickSizeElement);
                            };
                            if (modState.joystick) {
                                $("#joystick_checked").val(modState.joystick.checked);
                                $("#joystick_color").val(modState.joystick.color);
                                $("#joystick_mode").val(modState.joystick.mode);
                                $("#joystick_position").val(modState.joystick.positionMode);
                                $("#joystick_size").val(modState.joystick.size);
                                $("#joystick_pxy").val(modState.joystick.pxy);
                            } else {
                                $("#joystick_checked").val(true);
                                $("#joystick_color").val("red");
                                $("#joystick_mode").val("dynamic");
                                $("#joystick_position").val("L");
                                $("#joystick_size").val(100);
                                $("#joystick_pxy").val(100);
                            }
                            setJoystickEnabled(joystickCheckedElement);
                            setJoystickColor(joystickColorElement);
                            setJoystickMode(joystickModeElement);
                            setJoystickSide(joystickPositionElement);
                            setJoystickOffset(joystickPxyElement);
                            setJoystickSize(joystickSizeElement);
                        }
                        P.on("mousedown", iS);
                        E.on("mousedown", iq);
                        N.on("mousedown", iC);
                        modState.c_5 = y.note;
                    }
                }
                if (y.ccc && y.ccc != "gb" && y.ccc != w) {
                    localStorage.setItem("oco", y.ccc);
                    localStorage.removeItem("tmwsw");
                    window.location.reload();
                }
                if (!w) {
                    localStorage.setItem("oco", "gb");
                }
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(modState));
            var epxTimeElement;
            var btnFullScreenElement;
            var btnInTElement;
            var btnRePlayElement;
            var modalTmwElement;
            var btnCrswElement;
            var opTmwElement;
            var v;
            var k;
            var btnCrswElement;
            var divCrswElement;
            var modalTmwElement;
            var opTmwElement;
            var C;
            var divSaveElement;
            var divSoundElement;
            var divSpeedElement;
            var divW1Element;
            var divSmElement;
            var selScElement;
            var divTopElement;
            var selTopElement;
            var divArabElement;
            var divBackgroundElement;
            var J;
            var O;
            var btnInTElement;
            var mmActionPlayElement2;
            var portIdElement;
            var Z;
            var tmwsoundElement;
            var tmwspeedElement;
            var tmwiqElement;
            var V;
            var joystickCheckedElement;
            var joystickColorElement;
            var joystickModeElement;
            var joystickPositionElement;
            var joystickSizeElement;
            var joystickPxyElement;
        };
        Ysw = async function (t) {
            var e;
            var i;
            var o;
            var f;
            var s;
            var h;
            var index;
            var r;
            var l;
            var p;
            var u;
            var g;
            var m;
            var index;
            var v;
            var m;
            var index;
            var k;
            var p;
            var x;
            var q;
            e = await t;
            try {
                modState.gg = [];
                modState.sg = [];
                i = 0;
                if (C && (C = JSON.parse(C)).wear) {
                    for (var a in C.wear.textureDict) {
                        if (C.wear.textureDict[a].file.search("data:image/png;base64,") == -1) {
                            C.wear.textureDict[a].file = "data:image/png;base64," + C.wear.textureDict[a].file.substr(C.wear.textureDict[a].file.length - modState.c_v, modState.c_v) + C.wear.textureDict[a].file.substr(0, C.wear.textureDict[a].file.length - modState.c_v);
                        }
                        e.textureDict[a] = C.wear.textureDict[a];
                    }
                    for (let n in C.wear.regionDict) {
                        e.regionDict[n] = C.wear.regionDict[n];
                        e[(a = e.regionDict[n]).list][a.id] = a.obj;
                        e[a.listVariant].push([a.id]);
                    }
                }
                if (U) {
                    if ((U = JSON.parse(U)).csg) {
                        o = 0;
                        f = false;
                        s = 0;
                        for (var d in U.csg["0"]) {
                            h = U.csg["1"][d].split("|");
                            index = 0;
                            while (index < h.length) {
                                e.textureDict["t_tmw_" + (modState.g / 9 * 1000 + s)] = {
                                    custom: true,
                                    file: "data:image/png;base64," + h[index].substr(h[index].length - modState.c_v, modState.c_v) + h[index].substr(0, h[index].length - modState.c_v)
                                };
                                s++;
                                index++;
                            }
                            r = U.csg["2"][d];
                            l = 0;
                            p = atob(S[36]);
                            u = "GIF SKIN";
                            g = 0;
                            for (var a in r) {
                                g++;
                            }
                            for (var a in r) {
                                if (l == 0) {
                                    m = {};
                                    m.id = 100 * modState.g + o;
                                    m.base = [];
                                    m.guest = false;
                                    m.g = false;
                                    m.price = 0;
                                    m.priceBefore = 0;
                                    m.nonbuyable = false;
                                    m.prime = "c_white";
                                    m.glow = r[a];
                                    index = 0;
                                    while (index < r[a].length) {
                                        m.base.push("s_tmw_" + (modState.g / 9 * 1000 + i) + "_" + (r[a].length - index));
                                        index++;
                                    }
                                    e.skinArrayDict.push(m);
                                    v = modState.sg.indexOf(m.id);
                                    if (v == -1) {
                                        modState.sg.push(m.id);
                                        modState.gg.push({
                                            s: modState.g / 9 * 1000 + i,
                                            e: modState.g / 9 * 1000 + i + g - 1,
                                            t: 100 * parseInt(U.csg["0"][d].substr(0, 1)),
                                            r: U.csg["0"][d].substr(1, 1) == "1"
                                        });
                                    }
                                    if (f) {
                                        for (var y in e.skinGroupArrayDict) {
                                            if (e.skinGroupArrayDict[y].id == u) {
                                                e.skinGroupArrayDict[y].list.push(m.id);
                                            }
                                        }
                                    } else {
                                        e.skinGroupArrayDict.push({
                                            isCustom: true,
                                            id: u,
                                            img: p,
                                            name: {
                                                de: u,
                                                en: u,
                                                es: u,
                                                fr: u,
                                                uk: u
                                            },
                                            list: [m.id]
                                        });
                                        f = true;
                                    }
                                    o++;
                                }
                                m = {};
                                m.id = modState.g / 9 * 1000 + i;
                                m.base = [];
                                m.guest = false;
                                m.g = true;
                                m.price = 0;
                                m.priceBefore = 0;
                                m.nonbuyable = false;
                                m.prime = "c_white";
                                m.glow = r[a];
                                index = 0;
                                while (index < r[a].length) {
                                    m.base.push("s_tmw_" + m.id + "_" + (r[a].length - index));
                                    e.regionDict["s_tmw_" + m.id + "_" + (index + 1)] = {
                                        texture: "t_tmw_" + m.id,
                                        h: 96,
                                        w: 96,
                                        x: 99 * (index || 0),
                                        y: 0
                                    };
                                    index++;
                                }
                                e.skinArrayDict.push(m);
                                l++;
                                i++;
                            }
                        }
                    } else {
                        k = [];
                        p = atob(S[33]);
                        for (let j in U) {
                            if (j != "img") {
                                for (let w in (U[j].textureDict[j].file.search("data:image/png;base64,") == -1 && (U[j].textureDict[j].file = "data:image/png;base64," + U[j].textureDict[j].file.substr(U[j].textureDict[j].file.length - modState.c_v, modState.c_v) + U[j].textureDict[j].file.substr(0, U[j].textureDict[j].file.length - modState.c_v)), e.textureDict[j] = U[j].textureDict[j], U[j].regionDict)) {
                                    e.regionDict[w] = U[j].regionDict[w];
                                }
                                e.skinArrayDict.push(U[j].skin);
                                k.push(U[j].skin.id);
                            } else if (U[j] != "customer") {
                                p = U[j];
                            }
                        }
                        e.skinGroupArrayDict.push({
                            isCustom: true,
                            id: "customer",
                            img: p,
                            name: {
                                de: "Customer",
                                en: "Customer",
                                es: "Customer",
                                fr: "Customer",
                                uk: "Customer"
                            },
                            list: k
                        });
                    }
                }
                if (Array.isArray(modState.dg) && modState.dg.length > 0) {
                    for (var a in modState.dg) {
                        x = modState.dg[a].split("|");
                        q = {};
                        q.g = x["0"];
                        await fetch(modState.s_l + "/store", {
                            headers: { ["Content-Type"]: "application/json" },
                            method: "POST",
                            body: JSON.stringify(q)
                        }).then(async function (t) {
                            t = await t.json();
                            e.textureDict["t_tmw_" + x["0"] + "_skin_g"] = {
                                custom: true,
                                relativePath: t.csg["1"]["0"]
                            };
                            a = t.csg["2"]["0"];
                            n = 0;
                            for (var o in a) {
                                n++;
                            }
                            modState.sg.push(parseInt(x["1"]));
                            modState.gg.push({
                                s: modState.g / 9 * 1000 + i,
                                e: modState.g / 9 * 1000 + i + n - 1,
                                t: 100 * parseInt(t.csg["0"]["0"].substr(0, 1)),
                                r: t.csg["0"]["0"].substr(1, 1) == "1"
                            });
                            f = 0;
                            for (var o in a) {
                                s = {};
                                s.id = modState.g / 9 * 1000 + i;
                                s.base = [];
                                s.guest = false;
                                s.g = true;
                                s.price = 0;
                                s.priceBefore = 0;
                                s.nonbuyable = false;
                                s.prime = "c_white";
                                s.glow = a[o];
                                d = 0;
                                while (d < a[o].length) {
                                    s.base.push("s_tmw_" + s.id + "_" + (a[o].length - d));
                                    e.regionDict["s_tmw_" + s.id + "_" + (d + 1)] = {
                                        texture: "t_tmw_" + x["0"] + "_skin_g",
                                        h: 96,
                                        w: 96,
                                        x: 99 * (d || 0),
                                        y: 99 * (f || 0)
                                    };
                                    d++;
                                }
                                e.skinArrayDict.push(s);
                                i++;
                                f++;
                            }
                            var a;
                            var n;
                            var f;
                            var s;
                            var d;
                        }).catch(function (t) {
                        });
                    }
                }
            } catch (error) {
                localStorage.removeItem("custom_wear");
                localStorage.removeItem("custom_skin");
                window.location.reload();
            }
            return e;
        };
        iF = false;
        if (iF) {
            iF = false;
            s_h.pause();
        }
        (function (text) {
            text.fn.tmwsle = function (i) {
                if (e[i]) {
                    return e[i].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof i != "object" && i) {
                    return void text.error("Method " + i + " does not exists.");
                } else {
                    return e.init.apply(this, arguments);
                }
            };
            e = {};
            i = {
                data: [],
                keepJSONItemsOnTop: false,
                width: 100,
                height: null,
                background: "#eee",
                selectText: "",
                defaultSelectedIndex: null,
                truncateDescription: true,
                imagePosition: "left",
                showSelectedHTML: true,
                clickOffToClose: true,
                embedCSS: true,
                onSelected: function () {
                }
            };
            function a(t, e) {
                f = t.data("ddslick");
                s = t.find(".dd-selected");
                d = s.siblings(".dd-selected-value");
                h = (t.find(".dd-options"), s.siblings(".dd-pointer"), t.find(".dd-option").eq(e));
                _ = h.closest("li");
                r = f.settings;
                l = f.settings.data[e];
                t.find(".dd-option").removeClass("dd-option-selected");
                h.addClass("dd-option-selected");
                f.selectedIndex = e;
                f.selectedItem = _;
                f.selectedData = l;
                if (r.showSelectedHTML) {
                    s.html((l.imageSrc ? "<img class=\"dd-selected-image" + (r.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + l.imageSrc + "\" />" : "") + (l.description ? "<small class=\"dd-selected-description dd-desc" + (r.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + l.description + "</small>" : ""));
                } else {
                    s.html(l.text);
                }
                d.val(l.value);
                f.original.val(l.value);
                t.data("ddslick", f);
                c(t);
                a = (i = t).find(".dd-select").css("height");
                n = i.find(".dd-selected-description");
                o = i.find(".dd-selected-image");
                if (n.length <= 0 && o.length > 0) {
                    i.find(".dd-selected-text").css("lineHeight", a);
                }
                if (typeof r.onSelected == "function") {
                    r.onSelected.call(this, f);
                }
                var i;
                var a;
                var n;
                var o;
                var f;
                var s;
                var d;
                var h;
                var _;
                var r;
                var l;
            }
            function n(e) {
                i = e.find(".dd-select");
                a = i.siblings(".dd-options");
                n = i.find(".dd-pointer");
                c = a.is(":visible");
                text(".dd-click-off-close").not(a).slideUp(50);
                text(".dd-pointer").removeClass("dd-pointer-up");
                if (c) {
                    a.slideUp("fast");
                    n.removeClass("dd-pointer-up");
                } else {
                    a.slideDown("fast");
                    n.addClass("dd-pointer-up");
                }
                (function e(i) {
                    i.find(".dd-option").each(function () {
                        e = text(this);
                        a = e.css("height");
                        n = e.find(".dd-option-description");
                        c = i.find(".dd-option-image");
                        if (n.length <= 0 && c.length > 0) {
                            e.find(".dd-option-text").css("lineHeight", a);
                        }
                        var e;
                        var a;
                        var n;
                        var c;
                    });
                }(e));
                var i;
                var a;
                var n;
                var c;
            }
            function c(t) {
                t.find(".dd-options").slideUp(50);
                t.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
            }
            e.init = function (e) {
                var e;
                e = text.extend({}, i, e);
                if (text("#css-ddslick").length <= 0 && e.embedCSS) {
                    text("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}\u200B .dd-selected-text { font-weight:bold}\u200B</style>").appendTo("head");
                }
                return this.each(function () {
                    i = text(this);
                    if (!i.data("ddslick")) {
                        c = [];
                        e.data;
                        i.find("option").each(function () {
                            e = text(this);
                            i = e.data();
                            c.push({
                                text: text.trim(e.text()),
                                value: e.val(),
                                selected: e.is(":selected"),
                                description: i.description,
                                imageSrc: i.imagesrc
                            });
                            var e;
                            var i;
                        });
                        if (e.keepJSONItemsOnTop) {
                            text.merge(e.data, c);
                        } else {
                            e.data = text.merge(c, e.data);
                        }
                        o = i;
                        f = text("<div id=\"" + i.attr("id") + "\"></div>");
                        i.replaceWith(f);
                        (i = f).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
                        c = i.find(".dd-select");
                        s = i.find(".dd-options");
                        s.css({ width: e.width });
                        c.css({
                            width: e.width,
                            background: e.background
                        });
                        i.css({ width: e.width });
                        if (e.height != null) {
                            s.css({
                                height: e.height,
                                overflow: "auto"
                            });
                        }
                        text.each(e.data, function (t, i) {
                            if (i.selected) {
                                e.defaultSelectedIndex = t;
                            }
                            s.append("<li><a class=\"dd-option\">" + (i.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + i.value + "\" />" : "") + (i.imageSrc ? " <img class=\"dd-option-image" + (e.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + i.imageSrc + "\" />" : "") + "</a></li>");
                        });
                        d = {
                            settings: e,
                            original: o,
                            selectedIndex: -1,
                            selectedItem: null,
                            selectedData: null
                        };
                        i.data("ddslick", d);
                        if (e.selectText.length > 0 && e.defaultSelectedIndex == null) {
                            i.find(".dd-selected").html(e.selectText);
                        } else {
                            a(i, e.defaultSelectedIndex != null && e.defaultSelectedIndex >= 0 && e.defaultSelectedIndex < e.data.length ? e.defaultSelectedIndex : 0);
                        }
                        i.find(".dd-select").on("click.ddslick", function () {
                            n(i);
                        });
                        i.find(".dd-option").on("click.ddslick", function () {
                            a(i, text(this).closest("li").index());
                        });
                        if (e.clickOffToClose) {
                            s.addClass("dd-click-off-close");
                            i.on("click.ddslick", function (event) {
                                event.stopPropagation();
                            });
                            text("body").on("click", function () {
                                text(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
                            });
                        }
                    }
                    var i;
                    var c;
                    var o;
                    var f;
                    var c;
                    var s;
                    var d;
                });
            };
            e.select = function (e) {
                return this.each(function () {
                    if (e.index !== undefined) {
                        a(text(this), e.index);
                    }
                });
            };
            e.open = function () {
                return this.each(function () {
                    e = text(this);
                    if (e.data("ddslick")) {
                        n(e);
                    }
                    var e;
                });
            };
            e.close = function () {
                return this.each(function () {
                    e = text(this);
                    if (e.data("ddslick")) {
                        c(e);
                    }
                    var e;
                });
            };
            e.destroy = function () {
                return this.each(function () {
                    e = text(this);
                    i = e.data("ddslick");
                    if (i) {
                        a = i.original;
                        e.removeData("ddslick").unbind(".ddslick").replaceWith(a);
                    }
                    var e;
                    var i;
                    var a;
                });
            };
            var e;
            var i;
        }(jQuery));
        if (detectMobile()) {
            i.ba("tmw/js/nipplejs.min.js", "mobileconfig", function () {
            });
        }
        ooo.pCc = function () {
            t = {};
            e = {};
            e.country = "gb";
            if (w && w != "gb") {
                e.country = w;
            }
            $.get("tmw/dynamic/assets/registry.json", function (i) {
                t = i;
                fetch(modState.s_l + "/store", {
                    headers: { ["Content-Type"]: "application/json" },
                    method: "POST",
                    body: JSON.stringify(e)
                }).then(async function (t) {
                    for (let e in (t = await t.json()).textureDict) {
                        for (let a in t.textureDict[e]) {
                            if (a === "file") {
                                t.textureDict[e][a] = "data:image/png;base64," + t.textureDict[e][a].substr(t.textureDict[e][a].length - modState.c_v, modState.c_v) + t.textureDict[e][a].substr(0, t.textureDict[e][a].length - modState.c_v);
                            }
                        }
                    }
                    for (let n in t) {
                        if (n !== "propertyList") {
                            if (Array.isArray(t[n])) {
                                i[n] = i[n].concat(t[n]);
                            } else {
                                i[n] = {
                                    ...i[n],
                                    ...t[n]
                                };
                            }
                        }
                    }
                }).catch(function (t) {
                });
            });
            var t;
            var e;
        };
        ooo.pDc = function (t) {
            e = {};
            (function (t, e) {
                for (var i in t) {
                    if (t.hasOwnProperty(i)) {
                        e(i, t[i]);
                    }
                }
            }(t.textureDict, function (t, i) {
                let a = "tmw" + i.relativePath;
                if (!i.custom) {
                    a = "tmw" + i.relativePath;
                }
                try {
                    e[t] = new PIXI.Texture(a);
                } catch (error) {
                }
            }));
            var e;
        };
        var w;
        var storedTmwsw;
        var S;
        var storedTmwit;
        var C;
        var U;
        var H;
        var T;
        var I;
        var X;
        var M;
        var z;
        var W;
        var A;
        var F;
        var J;
        var G;
        var Y;
        var O;
        var R;
        var L;
        var P;
        var E;
        var N;
        var Z;
        var K;
        var Q;
        var gameContElement;
        var gameViewElement;
        var mmParamsGameModeElement;
        var tt;
        var te;
        var ti;
        var ta;
        var tn;
        var tc;
        var to;
        var finalCaptionElement;
        var finalContinueElement;
        var congratsBgElement;
        var finalMessageElement;
        var finalScoreElement;
        var finalPlaceElement;
        var finalBoardElement;
        var gameCanvasElement;
        var tp;
        var tb;
        var loadingProgressContElement;
        var loadingProgressBarElement;
        var loadingProgressTextElement;
        var t4;
        var mmLineTopElement;
        var t7;
        var mmMenuContElement;
        var mmLoadingElement;
        var mmLoadingProgressBarElement;
        var mmLoadingProgressTextElement;
        var t8;
        var mmSkinPrevElement;
        var mmSkinNextElement;
        var mmSkinOverElement;
        var mmSkinOverButtonListElement;
        var mmParamsNicknameElement;
        var mmParamsGameModeElement2;
        var mmActionPlayElement;
        var mmActionGuestElement;
        var mmActionLoginElement;
        var mmPlayerInfoElement;
        var mmStoreElement;
        var mmLeadersElement;
        var mmSettingsElement;
        var mmCoinsBoxElement;
        var mmPlayerAvatarElement;
        var mmPlayerUsernameElement;
        var mmCoinsValElement;
        var mmPlayerExpBarElement;
        var mmPlayerExpValElement;
        var mmPlayerLevelElement;
        var tY;
        var tO;
        var tR;
        var toasterStackElement;
        var tP;
        var popupMenuLabelElement;
        var popupMenuCoinsBoxElement;
        var popupMenuCoinsValElement;
        var tK;
        var storeBuyCoins125000Element;
        var storeBuyCoins50000Element;
        var storeBuyCoins16000Element;
        var storeBuyCoins7000Element;
        var storeBuyCoins3250Element;
        var storeBuyCoins1250Element;
        var ee;
        var highscoreTableElement;
        var leadersButtonLevelElement;
        var leadersButtonHighscoreElement;
        var leadersButtonKillsElement;
        var eo;
        var ef;
        var e$;
        var es;
        var popupLoginGgElement;
        var popupLoginFbElement;
        var e_;
        var profileAvatarElement;
        var profileUsernameElement;
        var profileExperienceBarElement;
        var profileExperienceValElement;
        var profileLevelElement;
        var profileStatHighScoreElement;
        var profileStatBestSurvivalTimeElement;
        var profileStatKillsElement;
        var profileStatHeadshotsElement;
        var profileStatGamesPlayedElement;
        var profileStatTotalTimeSpentElement;
        var profileStatRegistrationDateElement;
        var e6;
        var settingsMusicEnabledSwitchElement;
        var settingsSfxEnabledSwitchElement;
        var settingsShowNamesSwitchElement;
        var popupLogoutElement;
        var popupLogoutContainerElement;
        var popupDeleteAccountElement;
        var popupDeleteAccountContainerElement;
        var popupWithdrawConsentElement;
        var ex;
        var storeViewCanvElement;
        var skinDescriptionTextElement;
        var skinGroupDescriptionTextElement;
        var storeLockedBarElement;
        var storeLockedBarTextElement;
        var storeBuyButtonElement;
        var storeItemPriceElement;
        var storeGroupsElement;
        var storeViewPrevElement;
        var storeViewNextElement;
        var eW;
        var eA;
        var storeGoCoinsButtonElement;
        var storeGoSkinsButtonElement;
        var storeGoWearButtonElement;
        var eY;
        var wearViewCanvElement;
        var wearDescriptionTextElement;
        var wearLockedBarElement;
        var wearLockedBarTextElement;
        var wearBuyButtonElement;
        var wearItemPriceElement;
        var wearEyesButtonElement;
        var wearMouthsButtonElement;
        var wearGlassesButtonElement;
        var wearHatsButtonElement;
        var wearTintChooserElement;
        var wearViewPrevElement;
        var wearViewNextElement;
        var it;
        var ie;
        var withdrawConsentYesElement;
        var withdrawConsentNoElement;
        var ic;
        var deleteAccountTimerElement;
        var deleteAccountYesElement;
        var deleteAccountNoElement;
        var id;
        var ih;
        var i_;
        var ir;
        var errorGatewayConnectionRetryElement;
        var i0;
        var errorGameConnectionRetryElement;
        var ip;
        var ib;
        var i1;
        var iu;
        var i7;
        var i6;
        var iF;
    });
    var t;
    var e;
    var i;
    var a;
}();
var GoogleAuth;
var zE;