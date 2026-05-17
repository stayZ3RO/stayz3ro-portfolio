function CurrentFocus() {
  return (
    <section className="section current-focus" aria-labelledby="focus-title">
      <div className="section-heading">
        <p className="eyebrow">Current Focus</p>
        <h2 id="focus-title">Building from support into infrastructure.</h2>
      </div>

      <div className="focus-card">
        <p>
          Finalizing my home infrastructure lab with Tailscale subnet routing, HA DNS,
          monitoring, and Proxmox-hosted services.
        </p>
        <p>
          Continuing my managed network lab from a validated ER605/Omada cutover toward
          subnetting, VLAN planning, firewall policy, pilot VLAN testing, and controlled
          renumbering.
        </p>
        <p>
          Building a private PowerShell service desk toolkit for diagnostics, reporting, and
          future repair/remediation workflows.
        </p>
      </div>
    </section>
  );
}

export default CurrentFocus;
