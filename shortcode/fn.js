window.onload = function () {
  const manTranslateButton = document.getElementById("man-translate-jawa-btn");

  const manPecahanBiasaHitung = document.getElementById(
    "man-pecahan-biasa-hitung"
  );
  const manPecahanBiasaReset = document.getElementById(
    "man-pecahan-biasa-reset"
  );
  const manPecahanBiasaBox = document.getElementById("man-pecahan-biasa-box");

  const manPecahanCampuranHitung = document.getElementById(
    "man-pecahan-campuran-hitung"
  );
  const manPecahanCampuranReset = document.getElementById(
    "man-pecahan-campuran-reset"
  );
  const manPecahanCampuranBox = document.getElementById(
    "man-pecahan-campuran-box"
  );

  const manPerkalianPersenHitung = document.getElementById(
    "man-perkalian-persen-hitung"
  );
  const manPerkalianPersenReset = document.getElementById(
    "man-perkalian-persen-reset"
  );
  const manPerkalianPersenBox = document.getElementById(
    "man-perkalian-persen-box"
  );

  const manPersenDariPecahanHitung = document.getElementById(
    "man-persen-dari-pecahan-hitung"
  );
  const manPersenDariPecahanReset = document.getElementById(
    "man-persen-dari-pecahan-reset"
  );
  const manPersenDariPecahanBox = document.getElementById(
    "man-persen-dari-pecahan-box"
  );

  const manPersenDari2Hitung = document.getElementById(
    "man-persen-dari2-hitung"
  );
  const manPersenDari2Reset = document.getElementById("man-persen-dari2-reset");
  const manPersenDari2Box = document.getElementById("man-persen-dari2-box");

  const manPerubahanPresentaseHitung = document.getElementById(
    "man-perubahan-presentase-hitung"
  );
  const manPerubahanPresentaseReset = document.getElementById(
    "man-perubahan-presentase-reset"
  );
  const manPerubahanPresentaseBox = document.getElementById(
    "man-perubahan-presentase-box"
  );

  const manAngkaRomawiBtn = document.getElementById("man-angka-romawi-btn");
  const manRomawiAngkaBtn = document.getElementById("man-romawi-angka-btn");

  if (manTranslateButton != null) {
    manTranslateButton.addEventListener("click", () => {
      // bahasa jawa
      const manTranslateOption = document.getElementById(
        "man-translate-jawa-option"
      );
      const manTranslateText = document.getElementById("man-translate-jawa-text");
      const manTranslateResult = document.getElementById(
        "man-translate-jawa-result"
      );
      if (
        manTranslateOption != null &&
        manTranslateText != null &&
        manTranslateResult != null
      ) {
        manTranslateResult.textContent = manTranslateJawa(
          manTranslateText.value,
          manTranslateOption.value
        );
      }
    });
  }

  if (
    manPecahanBiasaBox != null &&
    manPecahanBiasaHitung != null &&
    manPecahanBiasaReset != null
  ) {
    manPecahanBiasaBox.hidden = true;

    manPecahanBiasaHitung.addEventListener("click", () => {
      const manPecahanBiasaA = document.getElementById("man-pecahan-biasa-a");
      const manPecahanBiasaB = document.getElementById("man-pecahan-biasa-b");
      const manPecahanBiasaC = document.getElementById("man-pecahan-biasa-c");
      const manPecahanBiasaD = document.getElementById("man-pecahan-biasa-d");
      const manPecahanBiasaOperator = document.getElementById(
        "man-pecahan-biasa-operator"
      );
      const manPecahanBiasaHasil = document.getElementById(
        "man-pecahan-biasa-hasil"
      );
      const manPecahanBiasaStep = document.getElementById(
        "man-pecahan-biasa-step"
      );

      if (
        manPecahanBiasaA != null &&
        manPecahanBiasaB != null &&
        manPecahanBiasaC != null &&
        manPecahanBiasaD != null &&
        manPecahanBiasaOperator != null
      ) {
        const a = parseInt(manPecahanBiasaA.value);
        const b = parseInt(manPecahanBiasaB.value);
        const c = parseInt(manPecahanBiasaC.value);
        const d = parseInt(manPecahanBiasaD.value);

        const { h, s } = manPecahanBiasa(
          a,
          b,
          c,
          d,
          manPecahanBiasaOperator.value
        );

        manPecahanBiasaHasil.textContent = h;
        manPecahanBiasaBox.hidden = false;
        manPecahanBiasaStep.value = s;
      }
    });

    manPecahanBiasaReset.addEventListener("click", () => {
      const manPecahanBiasaA = document.getElementById("man-pecahan-biasa-a");
      const manPecahanBiasaB = document.getElementById("man-pecahan-biasa-b");
      const manPecahanBiasaC = document.getElementById("man-pecahan-biasa-c");
      const manPecahanBiasaD = document.getElementById("man-pecahan-biasa-d");
      const manPecahanBiasaOperator = document.getElementById(
        "man-pecahan-biasa-operator"
      );
      const manPecahanBiasaHasil = document.getElementById(
        "man-pecahan-biasa-hasil"
      );
      const manPecahanBiasaStep = document.getElementById(
        "man-pecahan-biasa-step"
      );

      manPecahanBiasaA.value = "";
      manPecahanBiasaB.value = "";
      manPecahanBiasaC.value = "";
      manPecahanBiasaD.value = "";
      manPecahanBiasaOperator.value = "+";
      manPecahanBiasaHasil.innerHTML = "";
      manPecahanBiasaBox.hidden = true;
      manPecahanBiasaStep.value = "";
    });
  }

  if (
    manPecahanCampuranBox != null &&
    manPecahanCampuranHitung != null &&
    manPecahanBiasaReset != null
  ) {
    manPecahanCampuranBox.hidden = true;

    manPecahanCampuranHitung.addEventListener("click", () => {
      const manPecahanCampuranA = document.getElementById(
        "man-pecahan-campuran-a"
      );
      const manPecahanCampuranB = document.getElementById(
        "man-pecahan-campuran-b"
      );
      const manPecahanCampuranC = document.getElementById(
        "man-pecahan-campuran-c"
      );
      const manPecahanCampuranD = document.getElementById(
        "man-pecahan-campuran-d"
      );
      const manPecahanCampuranE = document.getElementById(
        "man-pecahan-campuran-e"
      );
      const manPecahanCampuranF = document.getElementById(
        "man-pecahan-campuran-f"
      );
      const manPecahanCampuranOperator = document.getElementById(
        "man-pecahan-campuran-operator"
      );
      const manPecahanCampuranHasil = document.getElementById(
        "man-pecahan-campuran-hasil"
      );
      const manPecahanCampuranStep = document.getElementById(
        "man-pecahan-campuran-step"
      );

      if (
        manPecahanCampuranA != null &&
        manPecahanCampuranB != null &&
        manPecahanCampuranC != null &&
        manPecahanCampuranD != null &&
        manPecahanCampuranE != null &&
        manPecahanCampuranF != null &&
        manPecahanCampuranOperator != null
      ) {
        const a = parseInt(manPecahanCampuranA.value);
        const b = parseInt(manPecahanCampuranB.value);
        const c = parseInt(manPecahanCampuranC.value);
        const d = parseInt(manPecahanCampuranD.value);
        const e = parseInt(manPecahanCampuranE.value);
        const f = parseInt(manPecahanCampuranF.value);

        const { h, s } = manPecahanCampuran(
          a,
          b,
          c,
          d,
          e,
          f,
          manPecahanCampuranOperator.value
        );

        manPecahanCampuranBox.hidden = false;
        manPecahanCampuranHasil.textContent = h;
        manPecahanCampuranStep.value = s;
      }
    });

    manPecahanCampuranReset.addEventListener("click", () => {
      const manPecahanCampuranA = document.getElementById(
        "man-pecahan-campuran-a"
      );
      const manPecahanCampuranB = document.getElementById(
        "man-pecahan-campuran-b"
      );
      const manPecahanCampuranC = document.getElementById(
        "man-pecahan-campuran-c"
      );
      const manPecahanCampuranD = document.getElementById(
        "man-pecahan-campuran-d"
      );
      const manPecahanCampuranE = document.getElementById(
        "man-pecahan-campuran-e"
      );
      const manPecahanCampuranF = document.getElementById(
        "man-pecahan-campuran-f"
      );
      const manPecahanCampuranOperator = document.getElementById(
        "man-pecahan-campuran-operator"
      );
      const manPecahanCampuranHasil = document.getElementById(
        "man-pecahan-campuran-hasil"
      );
      const manPecahanCampuranStep = document.getElementById(
        "man-pecahan-campuran-step"
      );

      manPecahanCampuranA.value = "";
      manPecahanCampuranB.value = "";
      manPecahanCampuranC.value = "";
      manPecahanCampuranD.value = "";
      manPecahanCampuranE.value = "";
      manPecahanCampuranF.value = "";
      manPecahanCampuranOperator.value = "+";
      manPecahanCampuranHasil.innerHTML = "";
      manPecahanCampuranStep.value = "";
      manPecahanCampuranBox.hidden = true;
    });
  }

  if (
    manPerkalianPersenBox != null &&
    manPerkalianPersenHitung != null &&
    manPerkalianPersenReset != null
  ) {
    manPerkalianPersenBox.hidden = true;

    manPerkalianPersenHitung.addEventListener("click", () => {
      const manPerkalianPersenA = document.getElementById(
        "man-perkalian-persen-a"
      );
      const manPerkalianPersenB = document.getElementById(
        "man-perkalian-persen-b"
      );
      const manPerkalianPersenHasil = document.getElementById(
        "man-perkalian-persen-hasil"
      );
      const manPerkalianPersenStep = document.getElementById(
        "man-perkalian-persen-step"
      );

      if (manPerkalianPersenA != null && manPerkalianPersenB != null) {
        const a = parseInt(manPerkalianPersenA.value);
        const b = parseInt(manPerkalianPersenB.value);

        const { h, s } = manPerkalianPersen(a, b);

        manPerkalianPersenHasil.value = h;
        manPerkalianPersenBox.hidden = false;
        manPerkalianPersenStep.value = s;
      }
    });

    manPerkalianPersenReset.addEventListener("click", () => {
      const manPerkalianPersenA = document.getElementById(
        "man-perkalian-persen-a"
      );
      const manPerkalianPersenB = document.getElementById(
        "man-perkalian-persen-b"
      );
      const manPerkalianPersenHasil = document.getElementById(
        "man-perkalian-persen-hasil"
      );
      const manPerkalianPersenStep = document.getElementById(
        "man-perkalian-persen-step"
      );

      manPerkalianPersenA.value = "";
      manPerkalianPersenB.value = "";
      manPerkalianPersenHasil.value = "";
      manPerkalianPersenStep.value = "";
      manPerkalianPersenBox.hidden = true;
    });
  }

  if (
    manPersenDariPecahanBox != null &&
    manPersenDariPecahanHitung != null &&
    manPersenDariPecahanReset != null
  ) {
    manPersenDariPecahanBox.hidden = true;

    manPersenDariPecahanHitung.addEventListener("click", () => {
      const manPersenDariPecahanA = document.getElementById(
        "man-persen-dari-pecahan-a"
      );
      const manPersenDariPecahanB = document.getElementById(
        "man-persen-dari-pecahan-b"
      );
      const manPersenDariPecahanHasil = document.getElementById(
        "man-persen-dari-pecahan-hasil"
      );
      const manPersenDariPecahanStep = document.getElementById(
        "man-persen-dari-pecahan-step"
      );

      if (manPersenDariPecahanA != null && manPersenDariPecahanB != null) {
        const a = parseInt(manPersenDariPecahanA.value);
        const b = parseInt(manPersenDariPecahanB.value);

        const { h, s } = manPersenDariPecahan(a, b);

        manPersenDariPecahanHasil.value = h;
        manPersenDariPecahanBox.hidden = false;
        manPersenDariPecahanStep.value = s;
      }
    });

    manPersenDariPecahanReset.addEventListener("click", () => {
      const manPersenDariPecahanA = document.getElementById(
        "man-persen-dari-pecahan-a"
      );
      const manPersenDariPecahanB = document.getElementById(
        "man-persen-dari-pecahan-b"
      );
      const manPersenDariPecahanHasil = document.getElementById(
        "man-persen-dari-pecahan-hasil"
      );
      const manPersenDariPecahanStep = document.getElementById(
        "man-persen-dari-pecahan-step"
      );

      manPersenDariPecahanA.value = "";
      manPersenDariPecahanB.value = "";
      manPersenDariPecahanHasil.value = "";
      manPersenDariPecahanStep.value = "";
      manPersenDariPecahanBox.hidden = true;
    });
  }

  if (
    manPersenDari2Box != null &&
    manPersenDari2Hitung != null &&
    manPersenDari2Reset != null
  ) {
    manPersenDari2Box.hidden = true;

    manPersenDari2Hitung.addEventListener("click", () => {
      const manPersenDari2A = document.getElementById("man-persen-dari2-a");
      const manPersenDari2B = document.getElementById("man-persen-dari2-b");
      const manPersenDari2Hasil = document.getElementById(
        "man-persen-dari2-hasil"
      );
      const manPersenDari2Step = document.getElementById(
        "man-persen-dari2-step"
      );

      if (manPersenDari2A != null && manPersenDari2B != null) {
        const a = parseInt(manPersenDari2A.value);
        const b = parseInt(manPersenDari2B.value);

        const { h, s } = manPersenDari2(a, b);

        manPersenDari2Hasil.value = h;
        manPersenDari2Box.hidden = false;
        manPersenDari2Step.value = s;
      }
    });

    manPersenDari2Reset.addEventListener("click", () => {
      const manPersenDari2A = document.getElementById("man-persen-dari2-a");
      const manPersenDari2B = document.getElementById("man-persen-dari2-b");
      const manPersenDari2Hasil = document.getElementById(
        "man-persen-dari2-hasil"
      );
      const manPersenDari2Step = document.getElementById(
        "man-persen-dari2-step"
      );

      manPersenDari2A.value = "";
      manPersenDari2B.value = "";
      manPersenDari2Hasil.value = "";
      manPersenDari2Step.value = "";
      manPersenDari2Box.hidden = true;
    });
  }

  if (
    manPerubahanPresentaseBox != null &&
    manPerubahanPresentaseHitung != null &&
    manPerubahanPresentaseReset != null
  ) {
    manPerubahanPresentaseBox.hidden = true;

    manPerubahanPresentaseHitung.addEventListener("click", () => {
      const manPerubahanPresentaseA = document.getElementById(
        "man-perubahan-presentase-a"
      );
      const manPerubahanPresentaseB = document.getElementById(
        "man-perubahan-presentase-b"
      );
      const manPerubahanPresentaseHasil = document.getElementById(
        "man-perubahan-presentase-hasil"
      );
      const manPerubahanPresentaseStep = document.getElementById(
        "man-perubahan-presentase-step"
      );

      if (manPerubahanPresentaseA != null && manPerubahanPresentaseB != null) {
        const a = parseInt(manPerubahanPresentaseA.value);
        const b = parseInt(manPerubahanPresentaseB.value);

        const { h, s } = manPerubahanPresentase(a, b);

        manPerubahanPresentaseHasil.value = h;
        manPerubahanPresentaseBox.hidden = false;
        manPerubahanPresentaseStep.value = s;
      }
    });

    manPerubahanPresentaseReset.addEventListener("click", () => {
      const manPerubahanPresentaseA = document.getElementById(
        "man-perubahan-presentase-a"
      );
      const manPerubahanPresentaseB = document.getElementById(
        "man-perubahan-presentase-b"
      );
      const manPerubahanPresentaseHasil = document.getElementById(
        "man-perubahan-presentase-hasil"
      );
      const manPerubahanPresentaseStep = document.getElementById(
        "man-perubahan-presentase-step"
      );

      manPerubahanPresentaseA.value = "";
      manPerubahanPresentaseB.value = "";
      manPerubahanPresentaseHasil.value = "";
      manPerubahanPresentaseStep.value = "";
      manPerubahanPresentaseBox.hidden = true;
    });
  }

  if (manAngkaRomawiBtn != null) {
    manAngkaRomawiBtn.addEventListener("click", () => {
      const manAngkaRomawiText = document.getElementById(
        "man-angka-romawi-text"
      );
      const manAngkaRomawiHasil = document.getElementById(
        "man-angka-romawi-hasil"
      );

      if (manAngkaRomawiText != null && manAngkaRomawiHasil != null) {
        const a = parseInt(manAngkaRomawiText.value);

        manAngkaRomawiHasil.textContent = manRomanize(a);
      }
    });
  }

  if (manRomawiAngkaBtn != null) {
    manRomawiAngkaBtn.addEventListener("click", () => {
      const manRomawiAngkaText = document.getElementById(
        "man-romawi-angka-text"
      );
      const manRomawiAngkaHasil = document.getElementById(
        "man-romawi-angka-hasil"
      );

      if (manRomawiAngkaText != null && manRomawiAngkaHasil != null) {
        manRomawiAngkaHasil.textContent = manDeromanize(
          manRomawiAngkaText.value
        );
      }
    });
  }
};
