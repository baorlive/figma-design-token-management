var defaults = {
        foundationSpacing: [["space.0", 0], ["space.2", 2], ["space.4", 4], ["space.6", 6], ["space.8", 8], ["space.12", 12], ["space.16", 16], ["space.20", 20], ["space.24", 24], ["space.32", 32], ["space.40", 40], ["space.48", 48], ["space.56", 56], ["space.64", 64], ["space.72", 72], ["space.80", 80]],
        text: {
          family: [["font.family.sans", "Inter"], ["font.family.serif", "Georgia"], ["font.family.mono", "JetBrains Mono"]],
          size: [["font.size.12", 12], ["font.size.14", 14], ["font.size.16", 16], ["font.size.21", 21], ["font.size.28", 28], ["font.size.38", 38], ["font.size.51", 51], ["font.size.67", 67], ["font.size.90", 90]],
          weight: [["font.weight.light", 300], ["font.weight.regular", 400], ["font.weight.medium", 500], ["font.weight.semibold", 600], ["font.weight.bold", 700]],
          lineHeight: [["font.lineHeight.12", "18px"], ["font.lineHeight.14", "21px"], ["font.lineHeight.16", "24px"], ["font.lineHeight.21", "30px"], ["font.lineHeight.28", "38px"], ["font.lineHeight.38", "50px"], ["font.lineHeight.51", "64px"], ["font.lineHeight.67", "82px"], ["font.lineHeight.90", "108px"]],
          letterSpacing: [["font.letterSpacing.tight", -2], ["font.letterSpacing.default", 0], ["font.letterSpacing.wide", 2]],
          textTransform: [["font.textTransform.none", "none"], ["font.textTransform.uppercase", "uppercase"]]
        },
        semanticColor: [
          ["text.primary", "color.neutral.900"], ["text.secondary", "color.neutral.700"],
          ["text.tertiary", "color.neutral.500"], ["text.inverse", "color.neutral.0"],
          ["text.link", "color.brand.500"], ["bg.canvas", "color.brand.100"],
          ["bg.surface", "color.neutral.0"], ["bg.surface.subtle", "color.neutral.50"],
          ["bg.inverse", "color.neutral.900"], ["bg.brand", "color.brand.500"],
          ["border.default", "color.neutral.200"], ["border.subtle", "color.neutral.100"],
          ["border.strong", "color.neutral.500"], ["border.brand", "color.brand.500"],
          ["action.primary.bg.default", "color.brand.500"],
          ["action.primary.text.default", "color.neutral.0"],
          ["focus.ring", "color.brand.300"]
        ],
        semanticSpacing: [
          ["none", "space.0"], ["micro", "space.2"],
          ["inline.xs", "space.4"], ["inline.sm", "space.8"], ["inline.md", "space.16"], ["inline.lg", "space.24"],
          ["stack.xs", "space.4"], ["stack.sm", "space.8"], ["stack.md", "space.16"], ["stack.lg", "space.24"],
          ["inset.xs", "space.12"], ["inset.sm", "space.16"], ["inset.md", "space.24"], ["inset.lg", "space.32"],
          ["layout.section", "space.40"], ["layout.page", "space.64"]
        ],
        semanticText: [
          ["display.l", "color.text.primary", "font.family.serif", "font.size.90", "font.weight.regular", "font.lineHeight.90", "font.letterSpacing.tight", "font.textTransform.none"],
          ["headline.l", "color.text.primary", "font.family.sans", "font.size.38", "font.weight.semibold", "font.lineHeight.38", "font.letterSpacing.default", "font.textTransform.none"],
          ["headline.m", "color.text.primary", "font.family.sans", "font.size.28", "font.weight.semibold", "font.lineHeight.28", "font.letterSpacing.default", "font.textTransform.none"],
          ["headline.s", "color.text.primary", "font.family.sans", "font.size.21", "font.weight.semibold", "font.lineHeight.21", "font.letterSpacing.default", "font.textTransform.none"],
          ["title.l", "color.text.primary", "font.family.sans", "font.size.21", "font.weight.semibold", "font.lineHeight.21", "font.letterSpacing.default", "font.textTransform.none"],
          ["title.m", "color.text.primary", "font.family.sans", "font.size.16", "font.weight.semibold", "font.lineHeight.16", "font.letterSpacing.default", "font.textTransform.none"],
          ["title.s", "color.text.primary", "font.family.sans", "font.size.14", "font.weight.semibold", "font.lineHeight.14", "font.letterSpacing.default", "font.textTransform.none"],
          ["body.l", "color.text.secondary", "font.family.sans", "font.size.16", "font.weight.regular", "font.lineHeight.16", "font.letterSpacing.default", "font.textTransform.none"],
          ["body.m", "color.text.secondary", "font.family.sans", "font.size.14", "font.weight.regular", "font.lineHeight.14", "font.letterSpacing.default", "font.textTransform.none"],
          ["body.s", "color.text.secondary", "font.family.sans", "font.size.12", "font.weight.regular", "font.lineHeight.12", "font.letterSpacing.default", "font.textTransform.none"],
          ["button.m", "color.text.inverse", "font.family.sans", "font.size.14", "font.weight.medium", "font.lineHeight.14", "font.letterSpacing.default", "font.textTransform.none"],
          ["button.s", "color.text.inverse", "font.family.sans", "font.size.12", "font.weight.medium", "font.lineHeight.12", "font.letterSpacing.default", "font.textTransform.none"],
          ["label.m", "color.text.primary", "font.family.sans", "font.size.12", "font.weight.medium", "font.lineHeight.12", "font.letterSpacing.default", "font.textTransform.none"],
          ["caption.s", "color.text.tertiary", "font.family.sans", "font.size.12", "font.weight.regular", "font.lineHeight.12", "font.letterSpacing.default", "font.textTransform.none"]
        ]
      };

      var containers = {
        foundationColors: document.getElementById("foundationColors"),
        foundationSpacing: document.getElementById("foundationSpacing"),
        semanticColors: document.getElementById("semanticColors"),
        semanticSpacing: document.getElementById("semanticSpacing"),
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
      var widthInput = document.getElementById("windowWidth");
      var heightInput = document.getElementById("windowHeight");
      var resizeCornerHitarea = document.getElementById("resizeCornerHitarea");
      var mainColorNameInput = document.getElementById("mainColorName");
      var mainColorValueInput = document.getElementById("mainColorValue");
      var tonePreview = document.getElementById("tonePreview");
      var saveSessionButton = document.getElementById("saveSession");
      var loadSessionButton = document.getElementById("loadSession");
      var setDefaultButton = document.getElementById("setDefault");
      var sortSemanticTextButton = document.getElementById("sortSemanticText");
      var toggleSemanticMappingButton = document.getElementById("toggleSemanticMapping");
      var feedbackModalBackdrop = document.getElementById("feedbackModalBackdrop");
      var feedbackModalTitle = document.getElementById("feedbackModalTitle");
      var feedbackModalMessage = document.getElementById("feedbackModalMessage");
      var feedbackModalOk = document.getElementById("feedbackModalOk");
      var saveModalBackdrop = document.getElementById("saveModalBackdrop");
      var saveModalNameInput = document.getElementById("saveModalName");
      var saveModalConfirmButton = document.getElementById("saveModalConfirm");
      var saveModalCancelButton = document.getElementById("saveModalCancel");
      var currentWindowWidth = 760;
      var currentWindowHeight = 760;
      var toneSteps = [100, 300, 500, 700, 900];
      var neutralScale = {
        "0": "#FFFFFF",
        "50": "#F7F7F8",
        "100": "#EFEFF1",
        "200": "#DDDEE2",
        "300": "#C8CAD1",
        "500": "#868C98",
        "700": "#4D5360",
        "900": "#1E222B",
        "1000": "#12151B"
      };
      var currentMainColorName = "brand";

      function setActiveTokenTab(category) {
        Array.prototype.forEach.call(document.querySelectorAll("[data-token-tab]"), function (button) {
          button.classList.toggle("active", button.getAttribute("data-token-tab") === category);
        });
        Array.prototype.forEach.call(document.querySelectorAll("[data-token-panel]"), function (panel) {
          panel.classList.toggle("active", panel.getAttribute("data-token-panel").indexOf(category) !== -1);
        });
      }

      function input(value, type, list, placeholder) {
        var el = document.createElement("input");
        el.type = type || "text";
        el.value = value;
        if (placeholder) el.placeholder = placeholder;
        if (list) el.setAttribute("list", list);
        el.addEventListener("input", refreshLists);
        return el;
      }

      function field(kind, child) {
        var wrapper = document.createElement("div");
        wrapper.className = "field field-" + kind;
        wrapper.appendChild(child);
        return wrapper;
      }

      var iconLibrarySystem = {
        close: { body: "<path fill=\"currentColor\" d=\"M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z\"/>", width: 32, height: 32 },
        add: { body: "<path fill=\"currentColor\" d=\"M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z\"/>", width: 32, height: 32 },
        subtract: { body: "<path fill=\"currentColor\" d=\"M8 15h16v2H8z\"/>", width: 32, height: 32 }
      };

      function setIcon(button, name) {
        var icon = iconLibrarySystem[name];
        if (!button || !icon) return;
        button.innerHTML = "<svg aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 " + icon.width + " " + icon.height + "\">" + icon.body + "</svg>";
        button.dataset.icon = name;
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

      function addPair(container, className, name, value, valueType, list) {
        var row = document.createElement("div");
        row.className = "token-row " + className;
        row.appendChild(field("token", input(name || "", "text", null, "token name")));
        row.appendChild(field(list ? "ref" : "value", input(value === undefined ? "" : value, valueType || "text", list, list ? "reference" : "value")));
        addRemove(row);
        container.appendChild(row);
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

      function buildMainColorScale() {
        var base = hexToRgb(mainColorValueInput.value);
        return {
          100: rgbToHex(mixColor(base, { r: 255, g: 255, b: 255 }, 0.82)),
          300: rgbToHex(mixColor(base, { r: 255, g: 255, b: 255 }, 0.38)),
          500: rgbToHex(base),
          700: rgbToHex(mixColor(base, { r: 0, g: 0, b: 0 }, 0.22)),
          900: rgbToHex(mixColor(base, { r: 0, g: 0, b: 0 }, 0.46))
        };
      }

      function renderMainColorScale() {
        var colorName = (mainColorNameInput.value.trim() || "brand")
          .replace(/^color\./, "")
          .replace(/[^a-zA-Z0-9_.-]+/g, ".")
          .replace(/\.+/g, ".")
          .replace(/^\./, "")
          .replace(/\.$/, "") || "brand";
        var scale = buildMainColorScale();
        updateMainColorReferences(currentMainColorName, colorName);
        currentMainColorName = colorName;
        containers.foundationColors.innerHTML = "";
        tonePreview.innerHTML = "";
        toneSteps.forEach(function (step) {
          addPair(containers.foundationColors, "cols-2", colorName + "." + step, scale[step], "color");
          var chip = document.createElement("div");
          chip.className = "tone-chip";
          chip.style.background = scale[step];
          chip.textContent = colorName + "." + step + " " + scale[step];
          tonePreview.appendChild(chip);
        });
        Object.keys(neutralScale).forEach(function (step) {
          addPair(containers.foundationColors, "cols-2", "neutral." + step, neutralScale[step], "color");
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

      function addTextStyle(values) {
        var row = document.createElement("div");
        row.className = "token-row cols-text semantic-text-row";
        var data = values || ["", "color.text.primary", "font.family.sans", "font.size.14", "font.weight.regular", "font.lineHeight.14", "font.letterSpacing.default", "font.textTransform.none"];
        row.appendChild(field("token", input(data[0], "text", null, "text token")));
        row.appendChild(field("ref", input(data[1], "text", "textColorRefs", "color ref")));
        row.appendChild(field("ref", input(data[2], "text", "fontFamilyRefs", "family ref")));
        row.appendChild(field("ref", input(data[3], "text", "fontSizeRefs", "size token ref")));
        row.appendChild(field("ref", input(data[4], "text", "fontWeightRefs", "weight ref")));
        row.appendChild(field("ref", input(data[5], "text", "fontLineHeightRefs", "line-height token ref")));
        row.appendChild(field("ref", input(data[6], "text", "fontLetterSpacingRefs", "letter token ref")));
        row.appendChild(field("ref", input(data[7], "text", "fontTextTransformRefs", "case ref")));
        var actions = document.createElement("div");
        actions.className = "row-actions";
        var toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.className = "icon";
        setIcon(toggleButton, "subtract");
        toggleButton.title = "Collapse mapping";
        toggleButton.setAttribute("aria-label", "Collapse mapping");
        toggleButton.addEventListener("click", function () {
          var collapsed = row.classList.toggle("row-collapsed");
          setIcon(toggleButton, collapsed ? "add" : "subtract");
          toggleButton.title = collapsed ? "Expand mapping" : "Collapse mapping";
          toggleButton.setAttribute("aria-label", collapsed ? "Expand mapping" : "Collapse mapping");
        });
        actions.appendChild(toggleButton);
        actions.appendChild(createRemoveButton(row));
        row.appendChild(actions);
        containers.semanticText.appendChild(row);
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

      function sortSemanticTextRows() {
        var rows = Array.prototype.slice.call(containers.semanticText.children);
        rows.sort(function (a, b) {
          var aFields = a.querySelectorAll("input");
          var bFields = b.querySelectorAll("input");
          var aSize = extractFontSizeValue((aFields[3] || {}).value);
          var bSize = extractFontSizeValue((bFields[3] || {}).value);
          if (aSize !== bSize) return bSize - aSize;
          var aName = ((aFields[0] || {}).value || "").trim().toLowerCase();
          var bName = ((bFields[0] || {}).value || "").trim().toLowerCase();
          return aName.localeCompare(bName);
        });
        rows.forEach(function (row) { containers.semanticText.appendChild(row); });
      }

      function setSemanticMappingCollapsed(collapsed) {
        Array.prototype.forEach.call(containers.semanticText.children, function (row) {
          if (!row.classList || !row.classList.contains("semantic-text-row")) return;
          row.classList.toggle("row-collapsed", !!collapsed);
          var toggleButton = row.querySelector(".row-actions .icon");
          if (!toggleButton) return;
          setIcon(toggleButton, collapsed ? "add" : "subtract");
          toggleButton.title = collapsed ? "Expand mapping" : "Collapse mapping";
          toggleButton.setAttribute("aria-label", collapsed ? "Expand mapping" : "Collapse mapping");
        });
        toggleSemanticMappingButton.textContent = collapsed ? "Expand Mapping" : "Collapse Mapping";
      }

      function resetFields() {
        Object.keys(containers).forEach(function (key) { containers[key].innerHTML = ""; });
        currentMainColorName = "brand";
        mainColorNameInput.value = "brand";
        mainColorValueInput.value = "#E8341C";
        renderMainColorScale();
        defaults.foundationSpacing.forEach(function (row) { addPair(containers.foundationSpacing, "cols-2", row[0], row[1], "number"); });
        defaults.semanticColor.forEach(function (row) { addPair(containers.semanticColors, "cols-2", row[0], row[1], "text", "colorRefs"); });
        defaults.semanticSpacing.forEach(function (row) { addPair(containers.semanticSpacing, "cols-2", row[0], row[1], "text", "spaceRefs"); });
        defaults.text.family.forEach(function (row) { addPair(containers.fontFamily, "cols-2", row[0], row[1]); });
        defaults.text.size.forEach(function (row) { addPair(containers.fontSize, "cols-2", row[0], row[1], "number"); });
        defaults.text.weight.forEach(function (row) { addPair(containers.fontWeight, "cols-2", row[0], row[1], "number"); });
        defaults.text.lineHeight.forEach(function (row) { addPair(containers.fontLineHeight, "cols-2", row[0], row[1], "text"); });
        defaults.text.letterSpacing.forEach(function (row) { addPair(containers.fontLetterSpacing, "cols-2", row[0], row[1], "number"); });
        defaults.text.textTransform.forEach(function (row) { addPair(containers.fontTextTransform, "cols-2", row[0], row[1]); });
        defaults.semanticText.forEach(addTextStyle);
        renderMainColorScale();
      }

      function readPairs(container, numeric) {
        var out = {};
        Array.prototype.forEach.call(container.children, function (row) {
          var fields = row.querySelectorAll("input");
          var name = fields[0].value.trim();
          var value = fields[1].value.trim();
          if (!name) return;
          out[name] = numeric ? Number(value || 0) : value;
        });
        return out;
      }

      function readTextStyles() {
        var out = {};
        Array.prototype.forEach.call(containers.semanticText.children, function (row) {
          var fields = row.querySelectorAll("input");
          var name = fields[0].value.trim();
          if (!name) return;
          out[name] = {
            color: fields[1].value.trim(),
            fontFamily: fields[2].value.trim(),
            fontSize: fields[3].value.trim(),
            fontWeight: fields[4].value.trim(),
            lineHeight: fields[5].value.trim(),
            letterSpacing: fields[6].value.trim(),
            textCase: fields[7].value.trim()
          };
        });
        return out;
      }

      function buildSetup() {
        return {
          foundation: {
            color: readPairs(containers.foundationColors, false),
            spacing: readPairs(containers.foundationSpacing, true),
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
            color: readPairs(containers.semanticColors, false),
            spacing: readPairs(containers.semanticSpacing, false),
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

        Object.keys(containers).forEach(function (key) { containers[key].innerHTML = ""; });

        var foundationColor = foundation.color || {};
        var colorEntries = Object.keys(foundationColor).map(function (key) { return [key, foundationColor[key]]; });
        if (colorEntries.length) {
          colorEntries.forEach(function (row) { addPair(containers.foundationColors, "cols-2", row[0], row[1], "color"); });
        } else {
          renderMainColorScale();
        }

        Object.entries(foundation.spacing || {}).forEach(function (row) { addPair(containers.foundationSpacing, "cols-2", row[0], row[1], "number"); });
        Object.entries(semantic.color || {}).forEach(function (row) { addPair(containers.semanticColors, "cols-2", row[0], row[1], "text", "colorRefs"); });
        Object.entries(semantic.spacing || {}).forEach(function (row) { addPair(containers.semanticSpacing, "cols-2", row[0], row[1], "text", "spaceRefs"); });
        Object.entries(text.family || {}).forEach(function (row) { addPair(containers.fontFamily, "cols-2", row[0], row[1]); });
        Object.entries(text.size || {}).forEach(function (row) { addPair(containers.fontSize, "cols-2", row[0], row[1], "number"); });
        Object.entries(text.weight || {}).forEach(function (row) { addPair(containers.fontWeight, "cols-2", row[0], row[1], "number"); });
        Object.entries(text.lineHeight || {}).forEach(function (row) { addPair(containers.fontLineHeight, "cols-2", row[0], row[1], "text"); });
        Object.entries(text.letterSpacing || {}).forEach(function (row) { addPair(containers.fontLetterSpacing, "cols-2", row[0], row[1], "number"); });
        Object.entries(text.textTransform || {}).forEach(function (row) { addPair(containers.fontTextTransform, "cols-2", row[0], row[1], "text"); });

        Object.entries(semantic.text || {}).forEach(function (entry) {
          var name = entry[0];
          var value = entry[1] || {};
          addTextStyle([
            name,
            value.color || "",
            value.fontFamily || "",
            value.fontSize || "",
            value.fontWeight || "",
            value.lineHeight || "",
            value.letterSpacing || "",
            value.textCase || ""
          ]);
        });

        var opts = payload.options || {};
        document.getElementById("variables").checked = opts.variables !== false;
        document.getElementById("styles").checked = opts.styles !== false;
        document.getElementById("overwrite").checked = opts.overwrite !== false;
        document.getElementById("paletteName").value = opts.paletteName || "Foundation";
        document.getElementById("themeName").value = opts.themeName || "Theme";
        document.getElementById("modeName").value = opts.modeName || "Light";
        document.getElementById("stylePrefix").value = opts.stylePrefix || "";

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

      function buildSessionMarkdown(name, payload) {
        var sessionName = name || "Session";
        return [
          "# " + sessionName,
          "",
          "Generated by Design System Token Importer.",
          "",
          "```json",
          JSON.stringify(payload, null, 2),
          "```",
          ""
        ].join("\n");
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

      function openSaveModal() {
        saveModalBackdrop.classList.add("open");
        saveModalBackdrop.setAttribute("aria-hidden", "false");
        saveModalNameInput.value = "";
        setTimeout(function () { saveModalNameInput.focus(); }, 0);
      }

      function closeSaveModal() {
        saveModalBackdrop.classList.remove("open");
        saveModalBackdrop.setAttribute("aria-hidden", "true");
      }

      function commitSaveSession() {
        var name = String(saveModalNameInput.value || "").trim();
        if (!name) {
          setStatus("Session name is required.", "error");
          saveModalNameInput.focus();
          return;
        }
        var fileName = slugifyFileName(name) + ".md";
        var markdown = buildSessionMarkdown(name, currentSessionPayload());
        downloadTextFile(fileName, markdown);
        closeSaveModal();
        setStatus("Session markdown saved: " + fileName, "ok");
      }

      function fillDatalist(id, values) {
        var list = document.getElementById(id);
        list.innerHTML = "";
        values.forEach(function (value) {
          var option = document.createElement("option");
          option.value = value;
          list.appendChild(option);
        });
      }

      function prefixedPairs(container, prefix, legacyPrefix) {
        var values = [];
        Array.prototype.forEach.call(container.children, function (row) {
          var name = row.querySelector("input").value.trim();
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
        var semanticColorRefs = prefixedPairs(containers.semanticColors, "color.");
        fillDatalist("colorRefs", foundationColorRefs);
        fillDatalist("textColorRefs", semanticColorRefs.concat(foundationColorRefs));
        fillDatalist("spaceRefs", prefixedPairs(containers.semanticSpacing, "space."));
        fillDatalist("fontFamilyRefs", prefixedPairs(containers.fontFamily, "font.family.", "family."));
        fillDatalist("fontSizeRefs", prefixedPairs(containers.fontSize, "font.size.", "size."));
        fillDatalist("fontWeightRefs", prefixedPairs(containers.fontWeight, "font.weight.", "weight."));
        fillDatalist("fontLineHeightRefs", prefixedPairs(containers.fontLineHeight, "font.lineHeight.", "lineHeight."));
        fillDatalist("fontLetterSpacingRefs", prefixedPairs(containers.fontLetterSpacing, "font.letterSpacing.", "letterSpacing."));
        fillDatalist("fontTextTransformRefs", prefixedPairs(containers.fontTextTransform, "font.textTransform.", "textTransform."));
      }

      function options() {
        return {
          variables: document.getElementById("variables").checked,
          styles: document.getElementById("styles").checked,
          overwrite: document.getElementById("overwrite").checked,
          paletteName: document.getElementById("paletteName").value.trim() || "Foundation",
          themeName: document.getElementById("themeName").value.trim() || "Theme",
          modeName: document.getElementById("modeName").value.trim() || "Light",
          stylePrefix: document.getElementById("stylePrefix").value.trim()
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
        var nextWidth = Math.max(1, Number(width) || 760);
        var nextHeight = Math.max(1, Number(height) || 760);
        currentWindowWidth = nextWidth;
        currentWindowHeight = nextHeight;
        widthInput.value = nextWidth;
        heightInput.value = nextHeight;
        parent.postMessage({
          pluginMessage: { type: "resize-ui", width: nextWidth, height: nextHeight }
        }, "*");
      }

      mainColorNameInput.addEventListener("input", renderMainColorScale);
      mainColorValueInput.addEventListener("input", renderMainColorScale);
      importDashboardButton.addEventListener("click", function () {
        fileInput.click();
      });
      document.getElementById("addFoundationSpacing").addEventListener("click", function () { addPair(containers.foundationSpacing, "cols-2", "space.", 0, "number"); refreshLists(); });
      document.getElementById("addSemanticColor").addEventListener("click", function () { addPair(containers.semanticColors, "cols-2", "", "color.brand.500", "text", "colorRefs"); refreshLists(); });
      document.getElementById("addSemanticSpacing").addEventListener("click", function () { addPair(containers.semanticSpacing, "cols-2", "", "space.16", "text", "spaceRefs"); refreshLists(); });
      document.getElementById("addSemanticText").addEventListener("click", function () { addTextStyle(); refreshLists(); });
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
          addPair(map[kind], "cols-2", prefixes[kind] || "", numeric ? 0 : "", numeric ? "number" : "text");
          refreshLists();
        });
      });

      Array.prototype.forEach.call(document.querySelectorAll("[data-token-tab]"), function (button) {
        button.addEventListener("click", function () {
          setActiveTokenTab(button.getAttribute("data-token-tab"));
        });
      });

      widthInput.addEventListener("change", function () {
        resizeWindow(widthInput.value, heightInput.value);
      });

      heightInput.addEventListener("change", function () {
        resizeWindow(widthInput.value, heightInput.value);
      });

      resizeCornerHitarea.addEventListener("mousedown", function (event) {
        event.preventDefault();
        var startX = event.clientX;
        var startY = event.clientY;
        var startWidth = currentWindowWidth;
        var startHeight = currentWindowHeight;

        function onMove(moveEvent) {
          resizeWindow(startWidth + moveEvent.clientX - startX, startHeight + moveEvent.clientY - startY);
        }

        function onUp() {
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
        }

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });

      fileInput.addEventListener("change", async function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        var text;
        try {
          text = await file.text();
        } catch (error) {
          setStatus("Could not read file: " + error.message, "error");
          return;
        }
        var tokens;
        try {
          tokens = JSON.parse(text);
        } catch (error) {
          setStatus("Invalid JSON: " + error.message, "error");
          return;
        }
        generateButton.disabled = true;
        importDashboardButton.disabled = true;
        parent.postMessage({
          pluginMessage: { type: "import-tokens", tokens: tokens, options: options() }
        }, "*");
      });

      resetButton.addEventListener("click", function () {
        parent.postMessage({ pluginMessage: { type: "load-default" } }, "*");
      });

      cancelButton.addEventListener("click", function () {
        parent.postMessage({ pluginMessage: { type: "close" } }, "*");
      });

      saveSessionButton.addEventListener("click", function () {
        openSaveModal();
      });

      loadSessionButton.addEventListener("click", function () {
        sessionFileInput.click();
      });

      setDefaultButton.addEventListener("click", function () {
        showFeedback("Done", "Current setup saved as default.");
        parent.postMessage({ pluginMessage: { type: "save-default", payload: currentSessionPayload() } }, "*");
      });

      sessionFileInput.addEventListener("change", async function () {
        var file = sessionFileInput.files && sessionFileInput.files[0];
        if (!file) return;
        try {
          var markdown = await file.text();
          var payload = parseSessionMarkdown(markdown);
          applySessionPayload(payload);
          setStatus("Session markdown loaded: " + file.name, "ok");
        } catch (error) {
          setStatus("Invalid session markdown: " + (error && error.message ? error.message : String(error)), "error");
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
        generateButton.disabled = true;
        importDashboardButton.disabled = true;
        parent.postMessage({
          pluginMessage: { type: "setup-tokens", setup: buildSetup(), options: options() }
        }, "*");
      });

      window.onmessage = function (event) {
        var message = event.data.pluginMessage;
        if (!message) return;
        if (message.type === "window-size") {
          currentWindowWidth = message.width;
          currentWindowHeight = message.height;
          widthInput.value = message.width;
          heightInput.value = message.height;
        }
        if (message.type === "import-started") setStatus("Generating...");
        if (message.type === "import-complete") {
          generateButton.disabled = false;
          importDashboardButton.disabled = false;
          setStatus(message.summary, "ok");
        }
        if (message.type === "import-error") {
          generateButton.disabled = false;
          importDashboardButton.disabled = false;
          setStatus(message.error, "error");
        }
        if (message.type === "save-default-complete") {
          setStatus("Current setup saved as default.", "ok");
        }
        if (message.type === "save-default-error") {
          setStatus(message.error || "Could not save default.", "error");
        }
        if (message.type === "load-default-complete") {
          if (message.payload && typeof message.payload === "object") {
            applySessionPayload(message.payload);
            setStatus("Default setup loaded.", "ok");
          } else {
            resetFields();
            setStatus("Setup reset.", "ok");
          }
        }
        if (message.type === "load-default-error") {
          resetFields();
          setStatus(message.error || "Could not load default; reset to built-in setup.", "error");
        }
      };

      resetFields();
      setActiveTokenTab("color");
      setSemanticMappingCollapsed(false);
      parent.postMessage({ pluginMessage: { type: "load-default" } }, "*");
      resizeWindow(760, 760);
