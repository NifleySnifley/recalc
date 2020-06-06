import React from "react";
import Tile from "common/components/landing/Tile";
import { IMAGE as flywheelImage } from "calculators/flywheel/config";

export default function Landing() {
  return (
    <div>
      <div class="columns">
        <div class="column is-one-third">
          <Tile
            to="/flywheel"
            title="Flywheel Calculator"
            image={flywheelImage}
          />
        </div>
        <div class="column is-one-third">
          <Tile to="/belts" title="Belt Calculator" />
        </div>
        <div class="column is-one-third">
          <Tile to="/pneumatics" title="Pneumatics Calculator" />
        </div>
      </div>
    </div>
  );
}
