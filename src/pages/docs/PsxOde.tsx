export default function PsxOde() {
    return (
    <div>
      <section className="intro"></section>
        <section className="ps2-panel">
          <p className="ps2-panel__eyebrow">Documentation</p>

          <h2 className="ps2-panel__title">
            Do you want to Copy this CD?
          </h2>

          <p className="ps2-panel__text">
            This section explains how optical drive emulators work, what they replace,
            and what you need to know before installing one.
          </p>
        </section>

        <section className="ps2-panel">
          <p className="ps2-panel__eyebrow">Introduction</p>

          <h2 className="ps2-panel__title">General Description</h2>

          <div className="ps2-panel__text">
            <p>
              In this page, I will describe the process of installing the xStation for
              the PlayStation 1. The xStation is an optical drive emulator for original
              PS1 hardware. Its primary purpose is to emulate the disc drive of a
              standard console, using an SD card to load games from.
            </p>

            <p>
              It is important to note that this process differs depending on which board
              revision your system has.
            </p>

            <p>
              I performed this installation on a PU-18 board, commonly found in the
              SCPH-5500.
            </p>
          </div>
        </section>

    </div>
  );
}