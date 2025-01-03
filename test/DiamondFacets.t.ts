import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ignition } from "hardhat";
import DiamondAddFacetModule from "../ignition/modules/DiamondAddFacetModule";
import DiamondAddFacet3Module from "../ignition/modules/DiamondAddFacet3Module";


describe("Diamond Facets", function () {

    async function deployFacets() {
        return ignition.deploy(DiamondAddFacetModule);
    }

    async function deployFacets3() {
        return ignition.deploy(DiamondAddFacet3Module);
    }

    describe("Verify facet1", function () {
        it("set value / get value", async function () {
            const { proxyFacet1 } = await loadFixture(deployFacets);
            await proxyFacet1.setFacet1(0, "test1");

            const value = await proxyFacet1.getFacet1(0);
            expect(value.toString()).to.be.equal("test1");
        });
    });

    describe("Verify facet2", function () {
        it("set value / get value", async function () {
            const { proxyFacet2 } = await loadFixture(deployFacets);
            await proxyFacet2.setFacet2(0, "test2");

            const value = await proxyFacet2.getFacet2(0);
            expect(value.toString()).to.be.equal("test2");
        });
    });

    describe("Verify facet3", function () {
        it("set value / get value", async function () {
            const { proxyFacet3 } = await loadFixture(deployFacets3);
            await proxyFacet3.setFacet3(0, "test3");

            const value = await proxyFacet3.getFacet3(0);
            expect(value.toString()).to.be.equal("test3");
        });
    });
});