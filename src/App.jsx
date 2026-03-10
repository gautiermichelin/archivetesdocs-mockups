import { useState } from "react";

// ============================================================
// ArchiveTesDocs — UI Redesign Mockups
// Design: Modern archival — structured, warm, professional
// Fonts: DM Sans + Lexend Deca (700)
// Palette: Navy, archival blue, warm sand, gold accent
// ============================================================

const C = {
  navy: "#0F1B2D",
  blue: "#2563EB",
  bluePale: "#EFF6FF",
  blueBorder: "#BFDBFE",
  gold: "#D97706",
  goldLight: "#FEF3C7",
  goldBorder: "#FDE68A",
  sand: "#FEFBF6",
  white: "#FFFFFF",
  g50: "#F9FAFB",
  g100: "#F3F4F6",
  g200: "#E5E7EB",
  g300: "#D1D5DB",
  g400: "#9CA3AF",
  g500: "#6B7280",
  g600: "#4B5563",
  g700: "#374151",
  red: "#DC2626",
  redPale: "#FEF2F2",
  green: "#059669",
  greenPale: "#ECFDF5",
};

const VIEWS = ["Accueil", "Utilisateurs", "Services", "File de transfert", "Demandes (modale)", "Saisie d'archive"];

const BEFORE_IMAGES = [
  "before/accueil.png",
  "before/utilisateurs.png",
  "before/services.png",
  "before/transfert.png",
  "before/demandes.png",
  "before/saisie.png",
];

const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const d = {
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    list: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    send: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    undo: <><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
    move: <><polyline points="5 9 2 12 5 15"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/></>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check: <><polyline points="20 6 9 17 4 12"/></>,
    chevDown: <><polyline points="6 9 12 15 18 9"/></>,
    printer: <><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></>,
    tag: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    archive: <><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></>,
    folder: <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>,
  };
  return <svg {...p}>{d[name]}</svg>;
};

// ---- Shared Components ----

const Logo = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
    <img
      src="https://demo-archimage.ideesculture.fr/img/Logo_Archive_Tes_Docs.svg"
      alt="ArchiveTesDocs"
      style={{ width: "100%", maxWidth: 200, height: "auto" }}
    />
    <div style={{ fontSize: 10, color: C.g400, letterSpacing: 1.5, textTransform: "uppercase" }}>Gestion d'archives</div>
  </div>
);

const Badge = ({ count, color = C.blue, bg = C.bluePale }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    minWidth: 22, height: 22, borderRadius: 11, padding: "0 7px",
    fontSize: 12, fontWeight: 600, color, background: bg,
  }}>{count}</span>
);

const Btn = ({ children, variant = "primary", icon, onClick, style: s, small }) => {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 6,
    border: "none", borderRadius: 8, cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
    fontSize: small ? 13 : 14, padding: small ? "6px 12px" : "10px 18px",
    transition: "all 0.15s ease",
  };
  const v = {
    primary: { background: C.blue, color: C.white },
    secondary: { background: C.g100, color: C.g700 },
    ghost: { background: "transparent", color: C.g500, padding: "6px 8px" },
    danger: { background: C.redPale, color: C.red },
    gold: { background: C.goldLight, color: C.gold, border: `1px solid ${C.goldBorder}` },
  };
  return <button onClick={onClick} style={{ ...base, ...v[variant], ...s }}>{icon && <Icon name={icon} size={small ? 14 : 16} />}{children}</button>;
};

const SearchInput = ({ style: s }) => (
  <div style={{ position: "relative", ...s }}>
    <input placeholder="Rechercher…" style={{
      width: "100%", border: `1px solid ${C.g200}`, borderRadius: 8,
      padding: "8px 12px 8px 34px", fontSize: 13, fontFamily: "'DM Sans', sans-serif",
      background: C.white, color: C.g700, outline: "none",
    }} />
    <div style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
      <Icon name="search" size={16} color={C.g400} />
    </div>
  </div>
);

const Card = ({ children, style: s }) => (
  <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.g200}`, ...s }}>{children}</div>
);

const TabBar = ({ tabs, active, onChange }) => (
  <div style={{ display: "flex", gap: 0, borderBottom: `2px solid ${C.g200}`, marginBottom: 24, overflow: "auto" }}>
    {tabs.map((t, i) => (
      <button key={i} onClick={() => onChange?.(i)} style={{
        padding: "12px 20px", border: "none", background: "transparent",
        fontSize: 13, fontWeight: active === i ? 600 : 400,
        color: active === i ? C.blue : C.g500,
        borderBottom: `2px solid ${active === i ? C.blue : "transparent"}`,
        marginBottom: -2, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
        whiteSpace: "nowrap", transition: "all 0.15s",
      }}>{t}</button>
    ))}
  </div>
);

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} style={{
    display: "flex", alignItems: "center", gap: 10, width: "100%",
    padding: "9px 14px", border: "none", borderRadius: 8,
    background: active ? C.bluePale : "transparent",
    color: active ? C.blue : C.g600, cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif", fontSize: 13.5,
    fontWeight: active ? 600 : 400, textAlign: "left", transition: "all 0.12s ease",
  }}>
    <Icon name={icon} size={18} color={active ? C.blue : C.g400} />
    <span style={{ flex: 1 }}>{label}</span>
  </button>
);

const FormField = ({ label, required, children, half }) => (
  <div style={{ marginBottom: 16, width: half ? "48%" : "100%" }}>
    <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: C.g700 }}>
      {label}{required && <span style={{ color: C.red, marginLeft: 2 }}>*</span>}
    </label>
    {children}
  </div>
);

const Input = ({ placeholder, value }) => (
  <input placeholder={placeholder} defaultValue={value} style={{
    width: "100%", border: `1px solid ${C.g300}`, borderRadius: 8,
    padding: "9px 12px", fontSize: 13.5, fontFamily: "'DM Sans', sans-serif",
    color: C.g700, background: C.white, outline: "none", boxSizing: "border-box",
  }} />
);

const Select = ({ options, value }) => (
  <div style={{ position: "relative" }}>
    <select defaultValue={value} style={{
      width: "100%", border: `1px solid ${C.g300}`, borderRadius: 8,
      padding: "9px 12px", fontSize: 13.5, fontFamily: "'DM Sans', sans-serif",
      color: C.g700, background: C.white, appearance: "none", paddingRight: 32, outline: "none",
    }}>
      {options.map((o, i) => <option key={i} value={o}>{o}</option>)}
    </select>
    <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
      <Icon name="chevDown" size={16} color={C.g400} />
    </div>
  </div>
);

// ==== VIEW 1: ACCUEIL ====
const ViewHome = () => {
  const demands = [
    { label: "Demandes de transfert", count: 7, icon: "send", color: C.blue, bg: C.bluePale },
    { label: "Demandes de consultation", count: 5, icon: "eye", color: C.gold, bg: C.goldLight },
    { label: "Demandes de retour", count: 0, icon: "undo", color: C.g400, bg: C.g100 },
    { label: "Sortie définitive", count: 0, icon: "logout", color: C.g400, bg: C.g100 },
    { label: "Destruction", count: 0, icon: "trash", color: C.g400, bg: C.g100 },
    { label: "Relocalisation", count: 0, icon: "move", color: C.g400, bg: C.g100 },
  ];
  const actions = [
    { label: "Saisir", icon: "edit", desc: "Créer une unité d'archives" },
    { label: "Transférer", icon: "send", desc: "Transférer des archives" },
    { label: "Relocaliser", icon: "mapPin", desc: "Changer la localisation" },
  ];
  const consult = [
    { label: "Consulter", icon: "eye", desc: "Consulter une unité" },
    { label: "Retourner", icon: "undo", desc: "Retourner une unité" },
    { label: "Sortir définitivement", icon: "logout", desc: "Sortie définitive" },
    { label: "Détruire", icon: "trash", desc: "Détruire une unité" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, margin: 0 }}>Tableau de bord</h1>
        <p style={{ color: C.g500, fontSize: 14, margin: "4px 0 0" }}>Vue d'ensemble de vos demandes d'archives</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        {demands.map((d, i) => (
          <Card key={i} style={{ padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: d.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={d.icon} size={20} color={d.color} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: C.g500, marginBottom: 2 }}>{d.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: d.count > 0 ? C.navy : C.g300 }}>{d.count}</div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: C.g500, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.8 }}>Créer une unité d'archives</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {actions.map((a, i) => (
              <Card key={i} style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: C.bluePale, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={a.icon} size={18} color={C.blue} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: C.g400 }}>{a.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: C.g500, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.8 }}>Opérations sur les archives</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {consult.map((a, i) => (
              <Card key={i} style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: C.goldLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={a.icon} size={18} color={C.gold} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: C.g400 }}>{a.desc}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 24 }}>
        {[{ i: "users", l: "Gérer les demandes utilisateurs" }, { i: "clock", l: "Suivre les opérations" }, { i: "settings", l: "Gérer la base archives" }].map((a, idx) => (
          <Card key={idx} style={{ padding: "16px 20px", cursor: "pointer", textAlign: "center" }}>
            <Icon name={a.i} size={20} color={C.g400} />
            <div style={{ fontSize: 13, fontWeight: 500, color: C.g600, marginTop: 6 }}>{a.l}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ==== VIEW 2: UTILISATEURS ====
const ViewUsers = () => {
  const [tab, setTab] = useState(1);
  const tabs = ["Saisie", "Utilisateurs", "Prestataires", "Visibilité", "Paramètres"];
  const users = [
    { nom: "IDP", prenom: "ADMIN", id: "admin", role: "Administrateur" },
    { nom: "IDEESCULTURE", prenom: "ADMIN", id: "bsadmin", role: "Super Admin" },
    { nom: "Michelin", prenom: "Gautier", id: "gautier.michelin", role: "Utilisateur" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, margin: 0 }}>Gérer la base archives</h1>
        <p style={{ color: C.g500, fontSize: 14, margin: "4px 0 0" }}>Administration des utilisateurs et paramètres</p>
      </div>
      <TabBar tabs={tabs} active={tab} onChange={setTab} />
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${C.g100}` }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: C.navy }}>Utilisateurs</div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <SearchInput style={{ width: 220 }} />
            <Btn icon="plus">Nouvel utilisateur</Btn>
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 13.5 }}>
          <thead>
            <tr>
              {["Nom", "Prénom", "Identifiant", "Rôle", ""].map((h, i) => (
                <th key={i} style={{
                  textAlign: i === 4 ? "right" : "left", padding: "11px 20px",
                  fontWeight: 600, color: C.g500, fontSize: 11,
                  textTransform: "uppercase", letterSpacing: 0.8,
                  borderBottom: `1px solid ${C.g200}`, background: C.g50,
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? C.white : C.g50 }}>
                <td style={{ padding: "13px 20px", fontWeight: 600, color: C.navy, borderBottom: `1px solid ${C.g100}` }}>{u.nom}</td>
                <td style={{ padding: "13px 20px", color: C.g600, borderBottom: `1px solid ${C.g100}` }}>{u.prenom}</td>
                <td style={{ padding: "13px 20px", borderBottom: `1px solid ${C.g100}` }}>
                  <code style={{ background: C.g100, padding: "3px 8px", borderRadius: 4, fontSize: 12, color: C.g600 }}>{u.id}</code>
                </td>
                <td style={{ padding: "13px 20px", borderBottom: `1px solid ${C.g100}` }}>
                  <span style={{
                    display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 500,
                    background: u.role === "Super Admin" ? C.goldLight : u.role === "Administrateur" ? C.bluePale : C.greenPale,
                    color: u.role === "Super Admin" ? C.gold : u.role === "Administrateur" ? C.blue : C.green,
                  }}>{u.role}</span>
                </td>
                <td style={{ padding: "13px 20px", textAlign: "right", borderBottom: `1px solid ${C.g100}` }}>
                  {u.role !== "Super Admin" && (
                    <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
                      <Btn variant="ghost" icon="edit" small />
                      <Btn variant="ghost" icon="settings" small />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: "12px 20px", fontSize: 12, color: C.g400 }}>3 utilisateurs au total</div>
      </Card>
    </div>
  );
};

// ==== VIEW 3: SERVICES ====
const ViewServices = () => {
  const [tab, setTab] = useState(0);
  const subTabs = ["Services", "Entités légales", "Codes Budgétaires", "Activités", "Types de document", "Descriptifs 1", "Descriptifs 2", "Adresses", "Localisations"];
  const services = ["Comptabilité", "Gestion locative", "Juridique", "Marketing et Communication", "Ressources Humaines", "Services généraux", "Travaux"];
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, margin: 0 }}>Paramétrage — Saisie</h1>
        <p style={{ color: C.g500, fontSize: 14, margin: "4px 0 0" }}>Configuration des référentiels de saisie</p>
      </div>
      <TabBar tabs={subTabs} active={tab} onChange={setTab} />
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${C.g100}` }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: C.navy }}>Services</div>
          <SearchInput style={{ width: 220 }} />
        </div>
        {services.map((s, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "13px 20px", borderBottom: `1px solid ${C.g100}`,
            background: i % 2 === 0 ? C.white : C.g50,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: C.bluePale,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 600, color: C.blue,
              }}>{s[0]}</div>
              <span style={{ fontSize: 14, color: C.g700 }}>{s}</span>
            </div>
            <Btn variant="ghost" icon="edit" small />
          </div>
        ))}
        <div style={{ padding: "12px 20px", fontSize: 12, color: C.g400 }}>{services.length} services au total</div>
      </Card>
      <Card style={{ marginTop: 16, padding: 20, display: "flex", alignItems: "flex-end", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: C.g700 }}>Ajouter un nouveau service</label>
          <Input placeholder="Nom du service" />
        </div>
        <Btn icon="plus">Ajouter</Btn>
      </Card>
    </div>
  );
};

// ==== VIEW 4: FILE DE TRANSFERT ====
const ViewTransferQueue = () => {
  const [subTab, setSubTab] = useState(0);
  const mainTabs = ["À transférer", "À consulter", "À retourner", "À sortir définitivement", "À détruire", "À relocaliser"];
  const pills = ["Prestataire", "Salle intermédiaire", "Salle interne service"];
  const rows = [
    { service: "Travaux", libelle: "Dossier d'appel d'offres lot climatisation projet Emeraude de 2018", conteneur: "147", compte: "GA47521", demandeur: "Paul Durand", date: "26/05/2025", adresse: "9 bd des églantines 59000 Lille" },
    { service: "Travaux", libelle: "Dossier d'appel d'offres lot plomberie projet Emeraude de 2018", conteneur: "147", compte: "GA47521", demandeur: "Paul Durand", date: "26/05/2025", adresse: "9 bd des églantines 59000 Lille" },
    { service: "Travaux", libelle: "Dossier d'appel d'offres lot électricité projet Emeraude de 2018", conteneur: "147", compte: "GA47521", demandeur: "Paul Durand", date: "26/05/2025", adresse: "9 bd des églantines 59000 Lille" },
    { service: "Travaux", libelle: "Dossier d'appel d'offres lot peinture projet Emeraude de 2018", conteneur: "147", compte: "GA47521", demandeur: "Paul Durand", date: "26/05/2025", adresse: "9 bd des églantines 59000 Lille" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, margin: 0 }}>Gestion des demandes</h1>
        <p style={{ color: C.g500, fontSize: 14, margin: "4px 0 0" }}>Traitement des demandes de transfert et opérations</p>
      </div>
      <TabBar tabs={mainTabs} active={0} />
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {pills.map((t, i) => (
          <button key={i} onClick={() => setSubTab(i)} style={{
            padding: "7px 16px", borderRadius: 20, border: `1px solid ${subTab === i ? C.blue : C.g200}`,
            background: subTab === i ? C.bluePale : C.white,
            color: subTab === i ? C.blue : C.g500,
            fontSize: 13, fontWeight: subTab === i ? 600 : 400,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          }}>{t}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <Card style={{ flex: 1, padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${C.g100}` }}>
            <div style={{ display: "flex", gap: 6 }}>
              <Btn variant="secondary" icon="check" small />
              <Btn variant="secondary" icon="printer" small />
              <Btn variant="secondary" icon="tag" small />
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <SearchInput style={{ width: 180 }} />
            </div>
          </div>
          <div style={{ overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 12.5 }}>
              <thead>
                <tr>
                  {["", "Service", "Libellé", "N° Cont.", "Compte", "Demandeur", "Date", "Adresse"].map((h, i) => (
                    <th key={i} style={{
                      textAlign: "left", padding: "10px 12px", fontWeight: 600,
                      color: C.g500, fontSize: 10.5, textTransform: "uppercase",
                      letterSpacing: 0.6, borderBottom: `2px solid ${C.g200}`, background: C.g50, whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? C.white : C.g50 }}>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}`, width: 32 }}>
                      <input type="checkbox" style={{ accentColor: C.blue }} />
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}` }}>
                      <span style={{ background: C.goldLight, padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600, color: C.gold }}>{r.service}</span>
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}`, color: C.g700, maxWidth: 240 }}>{r.libelle}</td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}`, fontWeight: 600, color: C.navy }}>{r.conteneur}</td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}` }}>
                      <code style={{ fontSize: 11, background: C.g100, padding: "2px 6px", borderRadius: 4 }}>{r.compte}</code>
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}`, color: C.g600 }}>{r.demandeur}</td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}`, color: C.g500, whiteSpace: "nowrap" }}>{r.date}</td>
                    <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.g100}`, color: C.g500, fontSize: 11.5 }}>{r.adresse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <div style={{ width: 250, flexShrink: 0 }}>
          <Card style={{ padding: 20, marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 12 }}>Transfert</div>
            <div style={{
              border: `2px dashed ${C.g300}`, borderRadius: 8, padding: 20,
              textAlign: "center", color: C.g400, fontSize: 13, marginBottom: 12,
            }}>
              <Icon name="plus" size={20} color={C.g300} />
              <div style={{ marginTop: 6 }}>Archives à transférer</div>
              <div style={{ fontSize: 11, marginTop: 2 }}>Glisser ou sélectionner</div>
            </div>
            <Btn style={{ width: "100%", justifyContent: "center" }}>Valider le transfert</Btn>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 12 }}>Transfert à annuler</div>
            <div style={{
              border: `2px dashed ${C.g300}`, borderRadius: 8, padding: 20,
              textAlign: "center", color: C.g400, fontSize: 12, marginBottom: 12,
            }}>Aucun résultat</div>
            <Btn variant="danger" style={{ width: "100%", justifyContent: "center" }}>Annuler le transfert</Btn>
          </Card>
        </div>
      </div>
    </div>
  );
};

// ==== VIEW 5: MODALE DEMANDES ====
const ViewTransferModal = () => {
  const [open, setOpen] = useState(true);
  const items = [
    { num: "*AD*00111", label: "Dossier d'appel d'offres lot climatisation projet Emeraude de 2018" },
    { num: "*AD*00112", label: "Dossier d'appel d'offres lot plomberie projet Emeraude de 2018" },
    { num: "*AD*00113", label: "Dossier d'appel d'offres lot électricité projet Emeraude de 2018" },
    { num: "*AD*00114", label: "Dossier d'appel d'offres lot peinture projet Emeraude de 2018" },
    { num: "*AD*00115", label: "Dossier marché signé projet Emeraude de 2018 (partie 1)" },
    { num: "*AD*00116", label: "Dossier marché signé projet Emeraude de 2018 (partie 2)" },
    { num: "*AD*00117", label: "Dossier marché signé projet Emeraude de 2018 (partie 3)" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, margin: 0 }}>Tableau de bord</h1>
        <p style={{ color: C.g500, fontSize: 14, margin: "4px 0 0" }}>
          Exemple de modale — <button onClick={() => setOpen(true)} style={{ color: C.blue, border: "none", background: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 14, textDecoration: "underline" }}>rouvrir la modale</button>
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, filter: open ? "blur(2px)" : "none", transition: "all 0.2s" }}>
        {["Demandes de transfert — 7", "Demandes de consultation — 5", "Demandes de retour — 0", "Demandes de sortie — 0"].map((d, i) => (
          <Card key={i} style={{ padding: "16px 20px", cursor: "pointer" }}>
            <div style={{ fontSize: 13, color: C.g500 }}>{d}</div>
          </Card>
        ))}
      </div>
      {open && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(15,27,45,0.5)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
        }}>
          <div style={{
            background: C.white, borderRadius: 16, width: 600, maxHeight: "80vh",
            boxShadow: "0 25px 60px rgba(0,0,0,0.2)", overflow: "hidden",
          }}>
            <div style={{
              padding: "20px 24px", display: "flex", justifyContent: "space-between",
              alignItems: "center", borderBottom: `1px solid ${C.g200}`, background: C.navy,
            }}>
              <div>
                <div style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 18, fontWeight: 700, color: C.white }}>Demandes de transfert</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{items.length} demandes en attente</div>
              </div>
              <button onClick={() => setOpen(false)} style={{
                background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8,
                width: 36, height: 36, cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <Icon name="x" size={18} color={C.white} />
              </button>
            </div>
            <div style={{ maxHeight: 400, overflow: "auto" }}>
              {items.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 24px", borderBottom: `1px solid ${C.g100}`, cursor: "pointer",
                }}>
                  <code style={{
                    background: C.bluePale, color: C.blue, padding: "4px 10px",
                    borderRadius: 6, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
                  }}>{item.num}</code>
                  <span style={{ fontSize: 13.5, color: C.g700, flex: 1 }}>{item.label}</span>
                </div>
              ))}
            </div>
            <div style={{
              padding: "16px 24px", borderTop: `1px solid ${C.g200}`,
              display: "flex", justifyContent: "flex-end", background: C.g50,
            }}>
              <Btn variant="secondary" onClick={() => setOpen(false)}>Fermer</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==== VIEW 6: SAISIE D'ARCHIVE ====
const ViewArchiveForm = () => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
      <div>
        <h1 style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: 24, fontWeight: 700, color: C.navy, margin: 0 }}>Transférer une unité d'archives</h1>
        <p style={{ color: C.g500, fontSize: 14, margin: "4px 0 0" }}>Saisie d'une nouvelle unité pour transfert</p>
      </div>
      <div style={{
        background: C.bluePale, border: `1px solid ${C.blueBorder}`,
        borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontSize: 12, color: C.g500 }}>N° d'ordre</span>
        <span style={{ fontWeight: 700, color: C.blue, fontSize: 15, fontFamily: "monospace" }}>*BS*00013</span>
      </div>
    </div>
    <div style={{ display: "flex", gap: 24 }}>
      <div style={{ flex: 1 }}>
        <Card style={{ padding: 24, marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 16px", paddingBottom: 10, borderBottom: `2px solid ${C.g100}` }}>Le propriétaire</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 16px" }}>
            <FormField label="Service" required half><Select options={["Gestion locative", "Comptabilité", "Juridique", "Travaux"]} value="Gestion locative" /></FormField>
            <FormField label="Entité légale" required half><Select options={["Atlas", "Autre"]} value="Atlas" /></FormField>
            <FormField label="Code budgétaire"><Select options={["358-91-138", "Autre"]} value="358-91-138" /></FormField>
          </div>
        </Card>
        <Card style={{ padding: 24, marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 16px", paddingBottom: 10, borderBottom: `2px solid ${C.g100}` }}>Informations descriptives</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 16px" }}>
            <FormField label="Activité" required half><Select options={["Référencement locataire", "Autre"]} value="Référencement locataire" /></FormField>
            <FormField label="Type du document" required half><Select options={["Attestation assurance locataire", "Autre"]} value="Attestation assurance locataire" /></FormField>
          </div>
        </Card>
        <Card style={{ padding: 24, marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 16px", paddingBottom: 10, borderBottom: `2px solid ${C.g100}` }}>Durée de conservation</h3>
          <div style={{ display: "flex", gap: 16 }}>
            <FormField label="Année de clôture" required half><Input value="2025" /></FormField>
            <FormField label="Année de destruction" required half><Input value="2035" /></FormField>
          </div>
        </Card>
        <Card style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 16px", paddingBottom: 10, borderBottom: `2px solid ${C.g100}` }}>Identifiants des contenants</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 16px" }}>
            <FormField label="N° de dossier" required half><Input placeholder="Numéro de dossier" /></FormField>
            <FormField label="N° de conteneur" required half><Input placeholder="Numéro de conteneur" /></FormField>
            <FormField label="Compte prestataire" required><Select options={["AAL3496", "Autre"]} value="AAL3496" /></FormField>
          </div>
        </Card>
      </div>
      <div style={{ width: 340, flexShrink: 0 }}>
        <Card style={{ padding: 24, marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 16px", paddingBottom: 10, borderBottom: `2px solid ${C.g100}` }}>Le libellé</h3>
          <textarea style={{
            width: "100%", height: 140, border: `1px solid ${C.g300}`, borderRadius: 8,
            padding: 12, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif",
            color: C.g700, resize: "vertical", outline: "none", boxSizing: "border-box",
          }} placeholder="Description de l'unité d'archives…" />
        </Card>
        <Card style={{ padding: 24 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 16px", paddingBottom: 10, borderBottom: `2px solid ${C.g100}` }}>Les bornes</h3>
          {["Date", "Num.", "Alpha.", "Alphanum."].map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <span style={{ width: 80, fontSize: 13, color: C.g500, flexShrink: 0 }}>{b}</span>
              <Input placeholder="de" />
              <span style={{ color: C.g400, fontSize: 12 }}>à</span>
              <Input placeholder="à" />
            </div>
          ))}
        </Card>
      </div>
    </div>
    <div style={{
      display: "flex", gap: 12, marginTop: 24, padding: "20px 24px",
      background: C.white, borderRadius: 12, border: `1px solid ${C.g200}`, justifyContent: "center",
    }}>
      <Btn icon="check">Valider</Btn>
      <Btn variant="secondary" icon="printer">Imprimer la fiche</Btn>
      <Btn variant="gold" icon="tag">Imprimer l'étiquette</Btn>
    </div>
  </div>
);

// ==== MAIN ====
export default function App() {
  const [view, setView] = useState(0);
  const [sideItem, setSideItem] = useState(0);
  const [showBefore, setShowBefore] = useState(false);
  const sidebarItems = [
    { icon: "home", label: "Accueil" },
    { icon: "edit", label: "Saisir" },
    { icon: "send", label: "Transférer" },
    { icon: "eye", label: "Consulter" },
    { icon: "undo", label: "Retourner" },
    { icon: "logout", label: "Sortir définitivement" },
    { icon: "trash", label: "Détruire" },
    { icon: "move", label: "Relocaliser" },
  ];
  const adminItems = [
    { icon: "users", label: "Utilisateurs" },
    { icon: "grid", label: "Services" },
    { icon: "settings", label: "Paramètres" },
  ];
  const views = [<ViewHome />, <ViewUsers />, <ViewServices />, <ViewTransferQueue />, <ViewTransferModal />, <ViewArchiveForm />];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.sand, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Lexend+Deca:wght@700&display=swap');
        * { box-sizing: border-box; }
        input:focus, select:focus, textarea:focus { border-color: ${C.blue} !important; box-shadow: 0 0 0 3px ${C.bluePale}; }
        button:hover { opacity: 0.88; }
        ::placeholder { color: ${C.g400}; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-thumb { background: ${C.g300}; border-radius: 3px; }
      `}</style>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <nav style={{
          width: 250, background: C.white, borderRight: `1px solid ${C.g200}`,
          padding: "20px 12px", flexShrink: 0, display: "flex", flexDirection: "column",
        }}>
          <div style={{ padding: "0 8px 20px" }}><Logo /></div>
          <div style={{
            margin: "0 0 16px", padding: "10px 12px", background: C.goldLight,
            borderRadius: 8, border: `1px solid ${C.goldBorder}`,
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.gold, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Maquette — Vue</div>
            <select value={view} onChange={(e) => setView(Number(e.target.value))} style={{
              width: "100%", padding: "6px 8px", borderRadius: 6,
              border: `1px solid ${C.goldBorder}`, fontSize: 12.5,
              fontFamily: "'DM Sans', sans-serif", background: C.white,
              color: C.navy, fontWeight: 600,
            }}>
              {VIEWS.map((v, i) => <option key={i} value={i}>{v}</option>)}
            </select>
          </div>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.g400, textTransform: "uppercase", letterSpacing: 1, padding: "8px 14px 6px" }}>Archives</div>
          {sidebarItems.map((item, i) => (
            <SidebarItem key={i} {...item} active={sideItem === i} onClick={() => setSideItem(i)} />
          ))}
          <div style={{ fontSize: 10, fontWeight: 600, color: C.g400, textTransform: "uppercase", letterSpacing: 1, padding: "16px 14px 6px" }}>Gestion</div>
          {adminItems.map((item, i) => (
            <SidebarItem key={`a${i}`} {...item} active={false} />
          ))}
          <div style={{ flex: 1 }} />
          <div style={{
            padding: "12px 14px", borderTop: `1px solid ${C.g200}`, marginTop: 12,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8, background: C.bluePale,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 600, color: C.blue,
            }}>GM</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>G. Michelin</div>
              <div style={{ fontSize: 11, color: C.g400 }}>gautier.michelin</div>
            </div>
          </div>
        </nav>
        <main style={{ flex: 1, padding: 32, overflow: "auto", maxHeight: "100vh", position: "relative" }}>
          <button onClick={() => setShowBefore(true)} style={{
            position: "fixed", top: 16, right: 24, zIndex: 900,
            background: C.navy, color: C.white, border: "none",
            borderRadius: 8, padding: "8px 16px", fontSize: 13,
            fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer", letterSpacing: 0.5,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}>[ AVANT ]</button>

          {showBefore && (
            <div onClick={() => setShowBefore(false)} style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(15,27,45,0.85)", backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1001, cursor: "zoom-out",
            }}>
              <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
                <img
                  src={`${import.meta.env.BASE_URL}${BEFORE_IMAGES[view]}`}
                  alt={`Capture avant — ${VIEWS[view]}`}
                  style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 12, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                />
                <div style={{
                  textAlign: "center", marginTop: 12, color: "rgba(255,255,255,0.7)",
                  fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                }}>
                  Interface actuelle — {VIEWS[view]} · <span style={{ color: "rgba(255,255,255,0.4)" }}>cliquer pour fermer</span>
                </div>
              </div>
            </div>
          )}

          {views[view]}
          <div style={{ textAlign: "center", padding: "32px 0 16px", fontSize: 12, color: C.g400 }}>
            ArchiveTesDocs 2025 — Maquette de refonte UI
          </div>
        </main>
      </div>
    </div>
  );
}
