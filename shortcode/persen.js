function perkalianPersen() {
    const manPp1 = document.getElementById('man-pp1')
    const manPp2 = document.getElementById('man-pp2')
    const manPpH = document.getElementById('man-pph')
    const manPpS = document.getElementById('man-pps')

    let h = 0
    let s = 'Kesalahan'

    if (manPp1 != null && manPp2 !=  null && manPpH != null & manPpS != null) {
        const a = parseInt(manPp1.value)
        const b = parseInt(manPp2.value)

        h = (a / 100) * b
        s = `(${a}/100) * ${b}`
    }

    manPpH.value = h
    manPpS.textContent = s

    h = 0
    s = 'Kesalahan'
}

function persenDariPecahan() {
    const manPdp1 = document.getElementById('man-pdp1')
    const manPdp2 = document.getElementById('man-pdp2')
    const manPdpH = document.getElementById('man-pdph')
    const manPdpS = document.getElementById('man-pdps')

    let h = 0
    let s = 'Kesalahan'

    if (manPdp1 != null && manPdp2 !=  null && manPdpH != null & manPdpS != null) {
        const a = parseInt(manPdp1.value)
        const b = parseInt(manPdp2.value)

        h = (a / b) * 100
        s = `(${a}/${b}) * 100%`
    }

    manPdpH.value = h
    manPdpS.textContent = s

    h = 0
    s = 'Kesalahan'
}

function persenDari2() {
    const manPd1 = document.getElementById('man-pd1')
    const manPd2 = document.getElementById('man-pd2')
    const manPdH = document.getElementById('man-pdh')
    const manPdS = document.getElementById('man-pds')

    let h = 0
    let s = 'Kesalahan'

    if (manPd1 != null && manPd2 !=  null && manPdH != null & manPdS != null) {
        const a = parseInt(manPd1.value)
        const b = parseInt(manPd2.value)

        h = (a / b) * 100
        s = `(${a}/${b}) * 100%`
    }

    manPdH.value = h
    manPdS.textContent = s

    h = 0
    s = 'Kesalahan'
}

function perubahanPresentase() {
    const manPs1 = document.getElementById('man-ps1')
    const manPs2 = document.getElementById('man-ps2')
    const manPsH = document.getElementById('man-psh')
    const manPsS = document.getElementById('man-pss')

    let h = 0
    let s = 'Kesalahan'

    if (manPs1 != null && manPs2 !=  null && manPsH != null & manPsS != null) {
        const a = parseInt(manPs1.value)
        const b = parseInt(manPs2.value)

        h = ((b - a)/a) * 100
        s = `(${a}/${b}) * 100%`
    }

    manPsH.value = h
    manPsS.textContent = s

    h = 0
    s = 'Kesalahan'
}