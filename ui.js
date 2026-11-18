var defaults = {
        foundationSpacing: [["space.0", 0], ["space.2", 2], ["space.4", 4], ["space.6", 6], ["space.8", 8], ["space.12", 12], ["space.16", 16], ["space.20", 20], ["space.24", 24], ["space.32", 32], ["space.40", 40], ["space.48", 48], ["space.56", 56], ["space.64", 64], ["space.72", 72], ["space.80", 80]],
        foundationSize: [["size.0", 0], ["size.16", 16], ["size.20", 20], ["size.24", 24], ["size.32", 32], ["size.36", 36], ["size.40", 40], ["size.44", 44], ["size.48", 48], ["size.56", 56], ["size.64", 64], ["size.240", 240], ["size.280", 280], ["size.320", 320], ["size.400", 400], ["size.480", 480], ["size.560", 560], ["size.640", 640], ["size.800", 800], ["size.960", 960]],
        foundationRadius: [["radius.0", 0], ["radius.4", 4], ["radius.8", 8], ["radius.16", 16], ["radius.32", 32], ["radius.9999", 9999]],
        foundationOpacity: [["opacity.0", 0], ["opacity.8", 0.08], ["opacity.12", 0.12], ["opacity.16", 0.16], ["opacity.38", 0.38], ["opacity.60", 0.6], ["opacity.80", 0.8], ["opacity.100", 1]],
        foundationShadow: [
          ["shadow.100", "0px 1px 2px 0px rgba(18, 21, 27, 0.08)"],
          ["shadow.200", "0px 4px 12px 0px rgba(18, 21, 27, 0.12)"],
          ["shadow.300", "0px 12px 32px 0px rgba(18, 21, 27, 0.18)"]
        ],
        foundationMotionDuration: [["duration.0", 0], ["duration.100", 100], ["duration.150", 150], ["duration.250", 250], ["duration.350", 350], ["duration.500", 500]],
        foundationMotionEasing: [["easing.standard", "cubic-bezier(0.2, 0, 0, 1)"], ["easing.enter", "cubic-bezier(0.05, 0.7, 0.1, 1)"], ["easing.exit", "cubic-bezier(0.3, 0, 1, 1)"], ["easing.linear", "linear"]],
        semanticMotionDuration: [["motion.duration.fast", "duration.100"], ["motion.duration.change", "duration.150"], ["motion.duration.enter", "duration.250"], ["motion.duration.exit", "duration.150"], ["motion.duration.enterEmphasized", "duration.350"], ["motion.duration.exitEmphasized", "duration.250"]],
        semanticMotionEasing: [["motion.easing.change", "easing.standard"], ["motion.easing.enter", "easing.enter"], ["motion.easing.exit", "easing.exit"], ["motion.easing.linear", "easing.linear"]],
        text: {
          family: [["font.family.sans", "Inter"], ["font.family.serif", "Georgia"], ["font.family.mono", "JetBrains Mono"]],
          size: [["font.size.12", 12], ["font.size.14", 14], ["font.size.16", 16], ["font.size.21", 21], ["font.size.28", 28], ["font.size.38", 38], ["font.size.51", 51], ["font.size.67", 67], ["font.size.90", 90]],
          weight: [["font.weight.light", 300], ["font.weight.regular", 400], ["font.weight.medium", 500], ["font.weight.semibold", 600], ["font.weight.bold", 700]],
          lineHeight: [["font.lineHeight.110", 1.1], ["font.lineHeight.120", 1.2], ["font.lineHeight.130", 1.3], ["font.lineHeight.150", 1.5]],
          letterSpacing: [["font.letterSpacing.tight", -2], ["font.letterSpacing.default", 0], ["font.letterSpacing.wide", 2]],
          textTransform: [["font.textTransform.none", "none"], ["font.textTransform.uppercase", "uppercase"]]
        },
        semanticColor: [
          // Backgrounds & surfaces
          ["color.bg.canvas", { Light: "color.neutral.100", Dark: "color.neutral.1000" }],
          ["color.bg.surface", { Light: "color.neutral.0", Dark: "color.neutral.900" }],
          ["color.bg.subtle", { Light: "color.neutral.100", Dark: "color.neutral.800" }],
          ["color.bg.raised", { Light: "color.neutral.0", Dark: "color.neutral.800" }],
          ["color.bg.overlay", { Light: "color.neutral.0", Dark: "color.neutral.900" }],
          ["color.bg.hover", { Light: "color.neutral.100", Dark: "color.neutral.800" }],
          ["color.bg.pressed", { Light: "color.neutral.200", Dark: "color.neutral.700" }],
          ["color.bg.selected", { Light: "color.brand.100", Dark: "color.brand.900" }],
          ["color.bg.disabled", { Light: "color.neutral.100", Dark: "color.neutral.900" }],
          // Text
          ["color.text.primary", { Light: "color.neutral.900", Dark: "color.neutral.0" }],
          ["color.text.secondary", { Light: "color.neutral.700", Dark: "color.neutral.100" }],
          ["color.text.tertiary", { Light: "color.neutral.500", Dark: "color.neutral.300" }],
          ["color.text.disabled", { Light: "color.neutral.400", Dark: "color.neutral.500" }],
          ["color.text.placeholder", { Light: "color.neutral.500", Dark: "color.neutral.400" }],
          ["color.text.inverse", { Light: "color.neutral.0", Dark: "color.neutral.1000" }],
          ["color.text.on-brand", { Light: "color.neutral.0", Dark: "color.neutral.0" }],
          ["color.text.link", { Light: "color.brand.700", Dark: "color.brand.300" }],
          ["color.text.link-hover", { Light: "color.brand.900", Dark: "color.brand.100" }],
          // Borders & focus
          ["color.border.default", { Light: "color.neutral.200", Dark: "color.neutral.700" }],
          ["color.border.subtle", { Light: "color.neutral.100", Dark: "color.neutral.800" }],
          ["color.border.strong", { Light: "color.neutral.500", Dark: "color.neutral.400" }],
          ["color.border.input", { Light: "color.neutral.300", Dark: "color.neutral.700" }],
          ["color.border.hover", { Light: "color.neutral.400", Dark: "color.neutral.500" }],
          ["color.border.focus", { Light: "color.brand.500", Dark: "color.brand.300" }],
          ["color.border.selected", { Light: "color.brand.500", Dark: "color.brand.300" }],
          ["color.border.disabled", { Light: "color.neutral.200", Dark: "color.neutral.800" }],
          ["color.border.danger", { Light: "color.danger.700", Dark: "color.danger.300" }],
          // Icons
          ["color.icon.primary", { Light: "color.neutral.900", Dark: "color.neutral.0" }],
          ["color.icon.secondary", { Light: "color.neutral.700", Dark: "color.neutral.100" }],
          ["color.icon.tertiary", { Light: "color.neutral.500", Dark: "color.neutral.300" }],
          ["color.icon.disabled", { Light: "color.neutral.400", Dark: "color.neutral.500" }],
          ["color.icon.inverse", { Light: "color.neutral.0", Dark: "color.neutral.1000" }],
          ["color.icon.brand", { Light: "color.brand.500", Dark: "color.brand.300" }],
          // Interactive elements
          ["color.bg.interactive.primary", { Light: "color.brand.500", Dark: "color.brand.500" }],
          ["color.bg.interactive.primary-hover", { Light: "color.brand.700", Dark: "color.brand.700" }],
          ["color.bg.interactive.primary-pressed", { Light: "color.brand.900", Dark: "color.brand.900" }],
          ["color.bg.interactive.secondary", { Light: "color.neutral.100", Dark: "color.neutral.800" }],
          ["color.bg.interactive.secondary-hover", { Light: "color.neutral.200", Dark: "color.neutral.700" }],
          ["color.bg.interactive.secondary-pressed", { Light: "color.neutral.300", Dark: "color.neutral.600" }],
          ["color.bg.interactive.danger", { Light: "color.danger.500", Dark: "color.danger.500" }],
          ["color.bg.interactive.danger-hover", { Light: "color.danger.700", Dark: "color.danger.700" }],
          ["color.bg.interactive.danger-pressed", { Light: "color.danger.900", Dark: "color.danger.900" }],
          // Status feedback
          ["color.status.info.text", { Light: "color.info.700", Dark: "color.info.300" }],
          ["color.status.info.bg", { Light: "color.info.100", Dark: "color.info.900" }],
          ["color.status.info.border", { Light: "color.info.300", Dark: "color.info.700" }],
          ["color.status.info.icon", { Light: "color.info.500", Dark: "color.info.300" }],
          ["color.status.success.text", { Light: "color.success.700", Dark: "color.success.300" }],
          ["color.status.success.bg", { Light: "color.success.100", Dark: "color.success.900" }],
          ["color.status.success.border", { Light: "color.success.300", Dark: "color.success.700" }],
          ["color.status.success.icon", { Light: "color.success.500", Dark: "color.success.300" }],
          ["color.status.warning.text", { Light: "color.warning.700", Dark: "color.warning.300" }],
          ["color.status.warning.bg", { Light: "color.warning.100", Dark: "color.warning.900" }],
          ["color.status.warning.border", { Light: "color.warning.300", Dark: "color.warning.700" }],
          ["color.status.warning.icon", { Light: "color.warning.500", Dark: "color.warning.300" }],
          ["color.status.danger.text", { Light: "color.danger.700", Dark: "color.danger.300" }],
          ["color.status.danger.bg", { Light: "color.danger.100", Dark: "color.danger.900" }],
          ["color.status.danger.border", { Light: "color.danger.300", Dark: "color.danger.700" }],
          ["color.status.danger.icon", { Light: "color.danger.500", Dark: "color.danger.300" }]
        ],
        semanticSpacing: [
          ["inline.xs", "space.4"], ["inline.sm", "space.8"], ["inline.md", "space.16"], ["inline.lg", "space.24"],
          ["stack.xs", "space.4"], ["stack.sm", "space.8"], ["stack.md", "space.16"], ["stack.lg", "space.24"],
          ["inset.4", "space.4"], ["inset.6", "space.6"], ["inset.8", "space.8"],
          ["inset.xs", "space.8"], ["inset.sm", "space.12"], ["inset.md", "space.16"], ["inset.lg", "space.24"],
          ["layout.section", "space.40"], ["layout.page", "space.64"],
          ["control.xs", "space.4"], ["control.sm", "space.8"], ["control.md", "space.12"]
        ],
        semanticSize: [
          ["control.sm", "size.32"], ["control.md", "size.40"], ["control.lg", "size.48"],
          ["icon.sm", "size.16"], ["icon.md", "size.20"], ["icon.lg", "size.24"],
          ["touch.min", "size.44"], ["avatar.sm", "size.32"], ["avatar.md", "size.40"], ["avatar.lg", "size.56"],
          ["dialog.width.xs", "size.320"], ["dialog.width.sm", "size.400"], ["dialog.width.md", "size.560"], ["dialog.width.lg", "size.800"], ["dialog.width.xl", "size.960"],
          ["dialog.maxHeight.sm", "size.480"], ["dialog.maxHeight.md", "size.640"], ["dialog.maxHeight.lg", "size.800"],
          ["layout.header.height", "size.64"], ["layout.sidebar.width", "size.240"], ["layout.drawer.width", "size.320"]
        ],
        semanticRadius: [
          ["none", "radius.0"], ["sm", "radius.4"], ["md", "radius.8"], ["lg", "radius.16"], ["xl", "radius.32"], ["full", "radius.9999"]
        ],
        semanticOpacity: [
          ["state.hover", "opacity.8"], ["state.focus", "opacity.12"], ["state.pressed", "opacity.12"], ["state.dragged", "opacity.16"], ["state.disabled", "opacity.38"], ["overlay.scrim", "opacity.60"], ["content.subtle", "opacity.80"], ["content.default", "opacity.100"]
        ],
        semanticShadow: [
          ["sm", "shadow.100"],
          ["md", "shadow.200"],
          ["lg", "shadow.300"]
        ],
        semanticText: [
          ["display.l", "font.family.serif", "font.size.90", "font.weight.regular", "font.lineHeight.110", "font.letterSpacing.tight", "font.textTransform.none"],
          ["headline.l", "font.family.sans", "font.size.38", "font.weight.semibold", "font.lineHeight.120", "font.letterSpacing.default", "font.textTransform.none"],
          ["headline.m", "font.family.sans", "font.size.28", "font.weight.semibold", "font.lineHeight.130", "font.letterSpacing.default", "font.textTransform.none"],
          ["headline.s", "font.family.sans", "font.size.21", "font.weight.semibold", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["title.l", "font.family.sans", "font.size.21", "font.weight.semibold", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["title.m", "font.family.sans", "font.size.16", "font.weight.semibold", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["title.s", "font.family.sans", "font.size.14", "font.weight.semibold", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["body.l", "font.family.sans", "font.size.16", "font.weight.regular", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["body.m", "font.family.sans", "font.size.14", "font.weight.regular", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["body.s", "font.family.sans", "font.size.12", "font.weight.regular", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["button.m", "font.family.sans", "font.size.14", "font.weight.medium", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["button.s", "font.family.sans", "font.size.12", "font.weight.medium", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["label.m", "font.family.sans", "font.size.12", "font.weight.medium", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"],
          ["caption.s", "font.family.sans", "font.size.12", "font.weight.regular", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"]
        ]
      };

      var containers = {
        brandColors: document.getElementById("brandColors"),
        neutralColors: document.getElementById("neutralColors"),
        statusColors: document.getElementById("statusColors"),
        foundationColors: document.getElementById("foundationColors"),
        foundationSpacing: document.getElementById("foundationSpacing"),
        foundationSize: document.getElementById("foundationSize"),
        foundationRadius: document.getElementById("foundationRadius"),
        foundationOpacity: document.getElementById("foundationOpacity"),
        foundationShadow: document.getElementById("foundationShadow"),
        foundationMotionDuration: document.getElementById("foundationMotionDuration"),
        foundationMotionEasing: document.getElementById("foundationMotionEasing"),
        semanticMotionDuration: document.getElementById("semanticMotionDuration"),
        semanticMotionEasing: document.getElementById("semanticMotionEasing"),
        semanticColors: document.getElementById("semanticColors"),
        semanticSpacing: document.getElementById("semanticSpacing"),
        semanticSize: document.getElementById("semanticSize"),
        semanticRadius: document.getElementById("semanticRadius"),
        semanticOpacity: document.getElementById("semanticOpacity"),
        semanticShadow: document.getElementById("semanticShadow"),
        semanticText: document.getElementById("semanticText"),
        fontFamily: document.getElementById("fontFamily"),
        fontSize: document.getElementById("fontSize"),
        fontWeight: document.getElementById("fontWeight"),
        fontLineHeight: document.getElementById("fontLineHeight"),
        fontLetterSpacing: document.getElementById("fontLetterSpacing"),
        fontTextTransform: document.getElementById("fontTextTransform")
      };

      var fileInput = document.getElementById("file");
      var sessionFileInput = document.getElementById("sessionFile");
      var importDashboardButton = document.getElementById("importDashboard");
      var generateButton = document.getElementById("generate");
      var resetButton = document.getElementById("reset");
      var cancelButton = document.getElementById("cancel");
      var status = document.getElementById("status");
      var headerSettingsButton = document.getElementById("headerSettingsButton");
      var headerSettingsMenu = document.getElementById("headerSettingsMenu");
      var brandPackTabs = document.getElementById("brandPackTabs");
      var addBrandPackButton = document.getElementById("addBrandPack");
      var mainColorNameInput = document.getElementById("mainColorName");
      var mainColorValueInput = document.getElementById("mainColorValue");
      var sessionSelect = document.getElementById("sessionSelect");
      var sessionSelectButton = document.getElementById("sessionSelectButton");
      var sessionSelectMenu = document.getElementById("sessionSelectMenu");
      var createSessionButton = document.getElementById("createSession");
      var saveSessionButton = document.getElementById("saveSession");
      var saveMenu = document.getElementById("saveMenu");
      var saveAsNewSessionButton = document.getElementById("saveAsNewSession");
      var saveCurrentSessionButton = document.getElementById("saveCurrentSession");
      var loadSessionButton = document.getElementById("loadSession");
      var importMenu = document.getElementById("importMenu");
      var importSessionMarkdownButton = document.getElementById("importSessionMarkdown");
      var importSessionJsonButton = document.getElementById("importSessionJson");
      var setDefaultButton = document.getElementById("setDefault");
      var themeNameInput = document.getElementById("themeName");
      var sortSemanticTextButton = document.getElementById("sortSemanticText");
      var toggleSemanticMappingButton = document.getElementById("toggleSemanticMapping");
      var feedbackModalBackdrop = document.getElementById("feedbackModalBackdrop");
      var feedbackModalTitle = document.getElementById("feedbackModalTitle");
      var feedbackModalMessage = document.getElementById("feedbackModalMessage");
      var feedbackModalOk = document.getElementById("feedbackModalOk");
      var saveModalBackdrop = document.getElementById("saveModalBackdrop");
      var saveModalTitle = document.getElementById("saveModalTitle");
      var saveModalDescription = document.getElementById("saveModalDescription");
      var saveModalNameInput = document.getElementById("saveModalName");
      var saveModalConfirmButton = document.getElementById("saveModalConfirm");
      var saveModalCancelButton = document.getElementById("saveModalCancel");
      var suggestionScrim = document.getElementById("suggestionScrim");
      var suggestionPopover = document.getElementById("suggestionPopover");
      var resizeCornerHitarea = document.getElementById("resizeCornerHitarea");
      var minWindowWidth = 360;
      var minWindowHeight = 320;
      var currentWindowWidth = Math.max(minWindowWidth, Math.round(window.innerWidth || 1080));
      var currentWindowHeight = Math.max(minWindowHeight, Math.round(window.innerHeight || 960));
      var uiDefaultStorageKey = "tokenPluginDefaultSetupFallback";
      var uiSessionsStorageKey = "tokenPluginSavedSessionsFallback";
      var savedSessions = [];
      var selectedSavedSessionId = "";
      var pendingSessionSave = null;
      var saveModalMode = "save";
      var pendingDefaultLoadTimer = null;
      var pendingInitialPluginState = true;
      var initialSessionsLoaded = false;
      var initialDefaultResolved = false;
      var initialSessionsPayload = [];
      var initialActiveSessionId = "";
      var initialDefaultPayload = null;
      var initialDefaultError = "";
      var availableFontFamilies = [];
      var availableFontStylesByFamily = {};

      // ── CUSTOM COLOR PICKER LOGIC ─────────────────────────────
      var customColorPicker = document.getElementById("customColorPicker");
      var cpBrandNameInput = document.getElementById("cpBrandNameInput");
      var cpBrandDeleteBtn = document.getElementById("cpBrandDeleteBtn");
      var cpCanvasBg = document.getElementById("cpCanvasBg");
      var cpCanvasHandle = document.getElementById("cpCanvasHandle");
      var cpCanvasArea = document.getElementById("cpCanvasArea");
      var cpEyedropper = document.getElementById("cpEyedropper");
      var cpHueTrack = document.getElementById("cpHueTrack");
      var cpHueHandle = document.getElementById("cpHueHandle");
      var cpAlphaTrack = document.getElementById("cpAlphaTrack");
      var cpAlphaOverlay = document.getElementById("cpAlphaOverlay");
      var cpAlphaHandle = document.getElementById("cpAlphaHandle");
      var cpFormatSelect = document.getElementById("cpFormatSelect");
      var cpChannelsContainer = document.getElementById("cpChannels");

      var cpState = {
        h: 0,
        s: 100,
        v: 100,
        alpha: 1,
        format: "HEX",
        hex: "#FF0000",
        r: 255,
        g: 0,
        b: 0
      };

      var cpActiveTarget = null;
      var cpCallbacks = {};

      function fixedRadiusFoundationMap(source, includeDefaults) {
        var values = source && typeof source === "object" ? source : {};
        var out = {};
        if (includeDefaults !== false) {
          defaults.foundationRadius.forEach(function (row) {
            out[row[0]] = row[1];
          });
        }
        Object.keys(values).forEach(function (name) {
          var normalizedName = cleanTokenPath(name);
          if (!normalizedName) return;
          if (Object.prototype.hasOwnProperty.call(out, normalizedName)) {
            out[normalizedName] = Number(values[name] || 0);
            return;
          }
          out[normalizedName] = Number(values[name] || 0);
        });
        return out;
      }

      function normalizeRadiusReferenceValue(value) {
        var normalized = cleanTokenPath(String(value || "").replace(/[{}]/g, ""));
        var legacyRefMap = {
          "radius.sm": "radius.4",
          "radius.md": "radius.8",
          "radius.lg": "radius.16",
          "radius.xl": "radius.32",
          "radius.full": "radius.9999",
          "radius.pill": "radius.9999",
          "radius.round": "radius.9999"
        };
        var canonicalMatch = normalized.match(/(?:^|\.)radius\.(0|4|8|16|32|9999)$/);
        if (canonicalMatch) return "radius." + canonicalMatch[1];
        var legacyMatch = normalized.match(/(?:^|\.)radius\.(sm|md|lg|xl|full|pill|round)$/);
        if (legacyMatch) return legacyRefMap["radius." + legacyMatch[1]] || "";
        if (/^(0|4|8|16|32|9999)$/.test(normalized)) return "radius." + normalized;
        return "";
      }

      function fixedSemanticRadiusMap(source, includeDefaults) {
        var values = source && typeof source === "object" ? source : {};
        var aliasesByName = {
          none: ["none", "control.none", "zero"],
          sm: ["sm", "control.sm"],
          md: ["md", "control.md"],
          lg: ["lg", "control.lg"],
          xl: ["xl", "control.xl"],
          full: ["full", "control.full", "pill", "round"]
        };
        var out = {};
        if (includeDefaults !== false) {
          defaults.semanticRadius.forEach(function (row) {
            var canonicalName = row[0];
            var fallbackRef = row[1];
            var resolved = "";
            (aliasesByName[canonicalName] || [canonicalName]).some(function (candidate) {
              if (!Object.prototype.hasOwnProperty.call(values, candidate)) return false;
              resolved = normalizeRadiusReferenceValue(values[candidate]);
              return !!resolved;
            });
            out[canonicalName] = resolved || fallbackRef;
          });
        }
        var canonicalAliases = {};
        Object.keys(aliasesByName).forEach(function (canonicalName) {
          canonicalAliases[canonicalName] = true;
          (aliasesByName[canonicalName] || []).forEach(function (alias) {
            canonicalAliases[alias] = true;
          });
        });
        Object.keys(values).forEach(function (name) {
          var normalizedName = cleanTokenPath(name);
          if (!normalizedName || (includeDefaults !== false && canonicalAliases[normalizedName])) return;
          var normalizedValue = normalizeRadiusReferenceValue(values[name]);
          out[normalizedName] = normalizedValue || values[name];
        });
        return out;
      }

      function hsvToRgb(h, s, v) {
        s /= 100; v /= 100;
        var c = v * s;
        var x = c * (1 - Math.abs((h / 60) % 2 - 1));
        var m = v - c;
        var r = 0, g = 0, b = 0;
        if (0 <= h && h < 60) {
          r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
          r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
          r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
          r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
          r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
          r = c; g = 0; b = x;
        }
        return {
          r: Math.round((r + m) * 255),
          g: Math.round((g + m) * 255),
          b: Math.round((b + m) * 255)
        };
      }

      function rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
          h = 0;
        } else {
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }
        return {
          h: Math.round(h * 360),
          s: Math.round(s * 100),
          v: Math.round(v * 100)
        };
      }

      function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max === min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }
        return {
          h: Math.round(h * 360),
          s: Math.round(s * 100),
          l: Math.round(l * 100)
        };
      }

      function hslToRgb(h, s, l) {
        h /= 360; s /= 100; l /= 100;
        var r, g, b;
        if (s === 0) {
          r = g = b = l;
        } else {
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          }
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
        }
        return {
          r: Math.round(r * 255),
          g: Math.round(g * 255),
          b: Math.round(b * 255)
        };
      }

      function updateColorPickerFromHSV() {
        var baseRgb = hsvToRgb(cpState.h, 100, 100);
        cpCanvasBg.style.backgroundColor = 'rgb(' + baseRgb.r + ',' + baseRgb.g + ',' + baseRgb.b + ')';
        cpCanvasHandle.style.left = cpState.s + '%';
        cpCanvasHandle.style.top = (100 - cpState.v) + '%';
        cpHueHandle.style.left = (cpState.h / 360) * 100 + '%';
        
        var rgb = hsvToRgb(cpState.h, cpState.s, cpState.v);
        cpState.r = rgb.r;
        cpState.g = rgb.g;
        cpState.b = rgb.b;
        cpState.hex = rgbToHex(rgb);
        
        cpAlphaHandle.style.left = cpState.alpha * 100 + '%';
        cpAlphaOverlay.style.background = 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0), rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1))';
        
        renderChannelsInputs();
        
        if (cpCallbacks.onColorChange) {
          var colorValue = cpState.alpha < 1 ? 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + cpState.alpha + ')' : cpState.hex;
          cpCallbacks.onColorChange(colorValue);
        }
      }

      function renderChannelsInputs() {
        var format = cpState.format;
        var html = "";
        if (format === "HEX") {
          html = '<input type="text" class="cp-channel-input cp-hex-input" value="' + cpState.hex + '" style="font-family: monospace; text-transform: uppercase;" aria-label="HEX code" />';
        } else if (format === "RGB") {
          html = '<input type="text" class="cp-channel-input cp-r-input" value="' + cpState.r + '" aria-label="Red" title="Red" />' +
                 '<input type="text" class="cp-channel-input cp-g-input" value="' + cpState.g + '" aria-label="Green" title="Green" />' +
                 '<input type="text" class="cp-channel-input cp-b-input" value="' + cpState.b + '" aria-label="Blue" title="Blue" />' +
                 '<input type="text" class="cp-channel-input cp-a-input" value="' + Math.round(cpState.alpha * 100) + '" aria-label="Alpha" title="Alpha" />';
        } else if (format === "HSL") {
          var hsl = rgbToHsl(cpState.r, cpState.g, cpState.b);
          html = '<input type="text" class="cp-channel-input cp-h-input" value="' + hsl.h + '" aria-label="Hue" title="Hue" />' +
                 '<input type="text" class="cp-channel-input cp-s-input" value="' + hsl.s + '" aria-label="Saturation" title="Saturation" />' +
                 '<input type="text" class="cp-channel-input cp-l-input" value="' + hsl.l + '" aria-label="Lightness" title="Lightness" />' +
                 '<input type="text" class="cp-channel-input cp-a-input" value="' + Math.round(cpState.alpha * 100) + '" aria-label="Alpha" title="Alpha" />' +
                 '<span class="cp-percent-symbol">%</span>';
        }
        cpChannelsContainer.innerHTML = html;
        attachChannelInputListeners();
      }

      function attachChannelInputListeners() {
        var format = cpState.format;
        if (format === "HEX") {
          var inputHex = cpChannelsContainer.querySelector(".cp-hex-input");
          inputHex.addEventListener("change", function () {
            var val = inputHex.value.trim();
            if (!val.startsWith("#")) val = "#" + val;
            if (/^#[0-9a-f]{6}$/i.test(val)) {
              var rgb = hexToRgb(val);
              var hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
              cpState.h = hsv.h;
              cpState.s = hsv.s;
              cpState.v = hsv.v;
              cpState.hex = val.toUpperCase();
              updateColorPickerFromHSV();
            }
          });
        } else if (format === "RGB") {
          var rIn = cpChannelsContainer.querySelector(".cp-r-input");
          var gIn = cpChannelsContainer.querySelector(".cp-g-input");
          var bIn = cpChannelsContainer.querySelector(".cp-b-input");
          var aIn = cpChannelsContainer.querySelector(".cp-a-input");
          
          var onRgbChange = function () {
            var r = Math.max(0, Math.min(255, parseInt(rIn.value) || 0));
            var g = Math.max(0, Math.min(255, parseInt(gIn.value) || 0));
            var b = Math.max(0, Math.min(255, parseInt(bIn.value) || 0));
            var a = Math.max(0, Math.min(100, parseInt(aIn.value) || 0)) / 100;
            var hsv = rgbToHsv(r, g, b);
            cpState.h = hsv.h;
            cpState.s = hsv.s;
            cpState.v = hsv.v;
            cpState.alpha = a;
            updateColorPickerFromHSV();
          };
          
          rIn.addEventListener("change", onRgbChange);
          gIn.addEventListener("change", onRgbChange);
          bIn.addEventListener("change", onRgbChange);
          aIn.addEventListener("change", onRgbChange);
        } else if (format === "HSL") {
          var hIn = cpChannelsContainer.querySelector(".cp-h-input");
          var sIn = cpChannelsContainer.querySelector(".cp-s-input");
          var lIn = cpChannelsContainer.querySelector(".cp-l-input");
          var aIn = cpChannelsContainer.querySelector(".cp-a-input");
          
          var onHslChange = function () {
            var h = Math.max(0, Math.min(360, parseInt(hIn.value) || 0));
            var s = Math.max(0, Math.min(100, parseInt(sIn.value) || 0));
            var l = Math.max(0, Math.min(100, parseInt(lIn.value) || 0));
            var a = Math.max(0, Math.min(100, parseInt(aIn.value) || 0)) / 100;
            var rgb = hslToRgb(h, s, l);
            var hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
            cpState.h = hsv.h;
            cpState.s = hsv.s;
            cpState.v = hsv.v;
            cpState.alpha = a;
            updateColorPickerFromHSV();
          };
          
          hIn.addEventListener("change", onHslChange);
          sIn.addEventListener("change", onHslChange);
          lIn.addEventListener("change", onHslChange);
          aIn.addEventListener("change", onHslChange);
        }
      }

      function openCustomColorPicker(config) {
        cpActiveTarget = config.anchor;
        cpCallbacks = config;
        
        var normalizedColor = config.color || "#E8341C";
        if (normalizedColor.indexOf("rgba") === 0) {
          var match = normalizedColor.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i);
          if (match) {
            var r = parseInt(match[1]) || 0;
            var g = parseInt(match[2]) || 0;
            var b = parseInt(match[3]) || 0;
            var a = match[4] !== undefined ? parseFloat(match[4]) : 1;
            var hsv = rgbToHsv(r, g, b);
            cpState.h = hsv.h;
            cpState.s = hsv.s;
            cpState.v = hsv.v;
            cpState.alpha = a;
          }
        } else {
          var rgb = hexToRgb(normalizedColor);
          var hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
          cpState.h = hsv.h;
          cpState.s = hsv.s;
          cpState.v = hsv.v;
          cpState.alpha = config.alpha !== undefined ? config.alpha : 1;
        }

        cpState.format = cpState.format || "HEX";
        cpFormatSelect.value = cpState.format;

        var header = document.getElementById("cpHeader");
        if (config.showNameEditor) {
          header.style.display = "flex";
          var nameInput = document.getElementById("cpBrandNameInput");
          nameInput.value = config.name || "";
          nameInput.oninput = function() {
            if (config.onNameChange) config.onNameChange(nameInput.value);
          };
          var deleteBtn = document.getElementById("cpBrandDeleteBtn");
          deleteBtn.onclick = function() {
            if (config.onDelete) {
              config.onDelete();
              closeCustomColorPicker();
            }
          };
        } else {
          header.style.display = "none";
        }

        updateColorPickerFromHSV();
        
        var rect = config.anchor.getBoundingClientRect();
        var left = rect.left + window.scrollX;
        var top = rect.bottom + window.scrollY + 6;
        var cpWidth = 260;
        if (left + cpWidth > window.innerWidth - 12) {
          left = window.innerWidth - cpWidth - 12;
        }
        customColorPicker.style.left = left + "px";
        customColorPicker.style.top = top + "px";
        customColorPicker.style.display = "block";

        document.addEventListener("mousedown", onCpClickOutside);
      }

      function onCpClickOutside(e) {
        if (!customColorPicker || customColorPicker.style.display === "none") return;
        if (customColorPicker.contains(e.target) || (cpActiveTarget && cpActiveTarget.contains(e.target))) {
          return;
        }
        closeCustomColorPicker();
      }

      function closeCustomColorPicker() {
        if (customColorPicker) {
          customColorPicker.style.display = "none";
        }
        document.removeEventListener("mousedown", onCpClickOutside);
        cpActiveTarget = null;
        cpCallbacks = {};
      }

      function initCustomColorPickerDrag() {
        var isDraggingCanvas = false;
        var isDraggingHue = false;
        var isDraggingAlpha = false;

        function updateCanvasFromCoords(clientX, clientY) {
          var rect = cpCanvasArea.getBoundingClientRect();
          var x = Math.max(0, Math.min(rect.width, clientX - rect.left));
          var y = Math.max(0, Math.min(rect.height, clientY - rect.top));
          cpState.s = Math.round((x / rect.width) * 100);
          cpState.v = Math.round((1 - y / rect.height) * 100);
          updateColorPickerFromHSV();
        }

        function updateHueFromCoords(clientX) {
          var rect = cpHueTrack.getBoundingClientRect();
          var x = Math.max(0, Math.min(rect.width, clientX - rect.left));
          cpState.h = Math.round((x / rect.width) * 360);
          if (cpState.h === 360) cpState.h = 0;
          updateColorPickerFromHSV();
        }

        function updateAlphaFromCoords(clientX) {
          var rect = cpAlphaTrack.getBoundingClientRect();
          var x = Math.max(0, Math.min(rect.width, clientX - rect.left));
          cpState.alpha = parseFloat((x / rect.width).toFixed(2));
          updateColorPickerFromHSV();
        }

        cpCanvasArea.addEventListener("mousedown", function (e) {
          isDraggingCanvas = true;
          updateCanvasFromCoords(e.clientX, e.clientY);
        });

        cpHueTrack.addEventListener("mousedown", function (e) {
          isDraggingHue = true;
          updateHueFromCoords(e.clientX);
        });

        cpAlphaTrack.addEventListener("mousedown", function (e) {
          isDraggingAlpha = true;
          updateAlphaFromCoords(e.clientX);
        });

        window.addEventListener("mousemove", function (e) {
          if (isDraggingCanvas) updateCanvasFromCoords(e.clientX, e.clientY);
          if (isDraggingHue) updateHueFromCoords(e.clientX);
          if (isDraggingAlpha) updateAlphaFromCoords(e.clientX);
        });

        window.addEventListener("mouseup", function () {
          isDraggingCanvas = false;
          isDraggingHue = false;
          isDraggingAlpha = false;
        });

        // Touch support
        cpCanvasArea.addEventListener("touchstart", function (e) {
          isDraggingCanvas = true;
          updateCanvasFromCoords(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });

        cpHueTrack.addEventListener("touchstart", function (e) {
          isDraggingHue = true;
          updateHueFromCoords(e.touches[0].clientX);
        }, { passive: true });

        cpAlphaTrack.addEventListener("touchstart", function (e) {
          isDraggingAlpha = true;
          updateAlphaFromCoords(e.touches[0].clientX);
        }, { passive: true });

        window.addEventListener("touchmove", function (e) {
          if (isDraggingCanvas) updateCanvasFromCoords(e.touches[0].clientX, e.touches[0].clientY);
          if (isDraggingHue) updateHueFromCoords(e.touches[0].clientX);
          if (isDraggingAlpha) updateAlphaFromCoords(e.touches[0].clientX);
        });

        window.addEventListener("touchend", function () {
          isDraggingCanvas = false;
          isDraggingHue = false;
          isDraggingAlpha = false;
        });
      }

      function initCustomColorPicker() {
        if (!customColorPicker) return;
        if (cpFormatSelect) {
          cpFormatSelect.addEventListener("change", function () {
            cpState.format = cpFormatSelect.value;
            renderChannelsInputs();
          });
        }
        if (cpEyedropper) {
          if (!window.EyeDropper) {
            cpEyedropper.style.display = "none";
          } else {
            setIcon(cpEyedropper, "eyedropper");
          }
        }
        if (cpBrandDeleteBtn) {
          setIcon(cpBrandDeleteBtn, "close");
        }
        initCustomColorPickerDrag();
      }
      // ──────────────────────────────────────────────────────────
      var toneSteps = [100, 300, 500, 700, 900];
      var defaultFoundationColorPacks = [
        ["brand", "#E8341C"]
      ];
      var defaultFoundationStatusColorPacks = [
        ["info", "#2563EB"],
        ["success", "#16A34A"],
        ["warning", "#D97706"],
        ["danger", "#DC2626"]
      ];
      var activeSuggestionInput = null;
      var activeSuggestionItems = [];
      var activeSuggestionIndex = -1;
      var semanticColorModes = { Light: {}, Dark: {} };
      var semanticColorPurposes = {};
      var semanticColorPurposeTooltipId = 0;
      var semanticColorModePacks = createSemanticColorModePacks(defaults.semanticColor);
      function createSemanticColorModePacks(rows) {
        var packs = { Light: {}, Dark: {} };
        (rows || []).forEach(function (row) {
          var name = row[0];
          var modes = row[1] || {};
          packs.Light[name] = modes.Light || "";
          packs.Dark[name] = modes.Dark || "";
        });
        return packs;
      }
      var neutralScale = {
        "0": "#FFFFFF",
        "100": "#EFEFF1",
        "200": "#DDDEE2",
        "300": "#C8CAD1",
        "400": "#A7ABB5",
        "500": "#868C98",
        "600": "#6A707C",
        "700": "#4D5360",
        "800": "#363B46",
        "900": "#1E222B",
        "1000": "#12151B"
      };
      var currentMainColorName = "brand";
      var selectedBrandPackName = "brand";

      function setActiveTokenTab(category) {
        var hasTab = Array.prototype.some.call(document.querySelectorAll("[data-token-tab]"), function (button) {
          return button.getAttribute("data-token-tab") === category;
        });
        if (!hasTab) category = "color";
        Array.prototype.forEach.call(document.querySelectorAll("[data-token-tab]"), function (button) {
          var isActive = button.getAttribute("data-token-tab") === category;
          button.classList.toggle("active", isActive);
          button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
        Array.prototype.forEach.call(document.querySelectorAll("[data-token-panel]"), function (panel) {
          panel.classList.toggle("active", panel.getAttribute("data-token-panel").indexOf(category) !== -1);
        });
      }

      function setMode(mode, applyPack) {
        storeCurrentSemanticColorMode();
        var nextMode = mode === "Dark" ? "Dark" : "Light";
        var modeInput = document.getElementById("modeName");
        if (modeInput) modeInput.value = nextMode;
        Array.prototype.forEach.call(document.querySelectorAll("[data-mode-option]"), function (button) {
          var isActive = button.getAttribute("data-mode-option") === nextMode;
          button.classList.toggle("active", isActive);
          button.setAttribute("aria-selected", isActive ? "true" : "false");
        });
        if (applyPack) {
          applySemanticColorPack(nextMode);
          return;
        }
        renderSemanticColorMode(nextMode);
        refreshLists();
      }

      function getSelectedGenerationModes() {
        var modes = [];
        var lightCheckbox = document.getElementById("generateLightMode");
        var darkCheckbox = document.getElementById("generateDarkMode");
        if (lightCheckbox && lightCheckbox.checked) modes.push("Light");
        if (darkCheckbox && darkCheckbox.checked) modes.push("Dark");
        return modes.length ? modes : ["Light"];
      }

      function setSelectedGenerationModes(modeNames) {
        var nextModes = Array.isArray(modeNames) && modeNames.length
          ? modeNames
          : ["Light", "Dark"];
        var allowed = {};
        nextModes.forEach(function (modeName) {
          if (modeName === "Light" || modeName === "Dark") allowed[modeName] = true;
        });
        var lightCheckbox = document.getElementById("generateLightMode");
        var darkCheckbox = document.getElementById("generateDarkMode");
        if (lightCheckbox) lightCheckbox.checked = !!allowed.Light;
        if (darkCheckbox) darkCheckbox.checked = !!allowed.Dark;
        if ((!lightCheckbox || !lightCheckbox.checked) && (!darkCheckbox || !darkCheckbox.checked) && lightCheckbox) {
          lightCheckbox.checked = true;
        }
      }

      function bindGenerationModeCheckboxes() {
        ["generateLightMode", "generateDarkMode"].forEach(function (id) {
          var input = document.getElementById(id);
          if (!input) return;
          input.addEventListener("change", function () {
            var lightCheckbox = document.getElementById("generateLightMode");
            var darkCheckbox = document.getElementById("generateDarkMode");
            if ((lightCheckbox && lightCheckbox.checked) || (darkCheckbox && darkCheckbox.checked)) return;
            input.checked = true;
          });
        });
      }

      function applySemanticColorPack(mode) {
        var pack = semanticColorModePacks[mode];
        if (!pack) return;
        var nextValues = {};
        Object.keys(readSemanticColorNames()).forEach(function (semanticName) {
          nextValues[semanticName] = pack[semanticName] || "";
        });
        semanticColorModes[mode] = nextValues;
        syncOtherSemanticColorMode(mode);
        if (getCurrentMode() === mode) renderSemanticColorMode(mode);
        refreshLists();
      }

      function getCurrentMode() {
        var modeInput = document.getElementById("modeName");
        return modeInput && modeInput.value === "Dark" ? "Dark" : "Light";
      }

      function readSemanticColorNames() {
        var names = {};
        Array.prototype.forEach.call(containers.semanticColors.children, function (row) {
          var nameField = row.querySelector("input[data-field-role=\"name\"]");
          var name = nameField && nameField.value ? nameField.value.trim() : "";
          if (!name) return;
          names[normalizeSemanticColorName(name)] = true;
        });
        return names;
      }

      function readSemanticColorPairs() {
        var pairs = readPairs(containers.semanticColors, false);
        var normalizedPairs = {};
        Object.keys(pairs).forEach(function (name) {
          normalizedPairs[normalizeSemanticColorName(name)] = normalizeNeutralColorReference(pairs[name]);
        });
        return normalizedPairs;
      }

      function normalizeNeutralColorReference(value) {
        if (typeof value !== "string") return value;
        var reference = value.trim();
        if (reference === "neutral.50") return "neutral.100";
        if (reference === "color.neutral.50") return "color.neutral.100";
        return value;
      }

      function orderedSemanticColorKeys(values) {
        var order = [];
        var seen = {};
        defaults.semanticColor.forEach(function (row) {
          if (!values || values[row[0]] === undefined || seen[row[0]]) return;
          seen[row[0]] = true;
          order.push(row[0]);
        });
        Object.keys(values || {}).forEach(function (key) {
          if (seen[key]) return;
          seen[key] = true;
          order.push(key);
        });
        return order;
      }

      function renderSemanticColorMode(mode) {
        var values = semanticColorModes[mode] || {};
        containers.semanticColors.innerHTML = "";
        var config = groupedTokenConfig(containers.semanticColors);
        var groups = {};
        config.groups.forEach(function (groupName) { groups[groupName] = []; });
        orderedSemanticColorKeys(values).forEach(function (key) {
          var groupName = config.groupForName(key);
          if (!groups[groupName]) groups[groupName] = [];
          groups[groupName].push(key);
        });
        config.groups.forEach(function (groupName) {
          var keys = groups[groupName] || [];
          ensureGroupHeading(containers.semanticColors, groupName, config);
          keys.forEach(function (key) {
            addSemanticColorPair(containers.semanticColors, key, values[key]);
          });
        });
      }

      function renderSemanticPairGroups(container, values) {
        var tokenValues = values && typeof values === "object" ? values : {};
        var config = groupedTokenConfig(container);
        if (!config) return;
        container.innerHTML = "";
        var groups = {};
        config.groups.forEach(function (groupName) { groups[groupName] = []; });
        Object.keys(tokenValues).forEach(function (key) {
          var groupName = config.groupForName(key);
          if (!groups[groupName]) groups[groupName] = [];
          groups[groupName].push(key);
        });
        config.groups.forEach(function (groupName) {
          ensureGroupHeading(container, groupName, config);
          (groups[groupName] || []).forEach(function (key) {
            addPair(container, "cols-2", key, tokenValues[key], "text", config.referenceList);
          });
        });
      }

      function renderSemanticSpacing(spacingValues) {
        renderSemanticPairGroups(containers.semanticSpacing, spacingValues);
      }

      function renderSemanticSize(sizeValues) {
        renderSemanticPairGroups(containers.semanticSize, sizeValues);
      }

      function syncOtherSemanticColorMode(sourceMode) {
        var targetMode = sourceMode === "Dark" ? "Light" : "Dark";
        var sourceValues = semanticColorModes[sourceMode] || {};
        var targetValues = semanticColorModes[targetMode] || {};
        var pack = semanticColorModePacks[targetMode] || {};
        var nextTargetValues = {};

        Object.keys(sourceValues).forEach(function (name) {
          if (targetValues[name] !== undefined) {
            nextTargetValues[name] = targetValues[name];
          } else if (pack[name] !== undefined) {
            nextTargetValues[name] = pack[name];
          } else {
            nextTargetValues[name] = sourceValues[name];
          }
        });

        semanticColorModes[targetMode] = nextTargetValues;
      }

      function storeCurrentSemanticColorMode() {
        semanticColorModes[getCurrentMode()] = readSemanticColorPairs();
        syncOtherSemanticColorMode(getCurrentMode());
      }

      function normalizeSemanticColorModes(colorValues, includeDefaults) {
        var normalized = { Light: {}, Dark: {} };
        var entries = colorValues && typeof colorValues === "object" ? colorValues : {};
        var shouldIncludeDefaults = includeDefaults !== false;

        Object.entries(entries).forEach(function (entry) {
          var name = normalizeSemanticColorName(entry[0]);
          var value = entry[1];
          if (value && typeof value === "object" && !Array.isArray(value)) {
            normalized.Light[name] = value.Light !== undefined
              ? normalizeNeutralColorReference(value.Light)
              : (semanticColorModePacks.Light[name] !== undefined ? semanticColorModePacks.Light[name] : "");
            normalized.Dark[name] = value.Dark !== undefined
              ? normalizeNeutralColorReference(value.Dark)
              : (semanticColorModePacks.Dark[name] !== undefined ? semanticColorModePacks.Dark[name] : normalized.Light[name]);
            return;
          }
          normalized.Light[name] = normalizeNeutralColorReference(value);
          normalized.Dark[name] = semanticColorModePacks.Dark[name] !== undefined ? semanticColorModePacks.Dark[name] : normalizeNeutralColorReference(value);
        });

        if (shouldIncludeDefaults) {
          defaults.semanticColor.forEach(function (row) {
            var name = row[0];
            var defaultVal = row[1];
            if (normalized.Light[name] === undefined) {
              normalized.Light[name] = semanticColorModePacks.Light[name] !== undefined ? semanticColorModePacks.Light[name] : defaultVal;
            }
            if (normalized.Dark[name] === undefined) {
              normalized.Dark[name] = semanticColorModePacks.Dark[name] !== undefined ? semanticColorModePacks.Dark[name] : normalized.Light[name];
            }
          });
        }

        return normalized;
      }

      function listValues(id) {
        var list = id ? document.getElementById(id) : null;
        if (!list) return [];
        if (list._tokenValues) return list._tokenValues;
        return Array.prototype.map.call(list.querySelectorAll("option"), function (option) {
          return option.value;
        });
      }

      function setSuggestionFieldState(inputEl, active) {
        if (!inputEl || !inputEl.parentNode) return;
        inputEl.parentNode.classList.toggle("suggestion-active", !!active);
      }

      function closeSuggestions() {
        if (activeSuggestionInput) setSuggestionFieldState(activeSuggestionInput, false);
        activeSuggestionInput = null;
        activeSuggestionItems = [];
        activeSuggestionIndex = -1;
        if (suggestionScrim) {
          suggestionScrim.classList.remove("open");
          suggestionScrim.setAttribute("aria-hidden", "true");
        }
        if (!suggestionPopover) return;
        suggestionPopover.innerHTML = "";
        suggestionPopover.classList.remove("open");
        suggestionPopover.setAttribute("aria-hidden", "true");
      }

      function setImportMenuOpen(open) {
        if (!importMenu || !loadSessionButton) return;
        var nextOpen = !!open;
        importMenu.hidden = !nextOpen;
        loadSessionButton.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      }

      function setSaveMenuOpen(open) {
        if (!saveMenu || !saveSessionButton) return;
        var nextOpen = !!open;
        saveMenu.hidden = !nextOpen;
        saveSessionButton.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      }

      function setHeaderSettingsOpen(open) {
        if (!headerSettingsMenu || !headerSettingsButton) return;
        var nextOpen = !!open;
        headerSettingsMenu.hidden = !nextOpen;
        headerSettingsButton.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      }

      async function readSelectedFileText(file) {
        return await file.text();
      }

      async function importTokensJsonFile(file) {
        var text = await readSelectedFileText(file);
        var tokens = JSON.parse(text);
        generateButton.disabled = true;
        if (importDashboardButton) importDashboardButton.disabled = true;
        parent.postMessage({
          pluginMessage: { type: "import-tokens", tokens: tokens, options: options() }
        }, "*");
      }

      async function importSessionMarkdownFile(file) {
        var markdown = await readSelectedFileText(file);
        var payload = parseSessionMarkdown(markdown);
        applySessionPayload(payload);
        var importedName = (file.name || "imported-session").replace(/\.(md|markdown)$/i, "") || "Imported session";
        var importedRecord = createSessionRecord(importedName, payload, markdown);
        saveSessionRecord(importedRecord);
        selectedSavedSessionId = importedRecord.id;
        setStatus("Session markdown loaded: " + file.name, "ok");
      }

      async function handleSessionImportFile(file) {
        var fileName = String(file && file.name || "");
        var mimeType = String(file && file.type || "");
        var isJson = /\.json$/i.test(fileName) || /\bjson\b/i.test(mimeType);
        if (isJson) {
          try {
            await importTokensJsonFile(file);
          } catch (error) {
            setStatus("Invalid JSON: " + (error && error.message ? error.message : String(error)), "error");
          }
          return;
        }
        try {
          await importSessionMarkdownFile(file);
        } catch (error) {
          setStatus("Invalid session markdown: " + (error && error.message ? error.message : String(error)), "error");
        }
      }

      function positionSuggestions(inputEl) {
        if (!suggestionPopover || !inputEl) return;
        var rect = inputEl.getBoundingClientRect();
        var gap = 6;
        var width = Math.min(Math.max(rect.width, 220), window.innerWidth - 24);
        var top = rect.bottom + gap;
        var maxHeight = 240;
        if (top + maxHeight > window.innerHeight - 12) {
          top = Math.max(12, rect.top - maxHeight - gap);
        }
        suggestionPopover.style.width = width + "px";
        suggestionPopover.style.left = Math.min(rect.left, window.innerWidth - width - 12) + "px";
        suggestionPopover.style.top = top + "px";
      }

      function applySuggestion(index) {
        if (!activeSuggestionInput || index < 0 || index >= activeSuggestionItems.length) return;
        activeSuggestionInput.value = activeSuggestionItems[index];
        activeSuggestionInput.dispatchEvent(new Event("input", { bubbles: true }));
        closeSuggestions();
      }

      function setActiveSuggestion(index) {
        activeSuggestionIndex = index;
        Array.prototype.forEach.call(suggestionPopover.querySelectorAll(".suggestion-option"), function (button, buttonIndex) {
          button.classList.toggle("active", buttonIndex === index);
        });
      }

      function openSuggestions(inputEl) {
        var listId = inputEl && inputEl.dataset ? inputEl.dataset.listSource : "";
        var allItems = listValues(listId);
        var currentValue = String(inputEl.value || "").trim().toLowerCase();
        var filtered = [];
        for (var index = 0; index < allItems.length && filtered.length < 30; index++) {
          var item = allItems[index];
          if (!currentValue || item.toLowerCase().indexOf(currentValue) !== -1) filtered.push(item);
        }
        if (!filtered.length || !suggestionPopover) {
          closeSuggestions();
          return;
        }
        if (activeSuggestionInput && activeSuggestionInput !== inputEl) {
          setSuggestionFieldState(activeSuggestionInput, false);
        }
        activeSuggestionInput = inputEl;
        setSuggestionFieldState(activeSuggestionInput, true);
        activeSuggestionItems = filtered;
        activeSuggestionIndex = -1;
        suggestionPopover.innerHTML = "";
        filtered.forEach(function (item, index) {
          var optionButton = document.createElement("button");
          optionButton.type = "button";
          optionButton.className = "suggestion-option";
          optionButton.setAttribute("role", "option");
          optionButton.textContent = item;
          optionButton.addEventListener("mousedown", function (event) {
            event.preventDefault();
            applySuggestion(index);
          });
          suggestionPopover.appendChild(optionButton);
        });
        if (suggestionScrim) {
          suggestionScrim.classList.add("open");
          suggestionScrim.setAttribute("aria-hidden", "false");
        }
        suggestionPopover.classList.add("open");
        suggestionPopover.setAttribute("aria-hidden", "false");
        positionSuggestions(inputEl);
      }

      function handleSuggestionKeydown(event) {
        if (!activeSuggestionInput || !suggestionPopover.classList.contains("open")) return;
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setActiveSuggestion(Math.min(activeSuggestionIndex + 1, activeSuggestionItems.length - 1));
          return;
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          setActiveSuggestion(Math.max(activeSuggestionIndex - 1, 0));
          return;
        }
        if (event.key === "Enter" && activeSuggestionIndex >= 0) {
          event.preventDefault();
          applySuggestion(activeSuggestionIndex);
          return;
        }
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          closeSuggestions();
        }
      }

      function attachSuggestionBehavior(el, listId) {
        if (!el || !listId) return;
        el.dataset.listSource = listId;
        el.setAttribute("autocomplete", "off");
        el.addEventListener("focus", function () {
          openSuggestions(el);
        });
        el.addEventListener("input", function () {
          openSuggestions(el);
        });
        el.addEventListener("keydown", handleSuggestionKeydown);
        el.addEventListener("blur", function () {
          setTimeout(function () {
            if (document.activeElement !== el) closeSuggestions();
          }, 120);
        });
      }

      function input(value, type, list, placeholder) {
        var el = document.createElement("input");
        el.type = type || "text";
        el.value = value;
        if (placeholder) el.placeholder = placeholder;
        if (el.type === "color") {
          el.className = "color-mapping-swatch";
        }
        el.addEventListener("input", refreshLists);
        attachSuggestionBehavior(el, list);
        return el;
      }

      function fontFamilyInput(value) {
        var el = input(value === undefined ? "" : value, "text", "fontFamilyNames", "font family");
        el.setAttribute("spellcheck", "false");
        return el;
      }

      function field(kind, child) {
        var wrapper = document.createElement("div");
        wrapper.className = "field field-" + kind;
        wrapper.appendChild(child);
        return wrapper;
      }

      function setFieldRole(inputEl, role) {
        if (inputEl) inputEl.setAttribute("data-field-role", role);
        return inputEl;
      }

      function setTextFieldRole(inputEl, role) {
        if (inputEl) inputEl.setAttribute("data-text-field", role);
        return inputEl;
      }

      var iconLibrarySystem = {
        close: { body: "<path fill=\"currentColor\" d=\"M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z\"/>", width: 32, height: 32 },
        settings: { body: "<path fill=\"currentColor\" d=\"M18 4.1V2h-4v2.1a12 12 0 0 0-2.8 1.2L9.7 3.8L6.9 6.6l1.5 1.5A12 12 0 0 0 7.2 11H5v4h2.2a12 12 0 0 0 1.2 2.9l-1.5 1.5l2.8 2.8l1.5-1.5A12 12 0 0 0 14 21.9V24h4v-2.1a12 12 0 0 0 2.8-1.2l1.5 1.5l2.8-2.8l-1.5-1.5a12 12 0 0 0 1.2-2.9H27v-4h-2.2a12 12 0 0 0-1.2-2.9l1.5-1.5l-2.8-2.8l-1.5 1.5A12 12 0 0 0 18 4.1M16 19a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6\"/>", width: 32, height: 26 },
        add: { body: "<path fill=\"currentColor\" d=\"M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z\"/>", width: 32, height: 32 },
        subtract: { body: "<path fill=\"currentColor\" d=\"M8 15h16v2H8z\"/>", width: 32, height: 32 },
        "chevron-right": { body: "<path fill=\"currentColor\" d=\"m12 8l8 8l-8 8l-1.41-1.41L17.17 16l-6.58-6.59z\"/>", width: 32, height: 32 },
        "chevron-down": { body: "<path fill=\"currentColor\" d=\"m8 12l8 8l8-8l-1.41-1.41L16 17.17l-6.59-6.58z\"/>", width: 32, height: 32 },
        import: { body: "<path fill=\"currentColor\" d=\"M15 4h2v12.17l3.59-3.58L22 14l-6 6l-6-6l1.41-1.41L15 16.17z\"/><path fill=\"currentColor\" d=\"M6 22h20v2H6z\"/>", width: 32, height: 32 },
        information: { body: "<path fill=\"currentColor\" d=\"M17 22v-8h-4v2h2v6h-3v2h8v-2zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8\"/><path fill=\"currentColor\" d=\"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4\"/>", width: 32, height: 32 },
        export: { body: "<path fill=\"currentColor\" d=\"M26 24v4H6v-4H4v4l.008-.005A2 2 0 0 0 6 30h20a2 2 0 0 0 2-2v-4ZM6 12l1.411 1.405L15 5.825V24h2V5.825l7.591 7.58L26 12L16 2z\"/>", width: 32, height: 32 },
        "trash-can": { body: "<path fill=\"currentColor\" d=\"M12 12h2v12h-2zm6 0h2v12h-2z\"/><path fill=\"currentColor\" d=\"M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6Zm4 22V8h16v20Zm4-26h8v2h-8z\"/>", width: 32, height: 32 },
        "sort-ascending": { body: "<path fill=\"currentColor\" d=\"M12 28v-2h4v2zm-4-5v-2h8v2zm-4-5v-2h12v2zm-2-5v-2h16v2zm22 1V6.83l-2.59 2.58L20 8l5-5l5 5l-1.41 1.41L26 6.83V14z\"/>", width: 32, height: 32 },
        "sort-descending": { body: "<path fill=\"currentColor\" d=\"M12 10v2h4v-2zm-4 5v2h8v-2zm-4 5v2h12v-2zm-2 5v2h16v-2zm22-1V6.83l-2.59 2.58L20 8l5-5l5 5l-1.41 1.41L26 6.83V24z\"/>", width: 32, height: 32 },
        "collapse-all": { body: "<path fill=\"currentColor\" d=\"M28 22H18v-2h10zm0-6H18v-2h10zM28 4H4v2h24zm0 6H4v2h24zM4 22h10v-2H4zm0 4h10v-2H4zm8-7l-4 4l-4-4l1.41-1.41L8 20.17V16h2v4.17l2.59-2.58z\"/>", width: 32, height: 32 },
        "expand-all": { body: "<path fill=\"currentColor\" d=\"M28 22H18v-2h10zm0-6H18v-2h10zM28 4H4v2h24zm0 6H4v2h24zM4 22h10v-2H4zm0 4h10v-2H4zM8 12l4-4l4 4l-1.41 1.41L12 11.83l-2.59 2.58z\"/>", width: 32, height: 32 },
        eyedropper: { body: "<path fill=\"currentColor\" d=\"M29 3c-1.1-1.1-3-1.1-4.1 0L13.7 14.1l-1.9-.9c-.6-.3-1.3-.2-1.8.3L7.7 15.8c-.5.5-.6 1.2-.3 1.8l2.5 4.3L3.2 28.5c-.3.3-.3.8 0 1.1c.2.2.4.3.6.3s.4-.1.6-.3l6.6-6.6l4.3 2.5c.3.2.6.2.9.2c.3 0 .6-.1.8-.3l2.3-2.3c.5-.5.6-1.2.3-1.8l-.9-1.9L29 7.1C30.1 6 30.1 4.1 29 3zm-17.7 18.9l-2.8-4.8l1.4-1.4c.1-.1.3-.1.4 0l1.4.6l.8-.8l-1.4-.6c-.2-.1-.2-.3-.1-.4l.8-.8l2 2l-.8.8l-.6-1.4c-.1-.2-.3-.2-.4-.1l-.8.8l.6 1.4c.1.1.1.3 0 .4l-1.4 1.4c-.1.1-.1.3 0 .4l.8.8zm15.6-15.6l-12 12l-.9-.9c-.2-.2-.2-.5 0-.7l12-12c.2-.2.5-.2.7 0l.2.2c.2.2.2.5 0 .7z\"/>", width: 32, height: 32 }
      };

      function setIcon(button, name) {
        var icon = iconLibrarySystem[name];
        if (!button || !icon) return;
        if (button.tagName && button.tagName.toLowerCase() === "button" && name !== "export") {
          button.classList.add("icon-button");
        }
        button.innerHTML = "<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 " + icon.width + " " + icon.height + "\">" + icon.body + "</svg>";
        button.dataset.icon = name;
      }

      function renderHintTipIcons() {
        Array.prototype.forEach.call(document.querySelectorAll(".hint-tip"), function (tip) {
          Array.prototype.slice.call(tip.childNodes).forEach(function (node) {
            if (node.nodeType === 3) tip.removeChild(node);
          });
          if (tip.querySelector(".hint-tip-icon")) return;
          var icon = document.createElement("span");
          icon.className = "hint-tip-icon";
          setIcon(icon, "information");
          tip.insertBefore(icon, tip.firstChild);
        });
      }

      function addRemove(row) {
        var button = createRemoveButton(row);
        row.appendChild(button);
      }

      function createRemoveButton(row) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "icon";
        setIcon(button, "close");
        button.title = "Remove row";
        button.setAttribute("aria-label", "Remove row");
        button.addEventListener("click", function () {
          row.parentNode.removeChild(row);
          refreshLists();
        });
        return button;
      }

      function groupedTokenConfig(container) {
        if (container === containers.semanticColors) {
          var labels = {
            Background: "A. Background & surfaces",
            Text: "B. Text",
            Borders: "C. Borders & focus",
            Icons: "D. Icons",
            Interactive: "E. Interactive elements",
            Status: "F. Status feedback",
            Other: "G. Other colors"
          };
          var descriptions = {
            Background: "Used for page layouts, cards, tables, sidebars, dropdowns, and dialogs.",
            Text: "Defines readable text, supporting content, disabled labels, placeholders, inverse text, and links.",
            Borders: "Used for component outlines, dividers, form controls, selected states, validation, and focus indicators.",
            Icons: "Sets icon emphasis for primary, supporting, low-emphasis, disabled, inverse, and brand contexts.",
            Interactive: "Shared semantic roles for buttons, controls, selectable items, and other interactions.",
            Status: "Provides text, background, border, and icon colors for info, success, warning, and danger feedback.",
            Other: "Use this section for custom semantic color roles outside the standard groups."
          };
          return {
            groups: ["Background", "Text", "Borders", "Icons", "Interactive", "Status", "Other"],
            label: function (groupName) { return labels[groupName] || labels.Other; },
            description: function (groupName) { return descriptions[groupName] || descriptions.Other; },
            groupForName: semanticColorGroupForName
          };
        }
        if (container === containers.semanticText) {
          return {
            groups: ["Display", "Headline", "Title", "Body", "Button", "Label", "Caption", "Other"],
            label: function (groupName) { return groupName + " Text styles"; },
            groupForName: function (name) {
              var group = semanticTextGroupName(name);
              var labels = ["Display", "Headline", "Title", "Body", "Button", "Label", "Caption"];
              for (var i = 0; i < labels.length; i += 1) {
                if (labels[i].toLowerCase() === group) return labels[i];
              }
              return "Other";
            },
            formType: "text",
            typeLabel: "semantic text style",
            tokenPrefix: "",
            namePrefixForGroup: function (groupName) {
              return groupName === "Other" ? "" : groupName.toLowerCase() + ".";
            }
          };
        }
        if (container === containers.semanticSpacing) {
          return {
            groups: ["Inline", "Stack", "Inset", "Layout", "Control", "Other"],
            label: function (groupName) { return groupName + " Spacing"; },
            formType: "pair",
            typeLabel: "semantic spacing token",
            tokenPrefix: "space.",
            namePrefixForGroup: function (groupName) {
              return "space." + (groupName === "Other" ? "" : groupName.toLowerCase() + ".");
            },
            referenceList: "spaceRefs",
            referenceLabel: "Foundation space.* token",
            defaultReference: "space.16",
            groupForName: function (name) {
              if (name.indexOf("inline.") === 0) return "Inline";
              if (name.indexOf("stack.") === 0) return "Stack";
              if (name.indexOf("inset.") === 0) return "Inset";
              if (name.indexOf("layout.") === 0) return "Layout";
              if (name.indexOf("control.") === 0) return "Control";
              return "Other";
            }
          };
        }
        if (container === containers.semanticSize) {
          return {
            groups: ["Control", "Icon", "Touch", "Avatar", "Dialog", "Layout", "Other"],
            label: function (groupName) { return groupName + " Sizes"; },
            formType: "pair",
            typeLabel: "semantic size token",
            tokenPrefix: "size.",
            namePrefixForGroup: function (groupName) {
              return "size." + (groupName === "Other" ? "" : groupName.toLowerCase() + ".");
            },
            referenceList: "sizeRefs",
            referenceLabel: "Foundation size.* token",
            defaultReference: "size.40",
            groupForName: function (name) {
              if (name.indexOf("control.") === 0) return "Control";
              if (name.indexOf("icon.") === 0) return "Icon";
              if (name.indexOf("touch.") === 0) return "Touch";
              if (name.indexOf("avatar.") === 0) return "Avatar";
              if (name.indexOf("dialog.") === 0) return "Dialog";
              if (name.indexOf("layout.") === 0) return "Layout";
              return "Other";
            }
          };
        }
        if (container === containers.semanticRadius) {
          return {
            groups: ["Core", "Control", "Surface", "Other"],
            label: function (groupName) { return groupName + " Radius"; },
            formType: "pair",
            typeLabel: "semantic radius token",
            tokenPrefix: "radius.",
            namePrefixForGroup: function (groupName) {
              if (groupName === "Control") return "radius.control.";
              if (groupName === "Surface") return "radius.card.";
              return "radius.";
            },
            referenceList: "radiusRefs",
            referenceLabel: "Foundation radius.* token",
            defaultReference: "radius.8",
            groupForName: function (name) {
              if (name.indexOf(".") === -1) return "Core";
              if (name.indexOf("control.") === 0) return "Control";
              if (name.indexOf("surface.") === 0 || name.indexOf("card.") === 0 || name.indexOf("dialog.") === 0) return "Surface";
              return "Other";
            }
          };
        }
        if (container === containers.semanticOpacity) {
          return {
            groups: ["State", "Overlay", "Content", "Other"],
            label: function (groupName) { return groupName + " Opacity"; },
            formType: "pair",
            typeLabel: "semantic opacity token",
            tokenPrefix: "opacity.",
            namePrefixForGroup: function (groupName) {
              return "opacity." + (groupName === "Other" ? "" : groupName.toLowerCase() + ".");
            },
            referenceList: "opacityRefs",
            referenceLabel: "Foundation opacity.* token",
            defaultReference: "opacity.12",
            groupForName: function (name) {
              if (name.indexOf("state.") === 0) return "State";
              if (name.indexOf("overlay.") === 0) return "Overlay";
              if (name.indexOf("content.") === 0) return "Content";
              return "Other";
            }
          };
        }
        if (container === containers.semanticShadow) {
          return {
            groups: ["Elevation", "Component", "Other"],
            label: function (groupName) { return groupName + " Shadow"; },
            formType: "pair",
            typeLabel: "semantic shadow token",
            tokenPrefix: "shadow.",
            namePrefixForGroup: function () { return "shadow."; },
            referenceList: "shadowRefs",
            referenceLabel: "Foundation shadow.* token",
            defaultReference: "shadow.200",
            groupForName: function (name) {
              if (/^(xs|sm|md|lg|xl|2xl)$/.test(name)) return "Elevation";
              if (/^(card|menu|dialog|modal|popover|sheet|dropdown|tooltip|control)\./.test(name)) return "Component";
              return "Other";
            }
          };
        }
        return null;
      }

      function semanticColorGroupForName(name) {
        var path = String(name || "").trim().toLowerCase().replace(/^color\./, "");
        if (path.indexOf("bg.interactive.") === 0 || path.indexOf("action.") === 0) return "Interactive";
        if (path.indexOf("bg.") === 0) return "Background";
        if (path.indexOf("text.") === 0) return "Text";
        if (path.indexOf("border.") === 0 || path.indexOf("focus.") === 0) return "Borders";
        if (path.indexOf("icon.") === 0) return "Icons";
        if (path.indexOf("status.") === 0) return "Status";
        return "Other";
      }

      function rowTokenName(row) {
        var inputEl = row.querySelector("input[data-field-role=\"name\"]") || row.querySelector("input[data-text-field=\"name\"]");
        return inputEl && inputEl.value ? inputEl.value.trim().toLowerCase() : "";
      }

      function findGroupHeading(container, groupName, config) {
        var label = config.label(groupName);
        var headings = container.querySelectorAll(".semantic-group-title");
        for (var i = 0; i < headings.length; i += 1) {
          if (headings[i].getAttribute("data-token-group") === groupName || headings[i].textContent === label) {
            headings[i].setAttribute("data-token-group", groupName);
            return headings[i];
          }
        }
        return null;
      }

      function ensureGroupHeading(container, groupName, config) {
        var existing = findGroupHeading(container, groupName, config);
        if (existing) return existing;
        var heading = document.createElement("h3");
        heading.className = "subsection-title semantic-group-title";
        var label = document.createElement("span");
        label.className = "semantic-group-label";
        label.textContent = config.label(groupName);
        heading.appendChild(label);
        if (config.description) {
          var tip = document.createElement("span");
          tip.className = "hint-tip semantic-section-tip";
          tip.tabIndex = 0;
          tip.setAttribute("aria-label", "About " + config.label(groupName));
          var popover = document.createElement("span");
          popover.className = "hint-tip-popover";
          popover.textContent = config.description(groupName);
          tip.appendChild(popover);
          heading.appendChild(tip);
        }
        if (container === containers.semanticColors || config.formType) {
          var addButton = document.createElement("button");
          addButton.type = "button";
          addButton.className = "icon semantic-section-add";
          addButton.title = container === containers.semanticColors
            ? "Add semantic color token to " + config.label(groupName)
            : "Add " + config.typeLabel + " to " + config.label(groupName);
          addButton.setAttribute("aria-label", addButton.title);
          setIcon(addButton, "add");
          addButton.addEventListener("click", function () {
            if (container === containers.semanticColors) {
              openSemanticColorTokenForm(container, groupName, heading, config);
            } else if (config.formType === "text") {
              openSemanticTextTokenForm(container, groupName, heading, config);
            } else {
              openSemanticPairTokenForm(container, groupName, heading, config);
            }
          });
          heading.appendChild(addButton);
        }
        heading.setAttribute("data-token-group", groupName);

        var groupIndex = config.groups.indexOf(groupName);
        var insertBefore = null;
        Array.prototype.some.call(container.querySelectorAll(".semantic-group-title"), function (candidate) {
          var candidateGroup = candidate.getAttribute("data-token-group");
          var candidateIndex = config.groups.indexOf(candidateGroup);
          if (candidateIndex > groupIndex) {
            insertBefore = candidate;
            return true;
          }
          return false;
        });
        container.insertBefore(heading, insertBefore);
        if (config.description) renderHintTipIcons();
        return heading;
      }

      function openSemanticColorTokenForm(container, groupName, heading, config) {
        var openForm = container.querySelector(".semantic-token-create-form");
        if (openForm) openForm.remove();

        var form = document.createElement("form");
        form.className = "semantic-token-create-form";
        form.setAttribute("aria-label", "Add a semantic color token");
        var title = document.createElement("div");
        title.className = "semantic-token-create-title";
        title.textContent = "Add a token to " + config.label(groupName);
        form.appendChild(title);

        function addLabeledField(labelText, fieldInput) {
          var label = document.createElement("label");
          label.className = "semantic-token-create-field";
          var caption = document.createElement("span");
          caption.textContent = labelText;
          label.appendChild(caption);
          label.appendChild(fieldInput);
          form.appendChild(label);
        }

        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "token.path";
        nameInput.setAttribute("aria-label", "Token name after color.");
        nameInput.autocomplete = "off";
        nameInput.spellcheck = false;
        var nameControl = document.createElement("div");
        nameControl.className = "semantic-token-create-name-control";
        var namePrefix = document.createElement("span");
        namePrefix.className = "semantic-token-create-name-prefix";
        namePrefix.setAttribute("aria-hidden", "true");
        namePrefix.textContent = "color.";
        nameControl.appendChild(namePrefix);
        nameControl.appendChild(nameInput);
        nameInput.addEventListener("input", function () {
          var currentValue = String(nameInput.value || "");
          var suffix = currentValue.replace(/^(?:color\.)+/i, "");
          if (suffix === currentValue) return;
          var caret = nameInput.selectionStart;
          nameInput.value = suffix;
          if (typeof caret === "number") {
            var prefixLength = currentValue.length - suffix.length;
            var nextCaret = Math.max(0, caret - prefixLength);
            nameInput.setSelectionRange(nextCaret, nextCaret);
          }
        });
        var purposeInput = document.createElement("input");
        purposeInput.type = "text";
        purposeInput.placeholder = "Describe this token's purpose";
        purposeInput.autocomplete = "off";
        var lightInput = input("color.brand.500", "text", "colorRefs", "Foundation color.* token");
        var darkInput = input("color.brand.500", "text", "colorRefs", "Foundation color.* token");
        addLabeledField("Token name", nameControl);
        addLabeledField("Purpose", purposeInput);
        addLabeledField("Light reference", lightInput);
        addLabeledField("Dark reference", darkInput);

        var message = document.createElement("div");
        message.className = "semantic-token-create-message";
        message.setAttribute("role", "status");
        message.setAttribute("aria-live", "polite");
        form.appendChild(message);

        var actions = document.createElement("div");
        actions.className = "semantic-token-create-actions";
        var cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.className = "button-tertiary";
        cancelButton.textContent = "Cancel";
        function closeColorForm() {
          form.remove();
          var sectionAddButton = heading.querySelector(".semantic-section-add");
          if (sectionAddButton) sectionAddButton.focus();
        }
        cancelButton.addEventListener("click", closeColorForm);
        var addButton = document.createElement("button");
        addButton.type = "submit";
        addButton.className = "button-secondary";
        addButton.textContent = "Add token";
        actions.appendChild(cancelButton);
        actions.appendChild(addButton);
        form.appendChild(actions);

        form.addEventListener("keydown", function (event) {
          if (event.key === "Escape") {
            event.preventDefault();
            closeColorForm();
          }
        });
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          var canonicalName = normalizeSemanticColorName(nameInput.value);
          var purpose = purposeInput.value.trim();
          var lightReference = canonicalFoundationColorName(lightInput.value);
          var darkReference = canonicalFoundationColorName(darkInput.value);
          [nameInput, purposeInput, lightInput, darkInput].forEach(function (fieldInput) {
            fieldInput.removeAttribute("aria-invalid");
          });
          message.textContent = "";

          if (!canonicalName || !purpose || !String(lightInput.value || "").trim() || !String(darkInput.value || "").trim()) {
            if (!canonicalName) nameInput.setAttribute("aria-invalid", "true");
            if (!purpose) purposeInput.setAttribute("aria-invalid", "true");
            if (!String(lightInput.value || "").trim()) lightInput.setAttribute("aria-invalid", "true");
            if (!String(darkInput.value || "").trim()) darkInput.setAttribute("aria-invalid", "true");
            message.textContent = "Enter a token name, purpose, and both mode references.";
            return;
          }
          if (semanticColorGroupForName(canonicalName) !== groupName) {
            nameInput.setAttribute("aria-invalid", "true");
            message.textContent = "Use a color.* token name that belongs to this section.";
            return;
          }

          storeCurrentSemanticColorMode();
          if (Object.prototype.hasOwnProperty.call(semanticColorModes.Light, canonicalName)
            || Object.prototype.hasOwnProperty.call(semanticColorModes.Dark, canonicalName)) {
            nameInput.setAttribute("aria-invalid", "true");
            message.textContent = "That semantic color token already exists.";
            return;
          }

          semanticColorModes.Light[canonicalName] = lightReference;
          semanticColorModes.Dark[canonicalName] = darkReference;
          semanticColorPurposes[canonicalName] = purpose;
          form.remove();
          renderSemanticColorMode(getCurrentMode());
          refreshLists();
          var renderedHeading = findGroupHeading(container, groupName, config);
          var renderedAddButton = renderedHeading && renderedHeading.querySelector(".semantic-section-add");
          if (renderedAddButton) renderedAddButton.focus();
        });

        container.insertBefore(form, heading.nextSibling);
        nameInput.focus();
      }

      function semanticTokenNamePrefix(config, groupName) {
        return typeof config.namePrefixForGroup === "function"
          ? String(config.namePrefixForGroup(groupName) || "")
          : String(config.tokenPrefix || "");
      }

      function semanticOtherGroupPrefix(value, config, groupName) {
        var lowerValue = String(value || "").trim().toLowerCase();
        var rootPrefix = String(config.tokenPrefix || "");
        var groups = config.groups || [];
        for (var i = 0; i < groups.length; i += 1) {
          var otherGroup = groups[i];
          if (otherGroup === groupName) continue;
          var prefix = semanticTokenNamePrefix(config, otherGroup);
          var localPrefix = rootPrefix && prefix.indexOf(rootPrefix) === 0
            ? prefix.slice(rootPrefix.length)
            : prefix;
          var currentPrefix = semanticTokenNamePrefix(config, groupName).toLowerCase();
          var candidates = [prefix, localPrefix];
          for (var j = 0; j < candidates.length; j += 1) {
            var candidate = candidates[j];
            if (candidate && candidate.toLowerCase() !== currentPrefix
              && lowerValue.indexOf(candidate.toLowerCase()) === 0) return candidate;
          }
        }
        return "";
      }

      function normalizeSemanticFormName(value, config, groupName) {
        var name = String(value || "").trim();
        if (semanticOtherGroupPrefix(name, config, groupName)) return name;
        var rootPrefix = String(config.tokenPrefix || "");
        var visiblePrefix = semanticTokenNamePrefix(config, groupName);
        var groupPrefix = rootPrefix && visiblePrefix.indexOf(rootPrefix) === 0
          ? visiblePrefix.slice(rootPrefix.length)
          : visiblePrefix;
        var prefixes = [visiblePrefix, rootPrefix + groupPrefix, rootPrefix, groupPrefix]
          .filter(function (prefix, index, all) { return prefix && all.indexOf(prefix) === index; })
          .sort(function (a, b) { return b.length - a.length; });
        var lowerName = name.toLowerCase();
        for (var i = 0; i < prefixes.length; i += 1) {
          if (lowerName.indexOf(prefixes[i].toLowerCase()) === 0) {
            name = name.slice(prefixes[i].length);
            break;
          }
        }
        return name.trim();
      }

      function createSemanticTokenForm(container, groupName, heading, config, addFields, onSubmit) {
        var openForm = container.querySelector(".semantic-token-create-form");
        if (openForm) openForm.remove();

        var form = document.createElement("form");
        form.className = "semantic-token-create-form";
        form.setAttribute("aria-label", "Add " + config.typeLabel);
        var title = document.createElement("div");
        title.className = "semantic-token-create-title";
        title.textContent = "Add a token to " + config.label(groupName);
        form.appendChild(title);

        function addLabeledField(labelText, fieldInput) {
          var label = document.createElement("label");
          label.className = "semantic-token-create-field";
          var caption = document.createElement("span");
          caption.textContent = labelText;
          label.appendChild(caption);
          label.appendChild(fieldInput);
          form.appendChild(label);
        }

        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "token.path";
        nameInput.setAttribute("aria-label", "Token name after " + (semanticTokenNamePrefix(config, groupName) || "section prefix"));
        nameInput.autocomplete = "off";
        nameInput.spellcheck = false;
        var nameControl = document.createElement("div");
        nameControl.className = "semantic-token-create-name-control";
        var namePrefix = document.createElement("span");
        namePrefix.className = "semantic-token-create-name-prefix";
        namePrefix.setAttribute("aria-hidden", "true");
        namePrefix.textContent = semanticTokenNamePrefix(config, groupName);
        nameControl.appendChild(namePrefix);
        nameControl.appendChild(nameInput);
        nameInput.addEventListener("input", function () {
          var currentValue = String(nameInput.value || "");
          var suffix = normalizeSemanticFormName(currentValue, config, groupName);
          if (suffix === currentValue) return;
          var caret = nameInput.selectionStart;
          nameInput.value = suffix;
          if (typeof caret === "number") {
            var nextCaret = Math.max(0, caret - (currentValue.length - suffix.length));
            nameInput.setSelectionRange(nextCaret, nextCaret);
          }
        });
        addLabeledField("Token name", nameControl);
        if (addFields) addFields(addLabeledField);

        var message = document.createElement("div");
        message.className = "semantic-token-create-message";
        message.setAttribute("role", "status");
        message.setAttribute("aria-live", "polite");
        form.appendChild(message);

        var actions = document.createElement("div");
        actions.className = "semantic-token-create-actions";
        var cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.className = "button-tertiary";
        cancelButton.textContent = "Cancel";
        function closeForm() {
          form.remove();
          var sectionAddButton = heading.querySelector(".semantic-section-add");
          if (sectionAddButton) sectionAddButton.focus();
        }
        cancelButton.addEventListener("click", closeForm);
        var submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = "button-secondary";
        submitButton.textContent = "Add token";
        actions.appendChild(cancelButton);
        actions.appendChild(submitButton);
        form.appendChild(actions);

        form.addEventListener("keydown", function (event) {
          if (event.key === "Escape") {
            event.preventDefault();
            closeForm();
          }
        });
        form.addEventListener("input", function (event) {
          if (event.target && event.target.removeAttribute) event.target.removeAttribute("aria-invalid");
          if (message.textContent) message.textContent = "";
        });
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          onSubmit({
            event: event,
            form: form,
            nameInput: nameInput,
            message: message,
            close: function () {
              form.remove();
              refreshLists();
              var renderedHeading = findGroupHeading(container, groupName, config);
              var renderedAddButton = renderedHeading && renderedHeading.querySelector(".semantic-section-add");
              if (renderedAddButton) renderedAddButton.focus();
            }
          });
        });

        container.insertBefore(form, heading.nextSibling);
        nameInput.focus();
      }

      function semanticFormTokenNames(container, isText) {
        var values = isText ? readTextStyles() : readPairs(container, false);
        var names = {};
        Object.keys(values || {}).forEach(function (name) { names[String(name).toLowerCase()] = true; });
        return names;
      }

      function semanticFormNameParts(nameInput, config, groupName) {
        var otherGroupPrefix = semanticOtherGroupPrefix(nameInput.value, config, groupName);
        var prefix = otherGroupPrefix || semanticTokenNamePrefix(config, groupName);
        var nameValue = otherGroupPrefix
          ? String(nameInput.value || "").trim().slice(otherGroupPrefix.length)
          : normalizeSemanticFormName(nameInput.value, config, groupName);
        var suffix = nameValue.trim();
        var fullName = prefix + suffix;
        var rootPrefix = String(config.tokenPrefix || "");
        var storedName = rootPrefix && fullName.toLowerCase().indexOf(rootPrefix.toLowerCase()) === 0
          ? fullName.slice(rootPrefix.length)
          : fullName;
        return { suffix: suffix, fullName: fullName, storedName: storedName };
      }

      function openSemanticPairTokenForm(container, groupName, heading, config) {
        var referenceInput = input(config.defaultReference || "", "text", config.referenceList, config.referenceLabel || "Foundation token");
        createSemanticTokenForm(container, groupName, heading, config, function (addLabeledField) {
          addLabeledField(config.referenceLabel || "Foundation reference", referenceInput);
        }, function (formState) {
          var nameParts = semanticFormNameParts(formState.nameInput, config, groupName);
          var reference = String(referenceInput.value || "").trim();
          [formState.nameInput, referenceInput].forEach(function (fieldInput) { fieldInput.removeAttribute("aria-invalid"); });
          formState.message.textContent = "";

          if (!nameParts.suffix || !/^[a-z0-9_-]+(?:\.[a-z0-9_-]+)*$/i.test(nameParts.suffix)) {
            formState.nameInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "Enter a token path using letters, numbers, dots, underscores, or hyphens.";
            return;
          }
          if (config.groupForName(nameParts.storedName.toLowerCase()) !== groupName) {
            formState.nameInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "Use a token name that belongs to this section.";
            return;
          }
          if (!reference) {
            referenceInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "Choose a foundation reference.";
            return;
          }
          if (semanticFormTokenNames(container, false)[nameParts.storedName.toLowerCase()]) {
            formState.nameInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "That semantic token already exists.";
            return;
          }

          addPair(container, "cols-2", nameParts.storedName, reference, "text", config.referenceList);
          formState.close();
        });
      }

      function openSemanticTextTokenForm(container, groupName, heading, config) {
        var fields = [
          { label: "Font family", value: "font.family.sans", list: "fontFamilyRefs", placeholder: "Foundation font.family.* token" },
          { label: "Font size", value: "font.size.14", list: "fontSizeRefs", placeholder: "Foundation font.size.* token" },
          { label: "Font weight", value: "font.weight.regular", list: "fontWeightRefs", placeholder: "Foundation font.weight.* token" },
          { label: "Line height", value: "font.lineHeight.150", list: "fontLineHeightRefs", placeholder: "Foundation font.lineHeight.* token" },
          { label: "Letter spacing", value: "font.letterSpacing.default", list: "fontLetterSpacingRefs", placeholder: "Foundation font.letterSpacing.* token" },
          { label: "Text transform", value: "font.textTransform.none", list: "fontTextTransformRefs", placeholder: "Foundation font.textTransform.* token" }
        ];
        fields.forEach(function (fieldConfig) {
          fieldConfig.input = input(fieldConfig.value, "text", fieldConfig.list, fieldConfig.placeholder);
        });
        createSemanticTokenForm(container, groupName, heading, config, function (addLabeledField) {
          fields.forEach(function (fieldConfig) { addLabeledField(fieldConfig.label, fieldConfig.input); });
        }, function (formState) {
          var nameParts = semanticFormNameParts(formState.nameInput, config, groupName);
          var allFields = [formState.nameInput].concat(fields.map(function (fieldConfig) { return fieldConfig.input; }));
          allFields.forEach(function (fieldInput) { fieldInput.removeAttribute("aria-invalid"); });
          formState.message.textContent = "";

          if (!nameParts.suffix || !/^[a-z0-9_-]+(?:\.[a-z0-9_-]+)*$/i.test(nameParts.suffix)) {
            formState.nameInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "Enter a token path using letters, numbers, dots, underscores, or hyphens.";
            return;
          }
          if (config.groupForName(nameParts.storedName.toLowerCase()) !== groupName) {
            formState.nameInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "Use a text style name that belongs to this section.";
            return;
          }
          var emptyFields = fields.filter(function (fieldConfig) { return !String(fieldConfig.input.value || "").trim(); });
          if (emptyFields.length) {
            emptyFields.forEach(function (fieldConfig) { fieldConfig.input.setAttribute("aria-invalid", "true"); });
            formState.message.textContent = "Complete each foundation reference before adding the text style.";
            return;
          }
          if (semanticFormTokenNames(container, true)[nameParts.storedName.toLowerCase()]) {
            formState.nameInput.setAttribute("aria-invalid", "true");
            formState.message.textContent = "That semantic text style already exists.";
            return;
          }

          addTextStyle([nameParts.storedName].concat(fields.map(function (fieldConfig) { return fieldConfig.input.value.trim(); })));
          sortSemanticTextRows();
          formState.close();
        });
      }

      function insertRowIntoGroupedContainer(container, row) {
        var config = groupedTokenConfig(container);
        if (!config || !row || !row.classList || !row.classList.contains("token-row")) return;
        var groupName = config.groupForName(rowTokenName(row));
        var heading = ensureGroupHeading(container, groupName, config);
        var nextHeading = null;
        var cursor = heading.nextSibling;
        while (cursor) {
          if (cursor.classList && cursor.classList.contains("semantic-group-title")) {
            nextHeading = cursor;
            break;
          }
          cursor = cursor.nextSibling;
        }
        container.insertBefore(row, nextHeading);
      }

      function bindRowGrouping(container, row, nameInput) {
        if (!groupedTokenConfig(container) || !nameInput) return;
        nameInput.addEventListener("input", function () {
          window.clearTimeout(row._tokenGroupingTimer);
          row._tokenGroupingTimer = window.setTimeout(function () {
            insertRowIntoGroupedContainer(container, row);
          }, 0);
        });
      }

      function addPair(container, className, name, value, valueType, list) {
        if (container === containers.foundationMotionDuration) name = String(name || "").replace(/^motion\./, "");
        if (container === containers.semanticMotionDuration || container === containers.semanticMotionEasing) value = String(value === undefined ? "" : value).replace(/^motion\./, "");
        var row = document.createElement("div");
        row.className = "token-row " + className;
        var nameInput = setFieldRole(input(name || "", "text", null, "token name"), "name");
        row.appendChild(field("token", nameInput));
        row.appendChild(field(list ? "ref" : "value", setFieldRole(input(value === undefined ? "" : value, valueType || "text", list, list ? "reference" : "value"), list ? "ref" : "value")));
        addRemove(row);
        container.appendChild(row);
        bindRowGrouping(container, row, nameInput);
        insertRowIntoGroupedContainer(container, row);
        return row;
      }

      function getFoundationColorHex(ref) {
        var normalizedName = normalizeColorTokenName(ref);
        var store = readFoundationColorStore();
        return store[normalizedName] || "";
      }

      function addSemanticColorPair(container, name, value) {
        var row = document.createElement("div");
        row.className = "token-row cols-color-mapping";
        var nameInput = setFieldRole(input(normalizeSemanticColorName(name), "text", null, "color.* token name"), "name");
        var valInput = setFieldRole(input(value === undefined ? "" : value, "text", "colorRefs", "reference"), "ref");
        var purposeTokenName = normalizeSemanticColorName(name);
        var swatch = document.createElement("span");
        swatch.className = "color-mapping-swatch";
        swatch.style.background = getFoundationColorHex(valInput.value) || "transparent";
        var purposeTooltip = document.createElement("span");
        purposeTooltip.className = "semantic-color-purpose-tooltip";
        purposeTooltip.id = "semantic-color-purpose-" + (++semanticColorPurposeTooltipId);
        purposeTooltip.setAttribute("role", "tooltip");
        nameInput.setAttribute("aria-describedby", purposeTooltip.id);
        valInput.setAttribute("aria-describedby", purposeTooltip.id);
        function updatePurposeTooltip() {
          var currentName = normalizeSemanticColorName(nameInput.value);
          if (purposeTokenName && currentName && purposeTokenName !== currentName
            && semanticColorPurposes[purposeTokenName] && !semanticColorPurposes[currentName]) {
            semanticColorPurposes[currentName] = semanticColorPurposes[purposeTokenName];
            delete semanticColorPurposes[purposeTokenName];
            purposeTokenName = currentName;
          }
          var purpose = semanticColorPurpose(nameInput.value);
          nameInput.title = purpose;
          row.title = purpose;
          swatch.title = purpose;
          valInput.title = purpose + "\nReference a Foundation color.* token.";
          purposeTooltip.textContent = purpose;
        }
        nameInput.addEventListener("input", updatePurposeTooltip);
        nameInput.addEventListener("blur", function () {
          var canonicalName = normalizeSemanticColorName(nameInput.value);
          if (canonicalName && canonicalName !== nameInput.value) {
            nameInput.value = canonicalName;
            nameInput.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });
        valInput.addEventListener("input", function () {
          swatch.style.background = getFoundationColorHex(valInput.value) || "transparent";
        });
        row.appendChild(field("token", nameInput));
        var swatchWrapper = document.createElement("div");
        swatchWrapper.className = "field swatch-field";
        swatchWrapper.style.display = "flex";
        swatchWrapper.style.justifyContent = "center";
        swatchWrapper.style.alignItems = "center";
        swatchWrapper.appendChild(swatch);
        row.appendChild(swatchWrapper);
        row.appendChild(field("ref", valInput));
        addRemove(row);
        var removeButton = row.querySelector("button.icon");
        if (removeButton) removeButton.addEventListener("click", function () {
          if (purposeTokenName) delete semanticColorPurposes[purposeTokenName];
        });
        row.appendChild(purposeTooltip);
        container.appendChild(row);
        bindRowGrouping(container, row, nameInput);
        insertRowIntoGroupedContainer(container, row);
        updatePurposeTooltip();
        return row;
      }

      function normalizeSemanticColorName(name) {
        var clean = String(name || "").trim().replace(/^(?:color\.)+/, "");
        return clean ? "color." + clean : "";
      }

      function semanticColorPath(name) {
        return normalizeSemanticColorName(name).replace(/^color\./, "");
      }

      function semanticColorPurpose(name) {
        var purposes = {
          "bg.canvas": "Main application background",
          "bg.surface": "Primary content surface",
          "bg.subtle": "Secondary sections and table headers",
          "bg.raised": "Elevated cards",
          "bg.overlay": "Dialogs, menus, and popovers",
          "bg.hover": "Neutral hover state",
          "bg.pressed": "Neutral pressed state",
          "bg.selected": "Selected rows and navigation items",
          "bg.disabled": "Disabled control backgrounds",
          "text.primary": "Headings and primary content",
          "text.secondary": "Supporting descriptions",
          "text.tertiary": "Metadata and timestamps",
          "text.disabled": "Disabled labels",
          "text.placeholder": "Input placeholders",
          "text.inverse": "Text on dark surfaces",
          "text.on-brand": "Text on brand-filled surfaces",
          "text.link": "Hyperlinks",
          "text.link-hover": "Hovered hyperlinks",
          "border.default": "Standard component border",
          "border.subtle": "Dividers and separators",
          "border.strong": "High-emphasis outlines",
          "border.input": "Form controls",
          "border.hover": "Hovered controls",
          "border.focus": "Focus indicator",
          "border.selected": "Selected controls",
          "border.disabled": "Disabled controls",
          "border.danger": "Invalid inputs",
          "icon.primary": "Primary icons",
          "icon.secondary": "Supporting icons",
          "icon.tertiary": "Low-emphasis icons",
          "icon.disabled": "Disabled icons",
          "icon.inverse": "Icons on dark surfaces",
          "icon.brand": "Brand-associated icons",
          "bg.interactive.primary": "Primary action background",
          "bg.interactive.primary-hover": "Primary action hover",
          "bg.interactive.primary-pressed": "Primary action pressed",
          "bg.interactive.secondary": "Secondary action background",
          "bg.interactive.secondary-hover": "Secondary action hover",
          "bg.interactive.secondary-pressed": "Secondary action pressed",
          "bg.interactive.danger": "Destructive action",
          "bg.interactive.danger-hover": "Destructive hover",
          "bg.interactive.danger-pressed": "Destructive pressed",
          "status.info.text": "Text color for informational feedback",
          "status.info.bg": "Background color for informational feedback",
          "status.info.border": "Border color for informational feedback",
          "status.info.icon": "Icon color for informational feedback",
          "status.success.text": "Text color for successful feedback",
          "status.success.bg": "Background color for successful feedback",
          "status.success.border": "Border color for successful feedback",
          "status.success.icon": "Icon color for successful feedback",
          "status.warning.text": "Text color for warning feedback",
          "status.warning.bg": "Background color for warning feedback",
          "status.warning.border": "Border color for warning feedback",
          "status.warning.icon": "Icon color for warning feedback",
          "status.danger.text": "Text color for error and destructive feedback",
          "status.danger.bg": "Background color for error and destructive feedback",
          "status.danger.border": "Border color for error and destructive feedback",
          "status.danger.icon": "Icon color for error and destructive feedback"
        };
        var normalizedName = normalizeSemanticColorName(name);
        if (semanticColorPurposes[normalizedName]) return semanticColorPurposes[normalizedName];
        var path = semanticColorPath(name);
        var purpose = purposes[path] || (path
          ? "Custom semantic color role: " + path.replace(/[.-]/g, " ")
          : "Add a semantic color token to describe its role");
        return purpose;
      }

      function updateAllSemanticColorSwatches() {
        var store = readFoundationColorStore();
        Array.prototype.forEach.call(containers.semanticColors.querySelectorAll(".token-row.cols-color-mapping"), function (row) {
          var valInput = row.querySelector("input[data-field-role=\"ref\"]") || row.querySelector(".field-ref input");
          var swatch = row.querySelector(".color-mapping-swatch");
          if (valInput && swatch) {
            var ref = valInput.value.trim();
            var normalizedName = normalizeColorTokenName(ref);
            swatch.style.background = store[normalizedName] || "transparent";
          }
        });
      }

      function addFontFamilyPair(container, name, value) {
        var row = document.createElement("div");
        row.className = "token-row cols-2";
        row.appendChild(field("token", setFieldRole(input(name || "", "text", null, "token name"), "name")));
        row.appendChild(field("value", setFieldRole(fontFamilyInput(value), "value")));
        addRemove(row);
        container.appendChild(row);
      }

      function addFoundationColorRow(container, name, value, valueType) {
        var row = document.createElement("div");
        row.className = "token-row cols-color-mapping";
        var nameInput = setFieldRole(input(canonicalFoundationColorName(name), "text", null, "color.* token name"), "name");
        var valueInput = setFieldRole(input(value === undefined ? "" : value, "text", null, "value"), "value");
        
        var swatch = document.createElement("span");
        swatch.className = "color-mapping-swatch";
        swatch.style.background = valueInput.value || "transparent";
        swatch.style.cursor = "pointer";
        
        swatch.addEventListener("click", function (event) {
          event.stopPropagation();
          openCustomColorPicker({
            anchor: swatch,
            color: valueInput.value,
            showNameEditor: false,
            onColorChange: function (newColor) {
              valueInput.value = newColor;
              swatch.style.background = newColor;
              syncFoundationColorsStore();
            }
          });
        });
        
        nameInput.addEventListener("input", syncFoundationColorsStore);
        nameInput.addEventListener("blur", function () {
          var canonicalName = canonicalFoundationColorName(nameInput.value);
          if (canonicalName && canonicalName !== nameInput.value) {
            nameInput.value = canonicalName;
            nameInput.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });
        valueInput.addEventListener("input", function() {
          swatch.style.background = valueInput.value || "transparent";
          syncFoundationColorsStore();
        });
        
        row.appendChild(field("token", nameInput));
        
        var swatchWrapper = document.createElement("div");
        swatchWrapper.className = "field swatch-field";
        swatchWrapper.style.display = "flex";
        swatchWrapper.style.justifyContent = "center";
        swatchWrapper.style.alignItems = "center";
        swatchWrapper.appendChild(swatch);
        row.appendChild(swatchWrapper);
        
        row.appendChild(field("value", valueInput));
        
        var removeBtn = createRemoveButton(row);
        removeBtn.addEventListener("click", syncFoundationColorsStore);
        row.appendChild(removeBtn);
        container.appendChild(row);
      }

      function normalizeColorTokenName(name) {
        return String(name || "").trim().replace(/^(?:color\.)+/, "");
      }

      function canonicalFoundationColorName(name) {
        var tokenName = normalizeColorTokenName(name);
        return tokenName ? "color." + tokenName : "";
      }

      function normalizeBrandColorName(name) {
        return normalizeColorTokenName(name || "brand")
          .replace(/[^a-zA-Z0-9_.-]+/g, ".")
          .replace(/\.+/g, ".")
          .replace(/^\./, "")
          .replace(/\.$/, "") || "brand";
      }

      function isNeutralColorToken(name) {
        return normalizeColorTokenName(name).indexOf("neutral.") === 0;
      }

      function isStatusColorToken(name) {
        var packName = brandPackNameFromToken(name);
        return packName === "info" || packName === "success" || packName === "warning" || packName === "danger";
      }

      function brandPackNameFromToken(name) {
        var tokenName = normalizeColorTokenName(name);
        var match = tokenName.match(/^(.*)\.(100|300|500|700|900)$/);
        return match && match[1] ? match[1] : "";
      }

      function readFoundationColorStore() {
        return readPairs(containers.foundationColors, false);
      }

      function writeFoundationColorStore(values) {
        containers.foundationColors.innerHTML = "";
        Object.keys(values || {}).forEach(function (tokenName) {
          addPair(containers.foundationColors, "cols-2", tokenName, values[tokenName], "color");
        });
      }

      function readFoundationColorTokens() {
        var values = readFoundationColorStore();
        var tokens = {};
        Object.keys(values).forEach(function (tokenName) {
          tokens[canonicalFoundationColorName(tokenName)] = values[tokenName];
        });
        return tokens;
      }

      function collectBrandPackNamesFromStore(values) {
        var names = {};
        Object.keys(values || {}).forEach(function (tokenName) {
          var packName = brandPackNameFromToken(tokenName);
          if (packName && !isNeutralColorToken(tokenName) && !isStatusColorToken(tokenName)) names[packName] = true;
        });
        return names;
      }

      function firstBrandPackName(values) {
        var names = collectBrandPackNamesFromStore(values);
        return Object.keys(names)[0] || "brand";
      }

      function nextAvailableBrandPackName(baseName, values, exemptName) {
        var cleanBase = normalizeBrandColorName(baseName || "brand");
        var names = collectBrandPackNamesFromStore(values);
        if (!names[cleanBase] || cleanBase === exemptName) return cleanBase;
        var suffix = 2;
        var candidate = cleanBase + "." + suffix;
        while (names[candidate] && candidate !== exemptName) {
          suffix += 1;
          candidate = cleanBase + "." + suffix;
        }
        return candidate;
      }

      function writeBrandPackScaleInOrder(values, previousName, nextName, baseHex) {
        var previousPack = normalizeBrandColorName(previousName || nextName);
        var nextPack = normalizeBrandColorName(nextName || previousPack);
        var scale = buildToneScaleFromHex(baseHex || "#E8341C");
        var replaced = false;
        var nextValues = {};
        Object.keys(values || {}).forEach(function (tokenName) {
          var packName = brandPackNameFromToken(tokenName);
          if (packName === previousPack) {
            if (!replaced) {
              toneSteps.forEach(function (step) {
                nextValues[nextPack + "." + step] = scale[step];
              });
              replaced = true;
            }
            return;
          }
          nextValues[tokenName] = values[tokenName];
        });
        if (!replaced) {
          toneSteps.forEach(function (step) {
            nextValues[nextPack + "." + step] = scale[step];
          });
        }
        return nextValues;
      }

      function brandPackDisplayColor(values, name) {
        var fallback = "";
        toneSteps.forEach(function (step) {
          var tokenValue = values[name + "." + step];
          if (step === 500 && tokenValue) fallback = tokenValue;
          if (!fallback && tokenValue) fallback = tokenValue;
        });
        return fallback || "#E8341C";
      }

      function ensureNeutralColorsInStore(values) {
        delete values["neutral.50"];
        var orderedValues = {};
        Object.keys(neutralScale).forEach(function (step) {
          var tokenName = "neutral." + step;
          orderedValues[tokenName] = tokenName in values ? values[tokenName] : neutralScale[step];
        });
        Object.keys(values).forEach(function (tokenName) {
          if (tokenName !== "neutral.50" && !(tokenName in orderedValues)) orderedValues[tokenName] = values[tokenName];
        });
        Object.keys(values).forEach(function (tokenName) { delete values[tokenName]; });
        Object.keys(orderedValues).forEach(function (tokenName) { values[tokenName] = orderedValues[tokenName]; });
      }

      function ensureStatusColorsInStore(values) {
        defaultFoundationStatusColorPacks.forEach(function (pack) {
          var packName = pack[0];
          var scale = buildToneScaleFromHex(pack[1]);
          toneSteps.forEach(function (step) {
            var tokenName = packName + "." + step;
            if (!(tokenName in values)) values[tokenName] = scale[step];
          });
        });
      }

      function ensureRequiredFoundationColorsInStore(values) {
        ensureNeutralColorsInStore(values);
        defaultFoundationColorPacks.forEach(function (pack) {
          var packName = normalizeBrandColorName(pack[0]);
          if (!collectBrandPackNamesFromStore(values)[packName]) {
            addToneScaleToStore(values, packName, pack[1]);
          }
        });
        var defaultColorsByPack = {};
        defaultFoundationColorPacks.forEach(function (pack) {
          defaultColorsByPack[normalizeBrandColorName(pack[0])] = pack[1];
        });
        Object.keys(collectBrandPackNamesFromStore(values)).forEach(function (packName) {
          var baseHex = values[packName + ".500"] || brandPackDisplayColor(values, packName) || defaultColorsByPack[packName];
          var scale = buildToneScaleFromHex(baseHex || defaultColorsByPack[packName] || "#E8341C");
          toneSteps.forEach(function (step) {
            var tokenName = packName + "." + step;
            if (!(tokenName in values)) values[tokenName] = scale[step];
          });
        });
        ensureStatusColorsInStore(values);
      }

      function removeBrandPack(name) {
        var canonical = readFoundationColorStore();
        var packName = normalizeBrandColorName(name || selectedBrandPackName);
        Object.keys(canonical).forEach(function (tokenName) {
          if (brandPackNameFromToken(tokenName) === packName) delete canonical[tokenName];
        });
        var nextName = firstBrandPackName(canonical);
        if (nextName === "brand" && !collectBrandPackNamesFromStore(canonical).brand) {
          var scale = buildToneScaleFromHex("#E8341C");
          toneSteps.forEach(function (step) {
            canonical["brand." + step] = scale[step];
          });
        }
        ensureNeutralColorsInStore(canonical);
        ensureStatusColorsInStore(canonical);
        writeFoundationColorStore(canonical);
        nextName = firstBrandPackName(canonical);
        if (packName === selectedBrandPackName) {
          updateMainColorReferences(packName, nextName);
        }
        setSelectedBrandPack(nextName);
        refreshLists();
      }

      function renderBrandPackTabs() {
        var canonical = readFoundationColorStore();
        var names = collectBrandPackNamesFromStore(canonical);
        var orderedNames = Object.keys(names);
        if (!orderedNames.length) orderedNames = [selectedBrandPackName || "brand"];
        if (orderedNames.indexOf(selectedBrandPackName) === -1) selectedBrandPackName = orderedNames[0];
        brandPackTabs.innerHTML = "";
        orderedNames.forEach(function (name) {
          var item = document.createElement("button");
          item.type = "button";
          item.className = "brand-pack-item";
          var isActive = name === selectedBrandPackName;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", isActive ? "true" : "false");

          if (isActive) {
            item.style.backgroundColor = brandPackDisplayColor(canonical, name);
            item.title = name + " (Click to edit)";
            item.setAttribute("aria-label", name + " pack");
            item.addEventListener("click", function (event) {
              event.stopPropagation();
              openCustomColorPicker({
                anchor: item,
                color: brandPackDisplayColor(canonical, name),
                showNameEditor: true,
                name: name,
                onNameChange: function (newName) {
                  mainColorNameInput.value = newName;
                  renderMainColorScale({ preserveBrandPackTabs: true });
                },
                onColorChange: function (newColor) {
                  mainColorValueInput.value = newColor;
                  renderMainColorScale({ preserveBrandPackTabs: true });
                  item.style.backgroundColor = newColor;
                },
                onDelete: function () {
                  removeBrandPack(name);
                }
              });
            });
          } else {
            item.style.backgroundColor = brandPackDisplayColor(canonical, name);
            item.title = name + " (Click to activate)";
            item.setAttribute("aria-label", name + " pack");
            item.style.cursor = "pointer";
            item.addEventListener("click", function () {
              setSelectedBrandPack(name);
            });
          }

          brandPackTabs.appendChild(item);
        });
        if (addBrandPackButton) brandPackTabs.appendChild(addBrandPackButton);
      }

      function setSelectedBrandPack(name) {
        var canonical = readFoundationColorStore();
        selectedBrandPackName = normalizeBrandColorName(name || firstBrandPackName(canonical));
        currentMainColorName = selectedBrandPackName;
        mainColorNameInput.value = selectedBrandPackName;
        mainColorValueInput.value = canonical[selectedBrandPackName + ".500"] || mainColorValueInput.value || "#E8341C";
        rebuildVisibleColorListsFromStore();
      }

      function hexToRgb(hex) {
        var clean = String(hex || "#000000").replace("#", "");
        if (clean.length === 3) {
          clean = clean.split("").map(function (part) { return part + part; }).join("");
        }
        var value = /^[0-9a-f]{6}$/i.test(clean) ? clean : "000000";
        return {
          r: parseInt(value.slice(0, 2), 16),
          g: parseInt(value.slice(2, 4), 16),
          b: parseInt(value.slice(4, 6), 16)
        };
      }

      function rgbToHex(rgb) {
        function channel(value) {
          return Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0");
        }
        return ("#" + channel(rgb.r) + channel(rgb.g) + channel(rgb.b)).toUpperCase();
      }

      function mixColor(a, b, amount) {
        return {
          r: a.r + (b.r - a.r) * amount,
          g: a.g + (b.g - a.g) * amount,
          b: a.b + (b.b - a.b) * amount
        };
      }

      function buildToneScaleFromHex(hex) {
        var base = hexToRgb(hex);
        return {
          100: rgbToHex(mixColor(base, { r: 255, g: 255, b: 255 }, 0.82)),
          300: rgbToHex(mixColor(base, { r: 255, g: 255, b: 255 }, 0.38)),
          500: rgbToHex(base),
          700: rgbToHex(mixColor(base, { r: 0, g: 0, b: 0 }, 0.22)),
          900: rgbToHex(mixColor(base, { r: 0, g: 0, b: 0 }, 0.46))
        };
      }

      function addToneScaleToStore(values, name, baseHex) {
        var cleanName = normalizeBrandColorName(name || "brand");
        var scale = buildToneScaleFromHex(baseHex || "#E8341C");
        toneSteps.forEach(function (step) {
          values[cleanName + "." + step] = scale[step];
        });
      }

      function insertBrandPackInStoreAfter(values, activePackName, newPackName, baseHex) {
        var cleanActive = normalizeBrandColorName(activePackName);
        var cleanNew = normalizeBrandColorName(newPackName);
        var scale = buildToneScaleFromHex(baseHex || "#E8341C");
        var nextValues = {};
        var inserted = false;
        
        Object.keys(values || {}).forEach(function (key) {
          nextValues[key] = values[key];
          if (key === cleanActive + ".900" && !inserted) {
            toneSteps.forEach(function (step) {
              nextValues[cleanNew + "." + step] = scale[step];
            });
            inserted = true;
          }
        });
        
        if (!inserted) {
          toneSteps.forEach(function (step) {
            nextValues[cleanNew + "." + step] = scale[step];
          });
        }
        return nextValues;
      }

      function seedDefaultFoundationColors() {
        var canonical = {};
        defaultFoundationColorPacks.forEach(function (pack) {
          addToneScaleToStore(canonical, pack[0], pack[1]);
        });
        defaultFoundationStatusColorPacks.forEach(function (pack) {
          addToneScaleToStore(canonical, pack[0], pack[1]);
        });
        ensureNeutralColorsInStore(canonical);
        ensureStatusColorsInStore(canonical);
        writeFoundationColorStore(canonical);
        selectedBrandPackName = defaultFoundationColorPacks[0][0];
        currentMainColorName = selectedBrandPackName;
        rebuildVisibleColorListsFromStore();
        refreshLists();
      }

      function ensureNeutralRows() {
        if (containers.neutralColors.children.length) return;
        Object.keys(neutralScale).forEach(function (step) {
          addFoundationColorRow(containers.neutralColors, "neutral." + step, neutralScale[step], "color");
        });
      }

      function syncFoundationColorsStore() {
        var seen = readFoundationColorStore();
        Object.keys(seen).forEach(function (tokenName) {
          if (isNeutralColorToken(tokenName) || isStatusColorToken(tokenName) || brandPackNameFromToken(tokenName)) {
            delete seen[tokenName];
          }
        });
        [containers.brandColors, containers.neutralColors, containers.statusColors].forEach(function (source) {
          Array.prototype.forEach.call(source.children, function (row) {
            var fields = row.querySelectorAll("input");
            var name = fields[0] ? fields[0].value : "";
            var value = fields[1] ? fields[1].value : "";
            var normalizedName = normalizeColorTokenName(name);
            if (!normalizedName) return;
            seen[normalizedName] = value;
          });
        });
        ensureNeutralColorsInStore(seen);
        ensureStatusColorsInStore(seen);
        writeFoundationColorStore(seen);
        renderBrandPackTabs();
        refreshLists();
      }

      function rebuildVisibleColorListsFromStore(options) {
        options = options || {};
        var canonical = readFoundationColorStore();
        ensureNeutralColorsInStore(canonical);
        ensureStatusColorsInStore(canonical);
        writeFoundationColorStore(canonical);
        var packNames = collectBrandPackNamesFromStore(canonical);
        if (!packNames[selectedBrandPackName]) selectedBrandPackName = firstBrandPackName(canonical);
        currentMainColorName = selectedBrandPackName;
        mainColorNameInput.value = selectedBrandPackName;
        if (canonical[selectedBrandPackName + ".500"]) mainColorValueInput.value = canonical[selectedBrandPackName + ".500"];
        containers.brandColors.innerHTML = "";
        containers.neutralColors.innerHTML = "";
        containers.statusColors.innerHTML = "";
        Object.keys(canonical).forEach(function (tokenName) {
          if (isNeutralColorToken(tokenName)) {
            addFoundationColorRow(containers.neutralColors, tokenName, canonical[tokenName], "color");
          } else if (isStatusColorToken(tokenName)) {
            addFoundationColorRow(containers.statusColors, tokenName, canonical[tokenName], "color");
          } else {
            addFoundationColorRow(containers.brandColors, tokenName, canonical[tokenName], "color");
          }
        });
        ensureNeutralRows();
        if (!options.preserveBrandPackTabs) renderBrandPackTabs();
      }

      function renderMainColorScale(options) {
        options = options || {};
        var rawName = mainColorNameInput.value.trim();
        if (!rawName) {
          containers.brandColors.innerHTML = "";
          return;
        }
        var nextBaseHex = rgbToHex(hexToRgb(mainColorValueInput.value || "#E8341C"));
        var canonical = readFoundationColorStore();
        var nextName = nextAvailableBrandPackName(rawName, canonical, currentMainColorName);
        updateMainColorReferences(currentMainColorName, nextName);
        canonical = writeBrandPackScaleInOrder(canonical, currentMainColorName, nextName, nextBaseHex);
        currentMainColorName = nextName;
        selectedBrandPackName = nextName;
        ensureNeutralColorsInStore(canonical);
        ensureStatusColorsInStore(canonical);
        writeFoundationColorStore(canonical);
        rebuildVisibleColorListsFromStore({
          preserveBrandPackTabs: !!options.preserveBrandPackTabs
        });
        refreshLists();
      }

      function updateMainColorReferences(previousName, nextName) {
        if (!previousName || previousName === nextName) return;
        var previousPrefix = "color." + previousName + ".";
        var nextPrefix = "color." + nextName + ".";
        Array.prototype.forEach.call(containers.semanticColors.querySelectorAll("input"), function (field) {
          if (field.value.indexOf(previousPrefix) === 0) {
            field.value = nextPrefix + field.value.slice(previousPrefix.length);
          }
        });
        Array.prototype.forEach.call(containers.semanticText.querySelectorAll("input"), function (field) {
          if (field.value.indexOf(previousPrefix) === 0) {
            field.value = nextPrefix + field.value.slice(previousPrefix.length);
          }
        });
      }

      function renderSemanticText(styleValues) {
        var config = groupedTokenConfig(containers.semanticText);
        var groups = {};
        config.groups.forEach(function (groupName) { groups[groupName] = []; });
        var entries = [];
        if (Array.isArray(styleValues)) {
          styleValues.forEach(function (row) {
            if (row && row.length) entries.push([row[0], row]);
          });
        } else if (styleValues && typeof styleValues === "object") {
          Object.keys(styleValues).forEach(function (name) {
            var style = styleValues[name];
            if (!style || typeof style !== "object") return;
            entries.push([name, [
              name,
              style.fontFamily || "",
              style.fontSize || "",
              style.fontWeight || "",
              style.lineHeight || "",
              style.letterSpacing || "",
              style.textCase || ""
            ]]);
          });
        }
        entries.forEach(function (entry) {
          var groupName = config.groupForName(entry[0]);
          if (!groups[groupName]) groups[groupName] = [];
          groups[groupName].push(entry[1]);
        });
        containers.semanticText.innerHTML = "";
        config.groups.forEach(function (groupName) {
          ensureGroupHeading(containers.semanticText, groupName, config);
          (groups[groupName] || []).forEach(addTextStyle);
        });
        sortSemanticTextRows();
      }

      function addTextStyle(values) {
        var row = document.createElement("div");
        row.className = "token-row cols-text semantic-text-row row-collapsed";
        var data = values || ["", "font.family.sans", "font.size.14", "font.weight.regular", "font.lineHeight.150", "font.letterSpacing.default", "font.textTransform.none"];
        if (data.length >= 8 && String(data[1] || "").trim().indexOf("color.") === 0) {
          data = [data[0], data[2], data[3], data[4], data[5], data[6], data[7]];
        }
        var nameInput = setTextFieldRole(input(data[0], "text", null, "text token"), "name");
        row.appendChild(field("token", nameInput));
        row.appendChild(field("ref", setTextFieldRole(input(data[1], "text", "fontFamilyRefs", "family ref"), "fontFamily")));
        row.appendChild(field("ref", setTextFieldRole(input(data[2], "text", "fontSizeRefs", "size token ref"), "fontSize")));
        row.appendChild(field("ref", setTextFieldRole(input(data[3], "text", "fontWeightRefs", "weight ref"), "fontWeight")));
        row.appendChild(field("ref", setTextFieldRole(input(data[4], "text", "fontLineHeightRefs", "line-height token ref"), "lineHeight")));
        row.appendChild(field("ref", setTextFieldRole(input(data[5], "text", "fontLetterSpacingRefs", "letter token ref"), "letterSpacing")));
        row.appendChild(field("ref", setTextFieldRole(input(data[6], "text", "fontTextTransformRefs", "case ref"), "textCase")));
        var actions = document.createElement("div");
        actions.className = "row-actions";
        var toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.className = "icon";
        setIcon(toggleButton, "chevron-right");
        toggleButton.title = "Expand mapping";
        toggleButton.setAttribute("aria-label", "Expand mapping");
        toggleButton.addEventListener("click", function () {
          var collapsed = row.classList.toggle("row-collapsed");
          setIcon(toggleButton, collapsed ? "chevron-right" : "chevron-down");
          toggleButton.title = collapsed ? "Expand mapping" : "Collapse mapping";
          toggleButton.setAttribute("aria-label", collapsed ? "Expand mapping" : "Collapse mapping");
        });
        actions.appendChild(toggleButton);
        actions.appendChild(createRemoveButton(row));
        row.appendChild(actions);
        bindRowGrouping(containers.semanticText, row, nameInput);
        insertRowIntoGroupedContainer(containers.semanticText, row);
        nameInput.addEventListener("change", function () {
          sortSemanticTextRows();
        });
        return row;
      }

      function extractFontSizeValue(rawRef) {
        var ref = String(rawRef || "").trim();
        if (!ref) return Number.NEGATIVE_INFINITY;
        var explicitNumber = Number(ref);
        if (!Number.isNaN(explicitNumber)) return explicitNumber;
        var tail = ref.split(".").pop() || "";
        var tailNumber = Number(tail);
        if (!Number.isNaN(tailNumber)) return tailNumber;
        var match = ref.match(/-?\d+(\.\d+)?/g);
        if (!match || !match.length) return Number.NEGATIVE_INFINITY;
        return Number(match[match.length - 1]);
      }

      function semanticTextGroupName(rawName) {
        var name = String(rawName || "").trim().toLowerCase();
        return name.split(".")[0] || name;
      }

      function sortSemanticTextRows() {
        var config = groupedTokenConfig(containers.semanticText);
        config.groups.forEach(function (groupName) {
          var heading = findGroupHeading(containers.semanticText, groupName, config);
          if (!heading) return;
          var rows = [];
          var cursor = heading.nextSibling;
          var nextHeading = null;
          while (cursor) {
            if (cursor.classList && cursor.classList.contains("semantic-group-title")) {
              nextHeading = cursor;
              break;
            }
            if (cursor.classList && cursor.classList.contains("semantic-text-row")
              && config.groupForName(rowTokenName(cursor)) === groupName) {
              rows.push(cursor);
            }
            cursor = cursor.nextSibling;
          }
          rows.sort(function (a, b) {
            var aName = rowTokenName(a);
            var bName = rowTokenName(b);
            var aSize = extractFontSizeValue(((a.querySelector("input[data-text-field=\"fontSize\"]") || {}).value));
            var bSize = extractFontSizeValue(((b.querySelector("input[data-text-field=\"fontSize\"]") || {}).value));
            if (aSize !== bSize) return bSize - aSize;
            return aName.localeCompare(bName);
          });
          rows.forEach(function (row) {
            containers.semanticText.insertBefore(row, nextHeading);
          });
        });
      }

      function setSemanticMappingCollapsed(collapsed) {
        Array.prototype.forEach.call(containers.semanticText.children, function (row) {
          if (!row.classList || !row.classList.contains("semantic-text-row")) return;
          row.classList.toggle("row-collapsed", !!collapsed);
          var toggleButton = row.querySelector(".row-actions .icon");
          if (!toggleButton) return;
          setIcon(toggleButton, collapsed ? "chevron-right" : "chevron-down");
          toggleButton.title = collapsed ? "Expand mapping" : "Collapse mapping";
          toggleButton.setAttribute("aria-label", collapsed ? "Expand mapping" : "Collapse mapping");
        });
        setIcon(toggleSemanticMappingButton, collapsed ? "expand-all" : "collapse-all");
        toggleSemanticMappingButton.title = collapsed ? "Expand mapping" : "Collapse mapping";
        toggleSemanticMappingButton.setAttribute("aria-label", collapsed ? "Expand mapping" : "Collapse mapping");
      }

      function parseMotionEasing(value) {
        if (String(value).trim().toLowerCase() === "linear") return [0, 0, 1, 1];
        var match = String(value).match(/^cubic-bezier\(\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*\)$/i);
        if (!match) return null;
        var points = match.slice(1).map(Number);
        return points[0] >= 0 && points[0] <= 1 && points[2] >= 0 && points[2] <= 1 ? points : null;
      }

      function addMotionEasingPair(name, value) {
        var row = addPair(containers.foundationMotionEasing, "cols-2", String(name || "").replace(/^motion\./, ""), value, "text");
        row.classList.add("motion-easing-row");
        var nameInput = row.querySelector('input[data-field-role="name"]');
        var valueInput = row.querySelector('input[data-field-role="value"]');
        var settings = document.createElement("button");
        settings.type = "button";
        settings.className = "motion-easing-settings";
        settings.textContent = "⚙";
        settings.title = "Edit easing curve";
        settings.setAttribute("aria-label", "Edit easing curve for " + name);
        settings.setAttribute("aria-expanded", "false");
        row.insertBefore(settings, row.lastChild);
        nameInput.addEventListener("input", function () { settings.setAttribute("aria-label", "Edit easing curve for " + nameInput.value); });
        valueInput.addEventListener("input", function () {
          var activeEditor = row.querySelector(".motion-easing-editor");
          if (activeEditor && activeEditor._syncValue) activeEditor._syncValue();
        });
        settings.addEventListener("click", function () {
          var existing = row.querySelector(".motion-easing-editor");
          if (existing) { existing.remove(); settings.setAttribute("aria-expanded", "false"); return; }
          Array.prototype.forEach.call(containers.foundationMotionEasing.querySelectorAll(".motion-easing-editor"), function (editor) { editor.remove(); });
          Array.prototype.forEach.call(containers.foundationMotionEasing.querySelectorAll(".motion-easing-settings"), function (button) { button.setAttribute("aria-expanded", "false"); });
          var editor = document.createElement("div");
          editor.className = "motion-easing-editor";
          editor.innerHTML = '<div class="motion-easing-editor-header"><strong></strong><select aria-label="Easing preset"><option value="custom">Custom curve</option><option value="linear">Linear</option><option value="cubic-bezier(0.2, 0, 0, 1)">Standard</option><option value="cubic-bezier(0.05, 0.7, 0.1, 1)">Enter</option><option value="cubic-bezier(0.3, 0, 1, 1)">Exit</option><option value="cubic-bezier(0.42, 0, 0.58, 1)">Ease in-out</option></select></div><svg class="motion-easing-graph" viewBox="0 0 300 220" role="img" aria-label="Cubic Bézier curve. Drag the two handles to adjust easing."><path class="motion-easing-grid" d="M40 20V200H260 M95 20V200 M150 20V200 M205 20V200 M40 65H260 M40 110H260 M40 155H260 M40 20H260"/><path class="motion-easing-handle-line" data-line="1"/><path class="motion-easing-handle-line" data-line="2"/><path class="motion-easing-path"/><circle class="motion-easing-handle" data-handle="1" r="7"/><circle class="motion-easing-handle" data-handle="2" r="7"/></svg><div class="motion-easing-controls"></div><div class="motion-easing-preview"><div class="motion-easing-track"><span class="motion-easing-dot"></span></div><button type="button" class="button-tertiary">Preview</button></div><p class="motion-note">Drag handles or enter x₁, y₁, x₂, y₂. Horizontal axis is time; vertical axis is progress.</p>';
          editor.querySelector("strong").textContent = nameInput.value || "Easing";
          row.appendChild(editor);
          settings.setAttribute("aria-expanded", "true");
          var preset = editor.querySelector("select");
          var svg = editor.querySelector("svg");
          var fields = ["x₁", "y₁", "x₂", "y₂"].map(function (label, index) {
            var wrapper = document.createElement("label");
            wrapper.textContent = label;
            var control = document.createElement("input");
            control.type = "number";
            control.step = "0.01";
            control.min = index % 2 === 0 ? "0" : "-2";
            control.max = index % 2 === 0 ? "1" : "2";
            wrapper.appendChild(control);
            editor.querySelector(".motion-easing-controls").appendChild(wrapper);
            return control;
          });
          var points = parseMotionEasing(valueInput.value) || [0.2, 0, 0, 1];
          function draw() {
            var xy = function (x, y) { return [40 + x * 220, 200 - y * 180]; };
            var a = xy(points[0], points[1]);
            var b = xy(points[2], points[3]);
            editor.querySelector(".motion-easing-path").setAttribute("d", "M40 200 C" + a[0] + " " + a[1] + " " + b[0] + " " + b[1] + " 260 20");
            editor.querySelector('[data-line="1"]').setAttribute("d", "M40 200 L" + a[0] + " " + a[1]);
            editor.querySelector('[data-line="2"]').setAttribute("d", "M260 20 L" + b[0] + " " + b[1]);
            [a, b].forEach(function (point, index) {
              var handle = editor.querySelector('[data-handle="' + (index + 1) + '"]');
              handle.setAttribute("cx", point[0]); handle.setAttribute("cy", point[1]);
            });
            fields.forEach(function (field, index) { field.value = Number(points[index].toFixed(2)); });
            preset.value = Array.prototype.some.call(preset.options, function (option) { return option.value === valueInput.value.trim(); }) ? valueInput.value.trim() : "custom";
            editor.querySelector(".motion-easing-track").style.setProperty("--preview-easing", valueInput.value.trim() || "linear");
          }
          function commit() {
            valueInput.value = "cubic-bezier(" + points.map(function (number) { return Number(number.toFixed(2)); }).join(", ") + ")";
            valueInput.dispatchEvent(new Event("input", { bubbles: true }));
            draw();
          }
          preset.addEventListener("change", function () {
            if (preset.value === "custom") return;
            valueInput.value = preset.value;
            points = parseMotionEasing(valueInput.value);
            valueInput.dispatchEvent(new Event("input", { bubbles: true }));
            draw();
          });
          fields.forEach(function (field, index) {
            field.addEventListener("change", function () {
              if (field.value === "" || !Number.isFinite(Number(field.value))) return;
              points[index] = Math.max(index % 2 === 0 ? 0 : -2, Math.min(index % 2 === 0 ? 1 : 2, Number(field.value)));
              commit();
            });
          });
          editor._syncValue = function () {
            var parsed = parseMotionEasing(valueInput.value);
            if (parsed && row.contains(editor)) { points = parsed; draw(); }
          };
          var dragging = -1;
          svg.addEventListener("pointerdown", function (event) {
            if (!event.target.hasAttribute("data-handle")) return;
            dragging = Number(event.target.getAttribute("data-handle")) - 1;
            svg.setPointerCapture(event.pointerId);
            event.preventDefault();
          });
          svg.addEventListener("pointermove", function (event) {
            if (dragging < 0) return;
            var matrix = svg.getScreenCTM();
            if (!matrix) return;
            var point = svg.createSVGPoint(); point.x = event.clientX; point.y = event.clientY;
            point = point.matrixTransform(matrix.inverse());
            points[dragging * 2] = Math.max(0, Math.min(1, (point.x - 40) / 220));
            points[dragging * 2 + 1] = Math.max(-2, Math.min(2, (200 - point.y) / 180));
            commit();
          });
          svg.addEventListener("pointerup", function () { dragging = -1; });
          svg.addEventListener("pointercancel", function () { dragging = -1; });
          editor.querySelector(".motion-easing-preview button").addEventListener("click", function () {
            var dot = editor.querySelector(".motion-easing-dot");
            dot.classList.remove("playing");
            void dot.offsetWidth;
            dot.classList.add("playing");
          });
          editor.addEventListener("keydown", function (event) {
            if (event.key === "Escape") { editor.remove(); settings.setAttribute("aria-expanded", "false"); settings.focus(); }
          });
          draw();
        });
        return row;
      }

      function readSemanticMotion() {
        return {
          duration: readPairs(containers.semanticMotionDuration, false),
          easing: readPairs(containers.semanticMotionEasing, false)
        };
      }

      function resetFields() {
        Object.keys(containers).forEach(function (key) { containers[key].innerHTML = ""; });
        currentMainColorName = "brand";
        selectedBrandPackName = "brand";
        mainColorNameInput.value = "brand";
        mainColorValueInput.value = "#E8341C";
        seedDefaultFoundationColors();
        defaults.foundationSpacing.forEach(function (row) { addPair(containers.foundationSpacing, "cols-2", row[0], row[1], "number"); });
        defaults.foundationSize.forEach(function (row) { addPair(containers.foundationSize, "cols-2", row[0], row[1], "number"); });
        defaults.foundationRadius.forEach(function (row) { addPair(containers.foundationRadius, "cols-2", row[0], row[1], "number"); });
        defaults.foundationOpacity.forEach(function (row) { addPair(containers.foundationOpacity, "cols-2", row[0], row[1], "number"); });
        defaults.foundationShadow.forEach(function (row) { addPair(containers.foundationShadow, "cols-2", row[0], row[1], "text"); });
        defaults.foundationMotionDuration.forEach(function (row) { addPair(containers.foundationMotionDuration, "cols-2", row[0], row[1], "number"); });
        defaults.foundationMotionEasing.forEach(function (row) { addMotionEasingPair(row[0], row[1]); });
        defaults.semanticMotionDuration.forEach(function (row) { addPair(containers.semanticMotionDuration, "cols-2", row[0], row[1], "text", "motionDurationRefs"); });
        defaults.semanticMotionEasing.forEach(function (row) { addPair(containers.semanticMotionEasing, "cols-2", row[0], row[1], "text", "motionEasingRefs"); });
        semanticColorModes = normalizeSemanticColorModes({});
        semanticColorPurposes = {};
        setSelectedGenerationModes(["Light", "Dark"]);
        renderSemanticColorMode("Light");
        var spacingMap = {};
        defaults.semanticSpacing.forEach(function (row) { spacingMap[row[0]] = row[1]; });
        renderSemanticSpacing(spacingMap);

        var sizeMap = {};
        defaults.semanticSize.forEach(function (row) { sizeMap[row[0]] = row[1]; });
        renderSemanticSize(sizeMap);
        var radiusMap = {};
        defaults.semanticRadius.forEach(function (row) { radiusMap[row[0]] = row[1]; });
        renderSemanticPairGroups(containers.semanticRadius, radiusMap);
        var opacityMap = {};
        defaults.semanticOpacity.forEach(function (row) { opacityMap[row[0]] = row[1]; });
        renderSemanticPairGroups(containers.semanticOpacity, opacityMap);
        var shadowMap = {};
        defaults.semanticShadow.forEach(function (row) { shadowMap[row[0]] = row[1]; });
        renderSemanticPairGroups(containers.semanticShadow, shadowMap);
        defaults.text.family.forEach(function (row) { addFontFamilyPair(containers.fontFamily, row[0], row[1]); });
        defaults.text.size.forEach(function (row) { addPair(containers.fontSize, "cols-2", row[0], row[1], "number"); });
        defaults.text.weight.forEach(function (row) { addPair(containers.fontWeight, "cols-2", row[0], row[1], "number"); });
        defaults.text.lineHeight.forEach(function (row) { addPair(containers.fontLineHeight, "cols-2", row[0], row[1], "text"); });
        defaults.text.letterSpacing.forEach(function (row) { addPair(containers.fontLetterSpacing, "cols-2", row[0], row[1], "number"); });
        defaults.text.textTransform.forEach(function (row) { addPair(containers.fontTextTransform, "cols-2", row[0], row[1]); });
        renderSemanticText(defaults.semanticText);
        refreshLists();
      }

      function readPairs(container, numeric) {
        var out = {};
        Array.prototype.forEach.call(container.children, function (row) {
          if (!row.classList || !row.classList.contains("token-row")) return;
          var nameField = row.querySelector("input[data-field-role=\"name\"]");
          var valueField = row.querySelector("input[data-field-role=\"ref\"]") || row.querySelector("input[data-field-role=\"value\"]");
          if (!nameField || !valueField) {
            var fields = row.querySelectorAll("input");
            if (fields.length < 2) return;
            nameField = fields[0];
            valueField = fields[1];
          }
          var name = nameField.value.trim();
          var value = valueField.value.trim();
          if (!name) return;
          out[name] = numeric ? Number(value || 0) : value;
        });
        return out;
      }

      function readTextStyles() {
        var out = {};
        Array.prototype.forEach.call(containers.semanticText.children, function (row) {
          var nameField = row.querySelector("input[data-text-field=\"name\"]");
          if (!nameField) return;
          var name = nameField.value.trim();
          if (!name) return;
          var fontFamilyField = row.querySelector("input[data-text-field=\"fontFamily\"]");
          var fontSizeField = row.querySelector("input[data-text-field=\"fontSize\"]");
          var fontWeightField = row.querySelector("input[data-text-field=\"fontWeight\"]");
          var lineHeightField = row.querySelector("input[data-text-field=\"lineHeight\"]");
          var letterSpacingField = row.querySelector("input[data-text-field=\"letterSpacing\"]");
          var textCaseField = row.querySelector("input[data-text-field=\"textCase\"]");
          var textStyle = {
            fontFamily: fontFamilyField ? fontFamilyField.value.trim() : "",
            fontSize: fontSizeField ? fontSizeField.value.trim() : "",
            fontWeight: fontWeightField ? fontWeightField.value.trim() : "",
            lineHeight: lineHeightField ? lineHeightField.value.trim() : "",
            letterSpacing: letterSpacingField ? letterSpacingField.value.trim() : "",
            textCase: textCaseField ? textCaseField.value.trim() : ""
          };
          out[name] = textStyle;
        });
        return out;
      }

      function buildSetup() {
        storeCurrentSemanticColorMode();
        var semanticRadius = fixedSemanticRadiusMap(readPairs(containers.semanticRadius, false), false);
        var semanticColor = {};
        var semanticColorNames = {};
        Object.keys(semanticColorModes.Light || {}).forEach(function (name) { semanticColorNames[name] = true; });
        Object.keys(semanticColorModes.Dark || {}).forEach(function (name) { semanticColorNames[name] = true; });
        Object.keys(semanticColorNames).forEach(function (name) {
          semanticColor[name] = {
            Light: semanticColorModes.Light && semanticColorModes.Light[name] !== undefined ? semanticColorModes.Light[name] : "",
            Dark: semanticColorModes.Dark && semanticColorModes.Dark[name] !== undefined ? semanticColorModes.Dark[name] : (
              semanticColorModePacks.Dark[name] !== undefined
                ? semanticColorModePacks.Dark[name]
                : (semanticColorModes.Light && semanticColorModes.Light[name] !== undefined ? semanticColorModes.Light[name] : "")
            )
          };
        });
        var semanticColorPurposesForSetup = {};
        Object.keys(semanticColorPurposes).forEach(function (name) {
          if (semanticColorNames[name]) semanticColorPurposesForSetup[name] = semanticColorPurposes[name];
        });

        return {
          foundation: {
            color: readFoundationColorTokens(),
            spacing: readPairs(containers.foundationSpacing, true),
            size: readPairs(containers.foundationSize, true),
            radius: fixedRadiusFoundationMap(readPairs(containers.foundationRadius, true), false),
            opacity: readPairs(containers.foundationOpacity, true),
            shadow: readPairs(containers.foundationShadow, false),
            motion: { duration: readPairs(containers.foundationMotionDuration, true), easing: readPairs(containers.foundationMotionEasing, false) },
            text: {
              family: readPairs(containers.fontFamily, false),
              size: readPairs(containers.fontSize, true),
              weight: readPairs(containers.fontWeight, true),
              lineHeight: readPairs(containers.fontLineHeight, false),
              letterSpacing: readPairs(containers.fontLetterSpacing, true),
              textTransform: readPairs(containers.fontTextTransform, false)
            }
          },
          semantic: {
            color: semanticColor,
            colorPurposes: semanticColorPurposesForSetup,
            spacing: readPairs(containers.semanticSpacing, false),
            size: readPairs(containers.semanticSize, false),
            radius: semanticRadius,
            opacity: readPairs(containers.semanticOpacity, false),
            shadow: readPairs(containers.semanticShadow, false),
            motion: readSemanticMotion(),
            text: readTextStyles()
          }
        };
      }

      function currentSessionPayload() {
        return {
          setup: buildSetup(),
          options: options(),
          activeTab: (document.querySelector("[data-token-tab].active") || {}).getAttribute
            ? document.querySelector("[data-token-tab].active").getAttribute("data-token-tab")
            : "color"
        };
      }

      function applySessionPayload(payload) {
        if (!payload || typeof payload !== "object") return;
        var setup = payload.setup || {};
        var foundation = setup.foundation || {};
        var semantic = setup.semantic || {};
        var text = foundation.text || {};
        var hasSavedFoundationColor = Object.prototype.hasOwnProperty.call(foundation, "color");
        var hasSavedFoundationSpacing = Object.prototype.hasOwnProperty.call(foundation, "spacing");
        var hasSavedFoundationSize = Object.prototype.hasOwnProperty.call(foundation, "size");
        var hasSavedFoundationRadius = Object.prototype.hasOwnProperty.call(foundation, "radius");
        var hasSavedFoundationOpacity = Object.prototype.hasOwnProperty.call(foundation, "opacity");
        var hasSavedFoundationShadow = Object.prototype.hasOwnProperty.call(foundation, "shadow");
        var hasSavedFoundationMotion = Object.prototype.hasOwnProperty.call(foundation, "motion");
        var hasSavedFoundationText = Object.prototype.hasOwnProperty.call(foundation, "text");
        var hasSavedSemanticSpacing = Object.prototype.hasOwnProperty.call(semantic, "spacing");
        var hasSavedSemanticSize = Object.prototype.hasOwnProperty.call(semantic, "size");
        var hasSavedSemanticRadius = Object.prototype.hasOwnProperty.call(semantic, "radius");
        var hasSavedSemanticOpacity = Object.prototype.hasOwnProperty.call(semantic, "opacity");
        var hasSavedSemanticShadow = Object.prototype.hasOwnProperty.call(semantic, "shadow");
        var hasSavedSemanticMotion = Object.prototype.hasOwnProperty.call(semantic, "motion");
        var hasSavedSemanticText = Object.prototype.hasOwnProperty.call(semantic, "text");
        var hasSavedTextFamily = hasSavedFoundationText && Object.prototype.hasOwnProperty.call(text, "family");
        var hasSavedTextSize = hasSavedFoundationText && Object.prototype.hasOwnProperty.call(text, "size");
        var hasSavedTextWeight = hasSavedFoundationText && Object.prototype.hasOwnProperty.call(text, "weight");
        var hasSavedTextLineHeight = hasSavedFoundationText && Object.prototype.hasOwnProperty.call(text, "lineHeight");
        var hasSavedTextLetterSpacing = hasSavedFoundationText && Object.prototype.hasOwnProperty.call(text, "letterSpacing");
        var hasSavedTextTransform = hasSavedFoundationText && Object.prototype.hasOwnProperty.call(text, "textTransform");
        foundation.radius = fixedRadiusFoundationMap(foundation.radius, !hasSavedFoundationRadius);
        semantic.radius = fixedSemanticRadiusMap(semantic.radius, !hasSavedSemanticRadius);
        var deprecatedSizeKeys = { "font.size.11": true, "font.size.13": true };

        function normalizeLineHeightRef(ref, fontSizeRef) {
          var raw = String(ref || "").trim();
          if (raw) return raw;

          var fontSizeMatch = String(fontSizeRef || "").trim().match(/^font\.size\.(\d+(?:\.\d+)?)$/);
          var sizeFromFont = fontSizeMatch ? Number(fontSizeMatch[1]) : NaN;
          if (!Number.isNaN(sizeFromFont)) {
            if (sizeFromFont >= 67) return "font.lineHeight.110";
            if (sizeFromFont >= 38) return "font.lineHeight.120";
            if (sizeFromFont >= 24) return "font.lineHeight.130";
          }
          return "font.lineHeight.150";
        }

        Object.keys(containers).forEach(function (key) { containers[key].innerHTML = ""; });
        currentMainColorName = "brand";
        selectedBrandPackName = "brand";

        var foundationColor = hasSavedFoundationColor ? (foundation.color || {}) : {};
        var colorEntries = Object.keys(foundationColor).map(function (key) { return [key, foundationColor[key]]; });
        containers.brandColors.innerHTML = "";
        containers.neutralColors.innerHTML = "";
        containers.statusColors.innerHTML = "";
        if (hasSavedFoundationColor || colorEntries.length) {
          var seenColors = {};
          colorEntries.forEach(function (row) {
            var tokenName = normalizeColorTokenName(row[0]);
            if (!tokenName) return;
            if (seenColors[tokenName]) return;
            seenColors[tokenName] = row[1];
          });
          ensureRequiredFoundationColorsInStore(seenColors);
          Object.keys(seenColors).forEach(function (tokenName) {
            if (isNeutralColorToken(tokenName)) {
              addFoundationColorRow(containers.neutralColors, tokenName, seenColors[tokenName], "color");
            } else if (isStatusColorToken(tokenName)) {
              addFoundationColorRow(containers.statusColors, tokenName, seenColors[tokenName], "color");
            } else {
              addFoundationColorRow(containers.brandColors, tokenName, seenColors[tokenName], "color");
            }
          });
          writeFoundationColorStore(seenColors);
        } else {
          seedDefaultFoundationColors();
        }
        if (!hasSavedFoundationColor) ensureNeutralRows();
        if (!hasSavedFoundationColor) syncFoundationColorsStore();
        var canonicalFoundationColors = readFoundationColorStore();
        selectedBrandPackName = firstBrandPackName(canonicalFoundationColors);
        if (hasSavedFoundationColor) {
          currentMainColorName = selectedBrandPackName;
          mainColorNameInput.value = selectedBrandPackName;
          if (canonicalFoundationColors[selectedBrandPackName + ".500"]) {
            mainColorValueInput.value = canonicalFoundationColors[selectedBrandPackName + ".500"];
          }
          renderBrandPackTabs();
        } else {
          setSelectedBrandPack(selectedBrandPackName);
        }

        function fillPairGroup(container, groupValues, fallbackRows, valueType, listId, useExactSavedValues) {
          var values = groupValues && typeof groupValues === "object" ? Object.assign({}, groupValues) : {};
          var orderedKeys = Object.keys(values);
          if (!useExactSavedValues) {
            orderedKeys = [];
            (fallbackRows || []).forEach(function (row) {
              var key = row[0];
              if (!(key in values)) values[key] = row[1];
              orderedKeys.push(key);
            });
            Object.keys(values).forEach(function (key) {
              if (orderedKeys.indexOf(key) === -1) orderedKeys.push(key);
            });
          }

          if (container === containers.semanticSpacing || container === containers.semanticSize
            || container === containers.semanticRadius || container === containers.semanticOpacity
            || container === containers.semanticShadow) {
            renderSemanticPairGroups(container, values);
          } else {
            orderedKeys.forEach(function (key) {
              if (container === containers.foundationMotionEasing) addMotionEasingPair(key, values[key]);
              else addPair(container, "cols-2", key, values[key], valueType || "text", listId);
            });
          }
        }

        fillPairGroup(containers.foundationSpacing, foundation.spacing, defaults.foundationSpacing, "number", null, hasSavedFoundationSpacing);
        fillPairGroup(containers.foundationSize, foundation.size, defaults.foundationSize, "number", null, hasSavedFoundationSize);
        fillPairGroup(containers.foundationRadius, foundation.radius, defaults.foundationRadius, "number", null, hasSavedFoundationRadius);
        fillPairGroup(containers.foundationOpacity, foundation.opacity, defaults.foundationOpacity, "number", null, hasSavedFoundationOpacity);
        fillPairGroup(containers.foundationShadow, foundation.shadow, defaults.foundationShadow, "text", null, hasSavedFoundationShadow);
        fillPairGroup(containers.foundationMotionDuration, (foundation.motion || {}).duration, defaults.foundationMotionDuration, "number", null, hasSavedFoundationMotion && Object.prototype.hasOwnProperty.call(foundation.motion, "duration"));
        fillPairGroup(containers.foundationMotionEasing, (foundation.motion || {}).easing, defaults.foundationMotionEasing, "text", null, hasSavedFoundationMotion && Object.prototype.hasOwnProperty.call(foundation.motion, "easing"));
        fillPairGroup(containers.semanticMotionDuration, (semantic.motion || {}).duration, defaults.semanticMotionDuration, "text", "motionDurationRefs", hasSavedSemanticMotion && Object.prototype.hasOwnProperty.call(semantic.motion, "duration"));
        fillPairGroup(containers.semanticMotionEasing, (semantic.motion || {}).easing, defaults.semanticMotionEasing, "text", "motionEasingRefs", hasSavedSemanticMotion && Object.prototype.hasOwnProperty.call(semantic.motion, "easing"));
        semanticColorModes = normalizeSemanticColorModes(semantic.color, true);
        semanticColorPurposes = {};
        var savedColorPurposes = semantic.colorPurposes && typeof semantic.colorPurposes === "object"
          ? semantic.colorPurposes
          : {};
        Object.keys(savedColorPurposes).forEach(function (name) {
          var canonicalName = normalizeSemanticColorName(name);
          var purpose = String(savedColorPurposes[name] || "").trim();
          if (canonicalName && purpose) semanticColorPurposes[canonicalName] = purpose;
        });
        renderSemanticColorMode(getCurrentMode());
        var semanticSpacingValues = semantic.spacing;
        if (hasSavedSemanticSpacing) {
          var savedSpacingValues = semantic.spacing && typeof semantic.spacing === "object" ? semantic.spacing : {};
          semanticSpacingValues = {};
          defaults.semanticSpacing.forEach(function (row) {
            if (["inset.4", "inset.6", "inset.8"].indexOf(row[0]) === -1) return;
            semanticSpacingValues[row[0]] = Object.prototype.hasOwnProperty.call(savedSpacingValues, row[0])
              ? savedSpacingValues[row[0]]
              : row[1];
          });
          Object.keys(savedSpacingValues).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(semanticSpacingValues, key)) {
              semanticSpacingValues[key] = savedSpacingValues[key];
            }
          });
        }
        fillPairGroup(containers.semanticSpacing, semanticSpacingValues, defaults.semanticSpacing, "text", "spaceRefs", hasSavedSemanticSpacing);
        fillPairGroup(containers.semanticSize, semantic.size, defaults.semanticSize, "text", "sizeRefs", hasSavedSemanticSize);
        fillPairGroup(containers.semanticRadius, semantic.radius, defaults.semanticRadius, "text", "radiusRefs", hasSavedSemanticRadius);
        fillPairGroup(containers.semanticOpacity, semantic.opacity, defaults.semanticOpacity, "text", "opacityRefs", hasSavedSemanticOpacity);
        fillPairGroup(containers.semanticShadow, semantic.shadow, defaults.semanticShadow, "text", "shadowRefs", hasSavedSemanticShadow);
        function fillTextGroup(container, groupValues, fallbackRows, valueType, useExactSavedValues) {
          var values = groupValues && typeof groupValues === "object" ? Object.assign({}, groupValues) : {};
          if (container === containers.fontSize) {
            Object.keys(deprecatedSizeKeys).forEach(function (key) { delete values[key]; });
          }
          var orderedKeys = Object.keys(values);
          if (!useExactSavedValues) {
            orderedKeys = [];
            (fallbackRows || []).forEach(function (row) {
              var key = row[0];
              if (!(key in values)) values[key] = row[1];
              orderedKeys.push(key);
            });
            Object.keys(values).forEach(function (key) {
              if (orderedKeys.indexOf(key) === -1) orderedKeys.push(key);
            });
          }
          orderedKeys.forEach(function (key) {
            if (container === containers.fontFamily) {
              addFontFamilyPair(container, key, values[key]);
            } else {
              addPair(container, "cols-2", key, values[key], valueType || "text");
            }
          });
        }

        fillTextGroup(containers.fontFamily, text.family, defaults.text.family, null, hasSavedTextFamily);
        fillTextGroup(containers.fontSize, text.size, defaults.text.size, "number", hasSavedTextSize);
        fillTextGroup(containers.fontWeight, text.weight, defaults.text.weight, "number", hasSavedTextWeight);
        fillTextGroup(containers.fontLineHeight, text.lineHeight, defaults.text.lineHeight, "text", hasSavedTextLineHeight);
        fillTextGroup(containers.fontLetterSpacing, text.letterSpacing, defaults.text.letterSpacing, "number", hasSavedTextLetterSpacing);
        fillTextGroup(containers.fontTextTransform, text.textTransform, defaults.text.textTransform, "text", hasSavedTextTransform);

        var loadedTextStyles = hasSavedSemanticText && semantic.text && typeof semantic.text === "object"
          ? semantic.text
          : {};
        var normalizedTextStyles = {};
        if (hasSavedSemanticText) {
          Object.keys(loadedTextStyles).forEach(function (name) {
            var value = loadedTextStyles[name];
            if (!value || typeof value !== "object") return;
            var normalizedFontSize = value.fontSize === "font.size.11" || value.fontSize === "font.size.13"
              ? "font.size.12"
              : (value.fontSize || "");
            var normalizedLineHeight = normalizeLineHeightRef(value.lineHeight, value.fontSize);
            normalizedTextStyles[name] = {
              fontFamily: value.fontFamily || "",
              fontSize: normalizedFontSize,
              fontWeight: value.fontWeight || "",
              lineHeight: normalizedLineHeight,
              letterSpacing: value.letterSpacing || "",
              textCase: value.textCase || ""
            };
          });
        } else {
          normalizedTextStyles = defaults.semanticText || [];
        }
        renderSemanticText(normalizedTextStyles);

        var opts = payload.options || {};
        document.getElementById("variables").checked = opts.variables !== false;
        document.getElementById("styles").checked = opts.styles !== false;
        document.getElementById("overwrite").checked = opts.overwrite !== false;
        var paletteInput = document.getElementById("paletteName");
        if (paletteInput) paletteInput.value = "Foundation";
        setThemeNameValue(resolvedThemeName(opts.themeName || "Theme"));
        setSelectedGenerationModes(Array.isArray(opts.modeNames) && opts.modeNames.length ? opts.modeNames : ["Light", "Dark"]);
        setMode(opts.modeName || "Light", false);

        if (payload.activeTab) setActiveTokenTab(payload.activeTab);
        refreshLists();
      }

      function slugifyFileName(value) {
        return (value || "session")
          .toLowerCase()
          .replace(/[^a-z0-9._-]+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "") || "session";
      }

      function cleanTokenPath(value) {
        return String(value || "")
          .trim()
          .replace(/[^a-zA-Z0-9_.-]+/g, ".")
          .replace(/\.+/g, ".")
          .replace(/^\./, "")
          .replace(/\.$/, "");
      }

      function buildSessionMarkdown(name, payload) {
        var sessionName = name || "Session";
        return [
          "# " + sessionName,
          "",
          "Generated by Design Token Management.",
          "",
          "```json",
          JSON.stringify(payload, null, 2),
          "```",
          ""
        ].join("\n");
      }

      function sessionId() {
        return "session-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
      }

      function readUiFallbackSessions() {
        try {
          var raw = window.localStorage.getItem(uiSessionsStorageKey);
          if (!raw) return [];
          var parsed = JSON.parse(raw);
          return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
          return [];
        }
      }

      function writeUiFallbackSessions(sessions) {
        savedSessions = Array.isArray(sessions) ? sessions : [];
        try {
          window.localStorage.setItem(uiSessionsStorageKey, JSON.stringify(savedSessions));
        } catch (error) {}
      }

      function setThemeNameValue(value) {
        if (!themeNameInput) return;
        themeNameInput.value = String(value || "").trim() || "Theme";
      }

      function selectedSessionRecord() {
        return savedSessions.find(function (session) { return session && session.id === selectedSavedSessionId; }) || null;
      }

      function resolvedThemeName(fallback) {
        var selectedSession = selectedSessionRecord();
        var candidate = "";
        if (selectedSession && String(selectedSession.name || "").trim()) {
          candidate = String(selectedSession.name || "").trim();
        } else {
          candidate = String(fallback || (themeNameInput ? themeNameInput.value : "") || "Theme").trim() || "Theme";
        }
        candidate = candidate
          .replace(/[{}]/g, "")
          .replace(/[\/\\]+/g, "-")
          .replace(/\s+/g, " ")
          .trim() || "Theme";
        if (candidate.toLowerCase() === "foundation") return "Foundation Theme";
        return candidate;
      }

      function applyThemeNameToPayload(payload, themeName) {
        if (!payload || typeof payload !== "object") return payload;
        payload.options = payload.options && typeof payload.options === "object" ? payload.options : {};
        payload.options.themeName = String(themeName || "").trim() || resolvedThemeName();
        return payload;
      }

      function setSavedSessions(sessions) {
        savedSessions = Array.isArray(sessions) ? sessions : [];
        writeUiFallbackSessions(savedSessions);
        renderSessionSelect();
      }

      function renderSessionSelect() {
        if (!sessionSelect) return;
        var previousValue = selectedSavedSessionId || sessionSelect.value || "";
        sessionSelect.innerHTML = "";
        if (sessionSelectMenu) sessionSelectMenu.innerHTML = "";
        var placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = savedSessions.length ? "Select saved session..." : "No saved sessions";
        sessionSelect.appendChild(placeholder);
        if (sessionSelectButton) sessionSelectButton.textContent = placeholder.textContent;

        var list = null;
        if (sessionSelectMenu) {
          var toolbar = document.createElement("div");
          toolbar.className = "session-menu-toolbar";

          var search = document.createElement("input");
          search.type = "text";
          search.className = "session-menu-search";
          search.placeholder = "Search sessions";
          toolbar.appendChild(search);
          sessionSelectMenu.appendChild(toolbar);

          list = document.createElement("span");
          list.className = "session-menu-list";
          sessionSelectMenu.appendChild(list);

          search.addEventListener("input", function () {
            renderSessionMenuList(list, search.value);
          });
        }

        savedSessions.forEach(function (session) {
          var option = document.createElement("option");
          option.value = session.id;
          option.textContent = session.name || "Session";
          sessionSelect.appendChild(option);
        });
        if (list) renderSessionMenuList(list, "");
        if (previousValue && savedSessions.some(function (session) { return session.id === previousValue; })) {
          sessionSelect.value = previousValue;
          selectedSavedSessionId = previousValue;
          var selectedSession = savedSessions.find(function (session) { return session.id === previousValue; });
          if (sessionSelectButton && selectedSession) sessionSelectButton.textContent = selectedSession.name || "Session";
          setThemeNameValue(selectedSession && selectedSession.name ? selectedSession.name : "Theme");
        } else {
          sessionSelect.value = "";
          selectedSavedSessionId = "";
          setThemeNameValue("Theme");
        }
        updateSessionOptionState();
      }

      function renderSessionMenuList(list, query) {
        if (!list) return;
        var normalizedQuery = String(query || "").trim().toLowerCase();
        list.innerHTML = "";
        var matches = savedSessions.filter(function (session) {
          var haystack = [
            session.name || "",
            session.fileName || "",
            session.savedAt || ""
          ].join(" ").toLowerCase();
          return !normalizedQuery || haystack.indexOf(normalizedQuery) !== -1;
        });
        if (!matches.length) {
          var empty = document.createElement("div");
          empty.className = "empty-state";
          empty.textContent = savedSessions.length ? "No sessions match this search." : "No saved sessions yet.";
          list.appendChild(empty);
          return;
        }
        matches.forEach(function (session) {
          var row = document.createElement("div");
          row.className = "session-menu-row";
          row.setAttribute("role", "option");
          row.setAttribute("data-session-id", session.id);

          var infoButton = document.createElement("button");
          infoButton.type = "button";
          infoButton.className = "session-select-option";
          infoButton.setAttribute("data-session-id", session.id);
          var title = document.createElement("div");
          title.className = "session-menu-title";
          title.textContent = session.name || "Session";
          var meta = document.createElement("div");
          meta.className = "session-menu-meta";
          meta.textContent = (session.fileName || slugifyFileName(session.name) + ".md") + (session.savedAt ? " · " + new Date(session.savedAt).toLocaleString() : "");
          infoButton.appendChild(title);
          infoButton.appendChild(meta);
          infoButton.addEventListener("click", function () {
            setSessionSelectOpen(false);
            loadSavedSession(session);
          });
          row.appendChild(infoButton);

          var actions = document.createElement("span");
          actions.className = "session-menu-actions";
          var exportMarkdownButton = document.createElement("button");
          exportMarkdownButton.type = "button";
          setIcon(exportMarkdownButton, "export");
          exportMarkdownButton.title = "Export " + (session.name || "Session") + " as .md";
          exportMarkdownButton.setAttribute("aria-label", "Export " + (session.name || "Session") + " as .md");
          exportMarkdownButton.innerHTML += "<span class=\"session-menu-action-label\">.md</span>";
          exportMarkdownButton.addEventListener("click", function (event) {
            event.stopPropagation();
            downloadTextFile(session.fileName || slugifyFileName(session.name) + ".md", session.markdown || buildSessionMarkdown(session.name, session.payload));
          });
          var exportJsonButton = document.createElement("button");
          exportJsonButton.type = "button";
          setIcon(exportJsonButton, "export");
          exportJsonButton.title = "Export " + (session.name || "Session") + " as .json";
          exportJsonButton.setAttribute("aria-label", "Export " + (session.name || "Session") + " as .json");
          exportJsonButton.innerHTML += "<span class=\"session-menu-action-label\">.json</span>";
          exportJsonButton.addEventListener("click", function (event) {
            event.stopPropagation();
            downloadTextFile(slugifyFileName(session.name || "session") + ".json", JSON.stringify(session.payload || {}, null, 2) + "\n");
          });
          var deleteButton = document.createElement("button");
          deleteButton.type = "button";
          deleteButton.className = "session-menu-icon-only";
          setIcon(deleteButton, "trash-can");
          deleteButton.title = "Delete " + (session.name || "Session");
          deleteButton.setAttribute("aria-label", "Delete " + (session.name || "Session"));
          deleteButton.addEventListener("click", function (event) {
            event.stopPropagation();
            deleteSavedSession(session.id);
          });
          actions.appendChild(exportMarkdownButton);
          actions.appendChild(exportJsonButton);
          actions.appendChild(deleteButton);
          row.appendChild(actions);
          list.appendChild(row);
        });
        updateSessionOptionState();
      }

      function loadSavedSession(session, options) {
        if (!session) return;
        options = options || {};
        selectedSavedSessionId = session.id || "";
        if (sessionSelect) sessionSelect.value = selectedSavedSessionId;
        if (sessionSelectButton) sessionSelectButton.textContent = session.name || "Session";
        updateSessionOptionState();
        applySessionPayload(session.payload || parseSessionMarkdown(session.markdown));
        setThemeNameValue(session.name || "Theme");
        if (options.persistActiveSession !== false) {
          parent.postMessage({ pluginMessage: { type: "set-active-session", id: selectedSavedSessionId } }, "*");
        }
        if (options.showStatus !== false) {
          setStatus("Session loaded: " + (session.name || "Session"), "ok");
        }
      }

      function finalizeInitialPluginState() {
        if (!pendingInitialPluginState || !initialSessionsLoaded || !initialDefaultResolved) return;
        pendingInitialPluginState = false;
        setSavedSessions(initialSessionsPayload || []);
        var restoredSession = initialActiveSessionId
          ? (initialSessionsPayload || []).find(function (session) { return session && session.id === initialActiveSessionId; })
          : null;
        if (restoredSession) {
          loadSavedSession(restoredSession, { persistActiveSession: false, showStatus: false });
          setStatus("Session restored: " + (restoredSession.name || "Session"), "ok");
          return;
        }
        if (initialDefaultPayload && typeof initialDefaultPayload === "object") {
          applySessionPayload(initialDefaultPayload);
          setStatus("Default setup loaded.", "ok");
          return;
        }
        var fallbackPayload = readUiFallbackDefault();
        if (fallbackPayload) {
          applySessionPayload(fallbackPayload);
          setStatus("Default setup loaded.", "ok");
          return;
        }
        resetFields();
        setStatus(initialDefaultError || "Setup reset.", initialDefaultError ? "error" : "ok");
      }

      function updateSessionOptionState() {
        if (saveCurrentSessionButton) saveCurrentSessionButton.disabled = !selectedSavedSessionId;
        if (!sessionSelectMenu) return;
        Array.prototype.forEach.call(sessionSelectMenu.querySelectorAll("[data-session-id]"), function (item) {
          item.classList.toggle("active", item.getAttribute("data-session-id") === selectedSavedSessionId);
        });
      }

      function setSessionSelectOpen(open) {
        if (!sessionSelectMenu || !sessionSelectButton) return;
        sessionSelectMenu.hidden = !open;
        sessionSelectButton.setAttribute("aria-expanded", open ? "true" : "false");
      }

      function createSessionRecord(name, payload, markdown) {
        var sessionName = String(name || "Session").trim() || "Session";
        payload = applyThemeNameToPayload(payload, sessionName);
        return {
          id: sessionId(),
          name: sessionName,
          fileName: slugifyFileName(sessionName) + ".md",
          savedAt: new Date().toISOString(),
          payload: payload,
          markdown: markdown || buildSessionMarkdown(sessionName, payload)
        };
      }

      function downloadTextFile(fileName, text) {
        var blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      function parseSessionMarkdown(markdown) {
        var text = String(markdown || "");
        var codeFence = text.match(/```json\s*([\s\S]*?)```/i) || text.match(/```\s*([\s\S]*?)```/);
        var raw = codeFence ? codeFence[1] : text;
        return JSON.parse(raw);
      }

      function saveSessionRecord(record, successMessage) {
        pendingSessionSave = {
          id: record.id,
          previousSelectedSessionId: selectedSavedSessionId,
          recordName: record.name || "Session",
          successMessage: successMessage || ""
        };
        selectedSavedSessionId = record.id;
        var fallbackSessions = savedSessions.filter(function (item) { return item && item.id !== record.id; });
        fallbackSessions.unshift(record);
        setSavedSessions(fallbackSessions);
        if (successMessage) setStatus("Saving session to plugin storage: " + record.name + "...", "");
        parent.postMessage({ pluginMessage: { type: "save-session", session: record } }, "*");
      }

      function saveCurrentSessionRecord() {
        try {
          var selectedSession = selectedSessionRecord();
          if (!selectedSession) {
            openSaveModal();
            setStatus("Choose a saved session or use Save as new.", "error");
            return;
          }
          var payload = applyThemeNameToPayload(currentSessionPayload(), selectedSession.name);
          var record = {
            id: selectedSession.id,
            name: selectedSession.name,
            fileName: selectedSession.fileName || slugifyFileName(selectedSession.name) + ".md",
            savedAt: new Date().toISOString(),
            payload: payload,
            markdown: buildSessionMarkdown(selectedSession.name, payload)
          };
          saveSessionRecord(record, "Session updated in plugin storage: " + record.name);
        } catch (error) {
          setStatus("Could not save session: " + (error && error.message ? error.message : String(error)), "error");
        }
      }

      function deleteSavedSession(id) {
        if (selectedSavedSessionId === id) selectedSavedSessionId = "";
        setSavedSessions(savedSessions.filter(function (item) { return item && item.id !== id; }));
        parent.postMessage({ pluginMessage: { type: "delete-session", id: id } }, "*");
      }

      function openSaveModal(mode) {
        saveModalMode = mode === "create" ? "create" : "save";
        if (saveModalTitle) saveModalTitle.textContent = saveModalMode === "create" ? "Create New Session" : "Save Session";
        if (saveModalDescription) {
          saveModalDescription.textContent = saveModalMode === "create"
            ? "Creates a separate token pack from the current values. Any saved sessions remain available."
            : "";
        }
        saveModalConfirmButton.textContent = saveModalMode === "create" ? "Create session" : "Save";
        saveModalBackdrop.classList.add("open");
        saveModalBackdrop.setAttribute("aria-hidden", "false");
        saveModalNameInput.value = "";
        setTimeout(function () { saveModalNameInput.focus(); }, 0);
      }

      function closeSaveModal() {
        saveModalBackdrop.classList.remove("open");
        saveModalBackdrop.setAttribute("aria-hidden", "true");
        saveModalMode = "save";
      }

      function commitSaveSession() {
        var hintEl = document.getElementById("saveModalHint");
        if (hintEl) hintEl.textContent = "";
        try {
          var name = String(saveModalNameInput.value || "").trim();
          if (!name) {
            if (hintEl) {
              hintEl.textContent = "Session name is required.";
            }
            saveModalNameInput.focus();
            saveModalNameInput.classList.add("input-error");
            setTimeout(function () {
              if (saveModalNameInput) saveModalNameInput.classList.remove("input-error");
            }, 1200);
            return;
          }
          var payload = currentSessionPayload();
          var record = createSessionRecord(name, payload);
          saveSessionRecord(record, (saveModalMode === "create" ? "New session created: " : "Session saved: ") + record.name);
          closeSaveModal();
        } catch (error) {
          var msg = "Could not save session: " + (error && error.message ? error.message : String(error));
          if (hintEl) {
            hintEl.textContent = msg;
          } else {
            setStatus(msg, "error");
          }
        }
      }

      function fillDatalist(id, values) {
        var list = document.getElementById(id);
        var previous = list._tokenValues;
        if (previous && previous.length === values.length && previous.every(function (value, index) {
          return value === values[index];
        })) return;
        list._tokenValues = values.slice();
        list.innerHTML = "";
        values.forEach(function (value) {
          var option = document.createElement("option");
          option.value = value;
          list.appendChild(option);
        });
        if (activeSuggestionInput && activeSuggestionInput.dataset.listSource === id) {
          openSuggestions(activeSuggestionInput);
        }
      }

      function applyAvailableFonts(message) {
        var families = Array.isArray(message && message.families) ? message.families.slice() : [];
        families = families
          .map(function (family) { return String(family || "").trim(); })
          .filter(Boolean)
          .filter(function (family, index, items) { return items.indexOf(family) === index; })
          .sort(function (a, b) { return a.localeCompare(b); });
        availableFontFamilies = families;
        availableFontStylesByFamily = message && message.stylesByFamily && typeof message.stylesByFamily === "object"
          ? message.stylesByFamily
          : {};
        fillDatalist("fontFamilyNames", availableFontFamilies);
      }

      function prefixedPairs(container, prefix, legacyPrefix) {
        var values = [];
        Array.prototype.forEach.call(container.children, function (row) {
          var inputEl = row.querySelector("input");
          if (!inputEl) return;
          var name = inputEl.value.trim();
          if (!name) return;
          if (name.indexOf(prefix) === 0) {
            values.push(name);
          } else if (legacyPrefix && name.indexOf(legacyPrefix) === 0) {
            values.push(prefix + name.slice(legacyPrefix.length));
          } else {
            values.push(prefix + name);
          }
        });
        return values;
      }

      function refreshLists() {
        var foundationColorRefs = prefixedPairs(containers.foundationColors, "color.");
        fillDatalist("colorRefs", foundationColorRefs);
        fillDatalist("spaceRefs", prefixedPairs(containers.foundationSpacing, "space."));
        fillDatalist("sizeRefs", prefixedPairs(containers.foundationSize, "size."));
        fillDatalist("radiusRefs", prefixedPairs(containers.foundationRadius, "radius."));
        fillDatalist("opacityRefs", prefixedPairs(containers.foundationOpacity, "opacity."));
        fillDatalist("shadowRefs", prefixedPairs(containers.foundationShadow, "shadow."));
        fillDatalist("motionDurationRefs", prefixedPairs(containers.foundationMotionDuration, "duration."));
        fillDatalist("motionEasingRefs", prefixedPairs(containers.foundationMotionEasing, "easing."));
        fillDatalist("fontFamilyNames", availableFontFamilies);
        fillDatalist("fontFamilyRefs", prefixedPairs(containers.fontFamily, "font.family.", "family."));
        fillDatalist("fontSizeRefs", prefixedPairs(containers.fontSize, "font.size.", "size."));
        fillDatalist("fontWeightRefs", prefixedPairs(containers.fontWeight, "font.weight.", "weight."));
        fillDatalist("fontLineHeightRefs", prefixedPairs(containers.fontLineHeight, "font.lineHeight.", "lineHeight."));
        fillDatalist("fontLetterSpacingRefs", prefixedPairs(containers.fontLetterSpacing, "font.letterSpacing.", "letterSpacing."));
        fillDatalist("fontTextTransformRefs", prefixedPairs(containers.fontTextTransform, "font.textTransform.", "textTransform."));
        updateAllSemanticColorSwatches();
      }

      function options() {
        var modeInput = document.getElementById("modeName");
        return {
          variables: document.getElementById("variables").checked,
          styles: document.getElementById("styles").checked,
          overwrite: document.getElementById("overwrite").checked,
          paletteName: "Foundation",
          themeName: resolvedThemeName(),
          modeNames: getSelectedGenerationModes(),
          modeName: (modeInput && modeInput.value ? modeInput.value.trim() : "Light") || "Light"
        };
      }

      function showFeedback(title, message) {
        if (!feedbackModalBackdrop) return;
        feedbackModalTitle.textContent = title || "Done";
        feedbackModalMessage.textContent = message || "Completed.";
        feedbackModalBackdrop.classList.add("open");
        feedbackModalBackdrop.setAttribute("aria-hidden", "false");
      }

      function closeFeedback() {
        if (!feedbackModalBackdrop) return;
        feedbackModalBackdrop.classList.remove("open");
        feedbackModalBackdrop.setAttribute("aria-hidden", "true");
      }

      function setStatus(message, kind) {
        if (!status) {
          if (message) showFeedback(kind === "error" ? "Error" : "Done", message);
          return;
        }
        status.textContent = message || "";
        status.className = ("status " + (kind || "")).trim();
      }

      function resizeWindow(width, height) {
        var nextWidth = Math.max(minWindowWidth, Math.round(Number(width) || currentWindowWidth));
        var nextHeight = Math.max(minWindowHeight, Math.round(Number(height) || currentWindowHeight));
        currentWindowWidth = nextWidth;
        currentWindowHeight = nextHeight;
        parent.postMessage({
          pluginMessage: { type: "resize-ui", width: nextWidth, height: nextHeight }
        }, "*");
      }

      function startWindowResize(event) {
        if (!resizeCornerHitarea) return;
        event.preventDefault();
        closeSuggestions();

        var pointerId = typeof event.pointerId === "number" ? event.pointerId : null;
        var startX = event.clientX;
        var startY = event.clientY;
        var startWidth = currentWindowWidth || window.innerWidth;
        var startHeight = currentWindowHeight || window.innerHeight;
        var usePointerEvents = event.type.indexOf("pointer") === 0;
        document.body.classList.add("is-resizing");
        if (pointerId !== null && resizeCornerHitarea.setPointerCapture) {
          resizeCornerHitarea.setPointerCapture(pointerId);
        }

        function onMove(moveEvent) {
          resizeWindow(startWidth + moveEvent.clientX - startX, startHeight + moveEvent.clientY - startY);
        }

        function onUp(upEvent) {
          document.body.classList.remove("is-resizing");
          if (pointerId !== null && resizeCornerHitarea.releasePointerCapture) {
            try {
              resizeCornerHitarea.releasePointerCapture(pointerId);
            } catch (error) {}
          }
          document.removeEventListener("pointermove", onMove);
          document.removeEventListener("pointerup", onUp);
          document.removeEventListener("pointercancel", onUp);
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
          if (upEvent) onMove(upEvent);
        }

        if (usePointerEvents) {
          document.addEventListener("pointermove", onMove);
          document.addEventListener("pointerup", onUp);
          document.addEventListener("pointercancel", onUp);
        } else {
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        }
      }

      function readUiFallbackDefault() {
        try {
          var raw = window.localStorage.getItem(uiDefaultStorageKey);
          if (!raw) return null;
          var parsed = JSON.parse(raw);
          return parsed && typeof parsed === "object" ? parsed : null;
        } catch (error) {
          return null;
        }
      }

      function writeUiFallbackDefault(payload) {
        try {
          window.localStorage.setItem(uiDefaultStorageKey, JSON.stringify(payload));
        } catch (error) {}
      }

      mainColorNameInput.addEventListener("input", renderMainColorScale);
      mainColorValueInput.addEventListener("input", renderMainColorScale);
      addBrandPackButton.addEventListener("click", function () {
        var canonical = readFoundationColorStore();
        var packName = nextAvailableBrandPackName("brand", canonical);
        canonical = insertBrandPackInStoreAfter(canonical, selectedBrandPackName, packName, mainColorValueInput.value || "#E8341C");
        ensureNeutralColorsInStore(canonical);
        ensureStatusColorsInStore(canonical);
        writeFoundationColorStore(canonical);
        setSelectedBrandPack(packName);
        refreshLists();
      });
      if (importDashboardButton) {
        importDashboardButton.addEventListener("click", function () {
          fileInput.click();
        });
      }
      document.getElementById("addFoundationSpacing").addEventListener("click", function () { addPair(containers.foundationSpacing, "cols-2", "space.", 0, "number"); refreshLists(); });
      document.getElementById("addFoundationSize").addEventListener("click", function () { addPair(containers.foundationSize, "cols-2", "size.", 0, "number"); refreshLists(); });
      document.getElementById("addFoundationRadius").addEventListener("click", function () { addPair(containers.foundationRadius, "cols-2", "radius.", 0, "number"); refreshLists(); });
      document.getElementById("addFoundationOpacity").addEventListener("click", function () { addPair(containers.foundationOpacity, "cols-2", "opacity.", 0.12, "number"); refreshLists(); });
      document.getElementById("addFoundationShadow").addEventListener("click", function () { addPair(containers.foundationShadow, "cols-2", "shadow.", "0px 4px 12px 0px rgba(18, 21, 27, 0.12)", "text"); refreshLists(); });
      document.getElementById("addFoundationMotionDuration").addEventListener("click", function () { addPair(containers.foundationMotionDuration, "cols-2", "duration.", 200, "number"); refreshLists(); });
      document.getElementById("addSemanticMotionDuration").addEventListener("click", function () { addPair(containers.semanticMotionDuration, "cols-2", "motion.duration.", "duration.250", "text", "motionDurationRefs"); refreshLists(); });
      document.getElementById("addSemanticMotionEasing").addEventListener("click", function () { addPair(containers.semanticMotionEasing, "cols-2", "motion.easing.", "easing.standard", "text", "motionEasingRefs"); refreshLists(); });
      bindGenerationModeCheckboxes();
      setIcon(sortSemanticTextButton, "sort-descending");
      sortSemanticTextButton.title = "Sort by group and size";
      sortSemanticTextButton.setAttribute("aria-label", "Sort by group and size");
      setIcon(toggleSemanticMappingButton, "expand-all");
      sortSemanticTextButton.addEventListener("click", function () {
        sortSemanticTextRows();
        refreshLists();
      });
      toggleSemanticMappingButton.addEventListener("click", function () {
        var rows = Array.prototype.filter.call(containers.semanticText.children, function (row) {
          return row.classList && row.classList.contains("semantic-text-row");
        });
        if (!rows.length) return;
        var shouldCollapse = rows.some(function (row) { return !row.classList.contains("row-collapsed"); });
        setSemanticMappingCollapsed(shouldCollapse);
      });

      Array.prototype.forEach.call(document.querySelectorAll("[data-add-text]"), function (button) {
        button.addEventListener("click", function () {
          var kind = button.getAttribute("data-add-text");
          var map = { family: containers.fontFamily, size: containers.fontSize, weight: containers.fontWeight, lineHeight: containers.fontLineHeight, letterSpacing: containers.fontLetterSpacing, textTransform: containers.fontTextTransform };
          var prefixes = { family: "font.family.", size: "font.size.", weight: "font.weight.", lineHeight: "font.lineHeight.", letterSpacing: "font.letterSpacing.", textTransform: "font.textTransform." };
          var numeric = kind !== "family" && kind !== "textTransform" && kind !== "lineHeight";
          if (kind === "family") {
            addFontFamilyPair(map[kind], prefixes[kind] || "", "");
          } else {
            addPair(map[kind], "cols-2", prefixes[kind] || "", numeric ? 0 : "", numeric ? "number" : "text");
          }
          refreshLists();
        });
      });

      Array.prototype.forEach.call(document.querySelectorAll("[data-token-tab]"), function (button) {
        button.addEventListener("click", function () {
          setActiveTokenTab(button.getAttribute("data-token-tab"));
        });
      });

      Array.prototype.forEach.call(document.querySelectorAll("[data-mode-option]"), function (button) {
        button.addEventListener("click", function () {
          setMode(button.getAttribute("data-mode-option"), false);
        });
      });

      if (resizeCornerHitarea) {
        if (window.PointerEvent) {
          resizeCornerHitarea.addEventListener("pointerdown", startWindowResize);
        } else {
          resizeCornerHitarea.addEventListener("mousedown", startWindowResize);
        }
      }

      window.addEventListener("resize", function () {
        if (activeSuggestionInput) positionSuggestions(activeSuggestionInput);
      });

      window.addEventListener("scroll", function () {
        if (activeSuggestionInput) positionSuggestions(activeSuggestionInput);
      }, true);

      document.addEventListener("mousedown", function (event) {
        if (sessionSelectMenu && !sessionSelectMenu.hidden && !sessionSelectMenu.contains(event.target) && event.target !== sessionSelectButton) {
          setSessionSelectOpen(false);
        }
        if (saveMenu && !saveMenu.hidden && !saveMenu.contains(event.target) && event.target !== saveSessionButton && !saveSessionButton.contains(event.target)) {
          setSaveMenuOpen(false);
        }
        if (importMenu && !importMenu.hidden && !importMenu.contains(event.target) && event.target !== loadSessionButton && !loadSessionButton.contains(event.target)) {
          setImportMenuOpen(false);
        }
        if (headerSettingsMenu && !headerSettingsMenu.hidden && !headerSettingsMenu.contains(event.target) && event.target !== headerSettingsButton && !headerSettingsButton.contains(event.target)) {
          setHeaderSettingsOpen(false);
        }
        if (!suggestionPopover || !suggestionPopover.classList.contains("open")) return;
        if (suggestionPopover.contains(event.target)) return;
        if (activeSuggestionInput === event.target) return;
        closeSuggestions();
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && headerSettingsMenu && !headerSettingsMenu.hidden) {
          setHeaderSettingsOpen(false);
          headerSettingsButton.focus();
        }
      });

      fileInput.addEventListener("change", async function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        try {
          await importTokensJsonFile(file);
        } catch (error) {
          setStatus("Invalid JSON: " + error.message, "error");
        } finally {
          fileInput.value = "";
        }
      });

      resetButton.addEventListener("click", function () {
        setHeaderSettingsOpen(false);
        if (pendingDefaultLoadTimer) clearTimeout(pendingDefaultLoadTimer);
        pendingDefaultLoadTimer = setTimeout(function () {
          var fallback = readUiFallbackDefault();
          if (fallback) {
            applySessionPayload(fallback);
            setStatus("Default setup loaded.", "ok");
          } else {
            resetFields();
            setStatus("Setup reset.", "ok");
          }
        }, 220);
        parent.postMessage({ pluginMessage: { type: "load-default" } }, "*");
      });

      cancelButton.addEventListener("click", function () {
        setHeaderSettingsOpen(false);
        parent.postMessage({ pluginMessage: { type: "close" } }, "*");
      });

      headerSettingsButton.addEventListener("click", function () {
        setHeaderSettingsOpen(headerSettingsMenu.hidden);
      });

      createSessionButton.addEventListener("click", function () {
        setSaveMenuOpen(false);
        setSessionSelectOpen(false);
        setImportMenuOpen(false);
        openSaveModal("create");
      });

      saveSessionButton.addEventListener("click", function () {
        setSessionSelectOpen(false);
        setImportMenuOpen(false);
        if (!selectedSavedSessionId) {
          setSaveMenuOpen(false);
          openSaveModal();
          return;
        }
        setSaveMenuOpen(saveMenu.hidden);
      });

      saveAsNewSessionButton.addEventListener("click", function () {
        setSaveMenuOpen(false);
        openSaveModal();
      });

      saveCurrentSessionButton.addEventListener("click", function () {
        setSaveMenuOpen(false);
        saveCurrentSessionRecord();
      });

      loadSessionButton.addEventListener("click", function () {
        setSaveMenuOpen(false);
        setSessionSelectOpen(false);
        setImportMenuOpen(importMenu.hidden);
      });

      importSessionMarkdownButton.addEventListener("click", function () {
        setImportMenuOpen(false);
        sessionFileInput.click();
      });

      importSessionJsonButton.addEventListener("click", function () {
        setImportMenuOpen(false);
        fileInput.click();
      });

      sessionSelect.addEventListener("change", function () {
        var session = savedSessions.find(function (item) { return item && item.id === sessionSelect.value; });
        if (session) loadSavedSession(session);
      });

      sessionSelectButton.addEventListener("click", function () {
        setSessionSelectOpen(sessionSelectMenu.hidden);
      });

      setDefaultButton.addEventListener("click", function () {
        var payload = currentSessionPayload();
        writeUiFallbackDefault(payload);
        showFeedback("Done", "Current setup saved as default.");
        parent.postMessage({ pluginMessage: { type: "save-default", payload: payload } }, "*");
      });

      sessionFileInput.addEventListener("change", async function () {
        var file = sessionFileInput.files && sessionFileInput.files[0];
        if (!file) return;
        try {
          await handleSessionImportFile(file);
        } finally {
          sessionFileInput.value = "";
        }
      });

      saveModalConfirmButton.addEventListener("click", commitSaveSession);
      saveModalCancelButton.addEventListener("click", closeSaveModal);
      saveModalBackdrop.addEventListener("click", function (event) {
        if (event.target === saveModalBackdrop) closeSaveModal();
      });
      saveModalNameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          commitSaveSession();
        }
        if (event.key === "Escape") {
          event.preventDefault();
          closeSaveModal();
        }
      });
      feedbackModalOk.addEventListener("click", closeFeedback);
      feedbackModalBackdrop.addEventListener("click", function (event) {
        if (event.target === feedbackModalBackdrop) closeFeedback();
      });

      generateButton.addEventListener("click", function () {
        try {
          var setupPayload = buildSetup();
          var optionPayload = options();
          generateButton.disabled = true;
          if (importDashboardButton) importDashboardButton.disabled = true;
          parent.postMessage({
            pluginMessage: { type: "setup-tokens", setup: setupPayload, options: optionPayload }
          }, "*");
        } catch (error) {
          generateButton.disabled = false;
          if (importDashboardButton) importDashboardButton.disabled = false;
          setStatus(error && error.message ? error.message : String(error), "error");
        }
      });

      window.onmessage = function (event) {
        var data = event && event.data ? event.data : null;
        var message = data && data.pluginMessage ? data.pluginMessage : data;
        if (!message) return;
        if (message.type === "window-size") {
          currentWindowWidth = Math.max(minWindowWidth, Math.round(Number(message.width) || currentWindowWidth));
          currentWindowHeight = Math.max(minWindowHeight, Math.round(Number(message.height) || currentWindowHeight));
        }
        if (message.type === "import-started") setStatus("Generating...");
        if (message.type === "import-complete") {
          generateButton.disabled = false;
          if (importDashboardButton) importDashboardButton.disabled = false;
          setStatus(message.summary, "ok");
        }
        if (message.type === "import-error") {
          generateButton.disabled = false;
          if (importDashboardButton) importDashboardButton.disabled = false;
          setStatus(message.error, "error");
        }
        if (message.type === "save-default-complete") {
          setStatus("Current setup saved as default.", "ok");
        }
        if (message.type === "save-default-error") {
          setStatus(message.error || "Could not save default.", "error");
        }
        if (message.type === "load-default-complete") {
          if (pendingDefaultLoadTimer) clearTimeout(pendingDefaultLoadTimer);
          if (pendingInitialPluginState) {
            initialDefaultResolved = true;
            initialDefaultPayload = message.payload && typeof message.payload === "object" ? message.payload : null;
            initialDefaultError = "";
            finalizeInitialPluginState();
            return;
          }
          if (message.payload && typeof message.payload === "object") {
            applySessionPayload(message.payload);
            setStatus("Default setup loaded.", "ok");
          } else {
            var fallbackPayload = readUiFallbackDefault();
            if (fallbackPayload) {
              applySessionPayload(fallbackPayload);
              setStatus("Default setup loaded.", "ok");
            } else {
              resetFields();
              setStatus("Setup reset.", "ok");
            }
          }
        }
        if (message.type === "load-default-error") {
          if (pendingDefaultLoadTimer) clearTimeout(pendingDefaultLoadTimer);
          if (pendingInitialPluginState) {
            initialDefaultResolved = true;
            initialDefaultPayload = null;
            initialDefaultError = message.error || "Could not load default; reset to built-in setup.";
            finalizeInitialPluginState();
            return;
          }
          var fallbackPayload = readUiFallbackDefault();
          if (fallbackPayload) {
            applySessionPayload(fallbackPayload);
            setStatus("Default setup loaded.", "ok");
            return;
          }
          resetFields();
          setStatus(message.error || "Could not load default; reset to built-in setup.", "error");
        }
        if (message.type === "load-sessions-complete") {
          if (pendingInitialPluginState) {
            initialSessionsLoaded = true;
            initialSessionsPayload = Array.isArray(message.sessions) ? message.sessions : [];
            initialActiveSessionId = typeof message.activeSessionId === "string" ? message.activeSessionId : "";
            finalizeInitialPluginState();
            return;
          }
          setSavedSessions(message.sessions || []);
        }
        if (message.type === "load-sessions-error") {
          if (pendingInitialPluginState) {
            initialSessionsLoaded = true;
            initialSessionsPayload = readUiFallbackSessions();
            initialActiveSessionId = "";
            finalizeInitialPluginState();
            return;
          }
          setSavedSessions(readUiFallbackSessions());
          setStatus(message.error || "Could not load saved sessions.", "error");
        }
        if (message.type === "save-session-complete") {
          setSavedSessions(message.sessions || savedSessions);
          if (pendingSessionSave) {
            var saveCompleteMessage = pendingSessionSave.successMessage || ("Session saved: " + (pendingSessionSave.recordName || "Session"));
            setStatus(saveCompleteMessage, "ok");
            showFeedback("Done", saveCompleteMessage);
          }
          pendingSessionSave = null;
        }
        if (message.type === "save-session-error") {
          if (pendingSessionSave) {
            selectedSavedSessionId = pendingSessionSave.previousSelectedSessionId || "";
            pendingSessionSave = null;
            renderSessionSelect();
          }
          setStatus(message.error || "Could not save session.", "error");
        }
        if (message.type === "delete-session-complete") {
          setSavedSessions(message.sessions || savedSessions);
        }
        if (message.type === "delete-session-error") {
          setStatus(message.error || "Could not delete session.", "error");
        }
        if (message.type === "available-fonts") {
          applyAvailableFonts(message);
        }
        if (message.type === "available-fonts-error") {
          setStatus(message.error || "Could not load available fonts.", "error");
        }
      };

      function exposeCompleteFieldValue(event) {
        var target = event && event.target;
        if (!target || !target.matches || !target.matches(".field input")) return;
        target.title = String(target.value || "");
      }

      document.addEventListener("mouseover", exposeCompleteFieldValue, true);
      document.addEventListener("focusin", exposeCompleteFieldValue, true);
      document.addEventListener("input", exposeCompleteFieldValue, true);

      initCustomColorPicker();
      setIcon(addBrandPackButton, "add");
      setIcon(createSessionButton.querySelector(".button-icon"), "add");
      setIcon(headerSettingsButton, "settings");
      setHeaderSettingsOpen(false);
      setSaveMenuOpen(false);
      setIcon(loadSessionButton.querySelector(".button-icon"), "import");
      setImportMenuOpen(false);
      renderHintTipIcons();
      resetFields();
      setSavedSessions(readUiFallbackSessions());
      setActiveTokenTab("color");
      setMode("Light", false);
      setSemanticMappingCollapsed(false);
      var initialFallbackDefault = readUiFallbackDefault();
      if (initialFallbackDefault) applySessionPayload(initialFallbackDefault);
      parent.postMessage({ pluginMessage: { type: "load-fonts" } }, "*");
      parent.postMessage({ pluginMessage: { type: "load-sessions" } }, "*");
      parent.postMessage({ pluginMessage: { type: "load-default" } }, "*");
