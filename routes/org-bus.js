const express = require("express");
const utils = require("../classes/utils");
const { Request, Response, NextFunction } = require("express");
const orgBus = express();
orgBus.post("/organize-gropus", async (req, res, next) => {
  try {
    const jsoned = req.body;
    let groups = jsoned.hasOwnProperty("groups") ? jsoned.groups : null;
    if (groups == null || groups == "") {
      return res
        .status(400)
        .send({ ok: false, message: "Group param is invalid" });
    }
    const isNUmbers = await validateNumbers(groups);

    if (!isNUmbers.isErr) {
      const dataToShow = await getSizesBus(jsoned.groups);
      return res
        .status(200)
        .send({ ok: true, message: `Response data`, dataToBus: dataToShow });
    } else {
      return res
        .status(400)
        .send({
          ok: false,
          message: `Invalid format data of  ${isNUmbers.dataToErro}`,
        });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, message: `Ocurred and Error `, error });
  }
});

async function getSizesBus(gruops) {
  // let maxPeople = 0;
  let busSize = [];
  const grupos = gruops.split(",");
  let cantGrupos = grupos.length;
  
  let maxPeople = grupos.reduce((acc, curr) => acc + curr, 0);

  for (let x = 1; x <= maxPeople; x++) {
    let count = 0;
    let addGroup = true;
    let nexGroup = true;
    let limitIndicator = true;

    let minumumDisponibility = 1;
    let dispoibilityBus = 0;

    while (nexGroup && minumumDisponibility <= cantGrupos) {
      if (limitIndicator) {
        dispoibilityBus = x - grupos[count];
      } else {
        dispoibilityBus = dispoibilityBus - grupos[count];
      }
      limitIndicator = dispoibilityBus > 0 ? false : true;

      if (
        dispoibilityBus < 0 ||
        (dispoibilityBus > 0 && minumumDisponibility == cantGrupos)
      ) {
        nexGroup = false;
        addGroup = false;
      }
      count++;
      minumumDisponibility++;
    }
    if (addGroup) {
      busSize.push(x);
    }
  }
  busSize = busSize.join(",");

  return busSize;
}

async function validateNumbers(group) {
  let isErr = false;
  let dataToErro = "";
  group.split(",").forEach((element) => {
    if (isNaN(element)) {
      isErr = true;
      dataToErro = element;
    }
  });
  return { isErr, dataToErro };
}

module.exports = orgBus;
