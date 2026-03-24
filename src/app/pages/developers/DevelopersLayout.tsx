import { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import logo from "../../../assets/logo/logo.png";
import {
    ChevronDown,
    Globe,
    ShieldCheck,
    Boxes,
    Menu,
    X,
    } from "lucide-react";
    import { useLanguage } from "../../contexts/LanguageContext";
    import "./DevelopersLayout.css";

    type NavItem = {
    label: string;
    to: string;
    end?: boolean;
    };

    type NavGroup = {
    key: string;
    label: string;
    icon: React.ElementType;
    items: NavItem[];
    matchPaths: string[];
    };

    export function DevelopersLayout() {
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();

    const [openGroup, setOpenGroup] = useState<string | null>(null);
    const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navRef = useRef<HTMLDivElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    const pathname = location.pathname;

    const directNavItems: NavItem[] = [
        { label: t("Guides", "가이드", "ガイド", "指南"), to: "/developers", end: true },
        { label: t("API Reference", "API 레퍼런스", "APIリファレンス", "API参考"), to: "/developers/api" },
        { label: t("SDK", "SDK", "SDK", "SDK"), to: "/developers/sdk" },
        { label: t("Change Log", "변경사항", "変更履歴", "更新日志"), to: "/developers/changelog" },
    ];

    const navGroups: NavGroup[] = useMemo(
        () => [
        {
            key: "security",
            label: t("Security", "보안", "セキュリティ", "安全"),
            icon: ShieldCheck,
            matchPaths: [
            "/developers/authentication",
            "/developers/webhooks",
            "/developers/errors",
            "/developers/rate-limits",
            ],
            items: [
            { label: t("Authentication", "인증", "認証", "认证"), to: "/developers/authentication" },
            { label: t("Webhooks", "웹훅", "Webhooks", "Webhooks"), to: "/developers/webhooks" },
            { label: t("Errors", "오류 코드", "エラーコード", "错误代码"), to: "/developers/errors" },
            { label: t("Rate Limits", "호출 제한", "レート制限", "速率限制"), to: "/developers/rate-limits" },
            ],
        },
        {
            key: "resources",
            label: t("Resources", "리소스", "リソース", "资源"),
            icon: Boxes,
            matchPaths: [
            "/developers/sandbox",
            "/developers/examples",
            "/developers/partners",
            "/developers/preregister",
            ],
            items: [
            { label: t("Sandbox", "샌드박스", "サンドボックス", "沙盒"), to: "/developers/sandbox" },
            { label: t("Examples", "예제 코드", "サンプル", "示例"), to: "/developers/examples" },
            { label: t("Partners", "파트너", "パートナー", "合作伙伴"), to: "/developers/partners" },
            { label: t("Pre-register", "사전등록", "事前登録", "预注册"), to: "/developers/preregister" },
            ],
        },
        ],
        [t]
    );

    const isGroupActive = (group: NavGroup) =>
        group.matchPaths.some((path) => pathname.startsWith(path));

    const handleToggleGroup = (groupKey: string) => {
        setOpenGroup((prev) => (prev === groupKey ? null : groupKey));
    };

    const handleToggleMobileGroup = (groupKey: string) => {
        setMobileOpenGroup((prev) => (prev === groupKey ? null : groupKey));
    };

    const handleCloseMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileOpenGroup(null);
    };

    useEffect(() => {
        setOpenGroup(null);
        setMobileOpenGroup(null);
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        const clickedOutsideDesktop =
            navRef.current && !navRef.current.contains(target);

        const clickedOutsideMobile =
            mobileMenuRef.current && !mobileMenuRef.current.contains(target);

        if (clickedOutsideDesktop) {
            setOpenGroup(null);
        }

        if (mobileMenuOpen && clickedOutsideMobile) {
            setMobileMenuOpen(false);
            setMobileOpenGroup(null);
        }
        };

        const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setOpenGroup(null);
            setMobileMenuOpen(false);
            setMobileOpenGroup(null);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEsc);
        };
    }, [mobileMenuOpen]);

    return (
        <div className="developers-layout">
        <header className="developers-layout__topbar">
            <div className="developers-layout__inner">
            <NavLink to="/" className="developers-layout__brand">
                <div className="developers-layout__brand-badge">
                <img
                    src={logo}
                    alt="KORION logo"
                    className="developers-layout__brand-logo"
                />
                </div>
                <span className="developers-layout__brand-text">
                {t("KORION Developers", "KORION 개발자", "KORION開発者", "KORION开发者")}
                </span>
            </NavLink>

            {/* PC NAV */}
            <nav className="developers-layout__nav" ref={navRef}>
                {directNavItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                    `developers-layout__nav-link ${isActive ? "is-active" : ""}`
                    }
                >
                    {item.label}
                </NavLink>
                ))}

                {navGroups.map((group) => {
                const Icon = group.icon;
                const active = isGroupActive(group);
                const open = openGroup === group.key;

                return (
                    <div
                    key={group.key}
                    className={`developers-layout__group ${active ? "is-active" : ""} ${open ? "is-open" : ""}`}
                    >
                    <button
                        type="button"
                        className="developers-layout__group-trigger"
                        onClick={() => handleToggleGroup(group.key)}
                    >
                        <span className="developers-layout__group-trigger-left">
                        <Icon size={15} />
                        <span>{group.label}</span>
                        </span>
                        <ChevronDown
                        size={15}
                        className="developers-layout__group-chevron"
                        />
                    </button>

                    <div className="developers-layout__group-menu">
                        <div className="developers-layout__group-menu-list">
                        {group.items.map((item) => (
                            <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `developers-layout__group-link ${isActive ? "is-active" : ""}`
                            }
                            >
                            {item.label}
                            </NavLink>
                        ))}
                        </div>
                    </div>
                    </div>
                );
                })}
            </nav>

            {/* PC ACTIONS */}
            <div className="developers-layout__actions">
                <button
                type="button"
                className="developers-layout__translate"
                onClick={toggleLanguage}
                >
                <Globe size={16} />
                <span>{language}</span>
                </button>

                <NavLink
                to="/developers/preregister"
                className="developers-layout__preregister"
                >
                {t("Pre-register", "사전등록", "事前登録", "预注册")}
                </NavLink>
            </div>

            {/* MOBILE TOGGLE */}
            <button
                type="button"
                className="developers-layout__mobile-toggle"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                if (mobileMenuOpen) {
                    setMobileOpenGroup(null);
                }
                }}
            >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            </div>

            {/* MOBILE MENU */}
            <div
            ref={mobileMenuRef}
            className={`developers-layout__mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}
            >
            <div className="developers-layout__mobile-menu-inner">
                {directNavItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={handleCloseMobileMenu}
                    className={({ isActive }) =>
                    `developers-layout__mobile-link ${isActive ? "is-active" : ""}`
                    }
                >
                    {item.label}
                </NavLink>
                ))}

                {navGroups.map((group) => {
                const Icon = group.icon;
                const active = isGroupActive(group);
                const open = mobileOpenGroup === group.key;

                return (
                    <div
                    key={group.key}
                    className={`developers-layout__mobile-group ${active ? "is-active" : ""} ${open ? "is-open" : ""}`}
                    >
                    <button
                        type="button"
                        className="developers-layout__mobile-group-trigger"
                        onClick={() => handleToggleMobileGroup(group.key)}
                    >
                        <span className="developers-layout__mobile-group-trigger-left">
                        <Icon size={15} />
                        <span>{group.label}</span>
                        </span>
                        <ChevronDown
                        size={16}
                        className="developers-layout__mobile-group-chevron"
                        />
                    </button>

                    <div className="developers-layout__mobile-group-menu">
                        {group.items.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={handleCloseMobileMenu}
                            className={({ isActive }) =>
                            `developers-layout__mobile-sublink ${isActive ? "is-active" : ""}`
                            }
                        >
                            {item.label}
                        </NavLink>
                        ))}
                    </div>
                    </div>
                );
                })}

                <div className="developers-layout__mobile-actions">
                <button
                    type="button"
                    className="developers-layout__translate developers-layout__translate--mobile"
                    onClick={toggleLanguage}
                >
                    <Globe size={16} />
                    <span>{language}</span>
                </button>

                <NavLink
                    to="/developers/preregister"
                    className="developers-layout__preregister developers-layout__preregister--mobile"
                    onClick={handleCloseMobileMenu}
                >
                    {t("Pre-register", "사전등록", "事前登録", "预注册")}
                </NavLink>
                </div>
            </div>
            </div>
        </header>

        <main className="developers-layout__content">
            <Outlet />
        </main>
        </div>
    );
    }