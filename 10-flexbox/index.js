const ids = [
    "justifyModifier", "justify",
    "align", "alignModifier",
    "direction","wrap"
];

const state = {
    justify: "space-between",
    justifyModifier: "",
    align: "center",
    alignModifier: "",
    direction: "row",
    wrap: "nowrap"
}

const getJustify = (state) => {
    return `${state.justifyModifier} ${state.justify}`;
}

const getAlign = (state) => {
    return `${state.alignModifier} ${state.align}`
}

const updateUI = (justify,align) => {
    document.getElementById("current-justify").innerText = justify
    document.getElementById("current-align").innerText = align
}

const applyStyles = () => {
    const container = document.getElementById("container")
    const justify = getJustify(state);
    const align = getAlign(state);
    container.style.justifyContent = justify
    container.style.alignItems = align
    container.style.flexDirection = state.direction;
    container.style.flexWrap = state.wrap;
    updateUI(justify,align);
}

const addEvents = () => {
    ids
    .map(id => document.getElementById(id))
    .map(x => x.addEventListener("change", e => {
        state[e.target.id] = e.target.value
        applyStyles()
    }))
}

addEvents()

window.state = state