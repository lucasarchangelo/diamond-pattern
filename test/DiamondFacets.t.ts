import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ignition } from "hardhat";
import DiamondAddFacetModule from "../ignition/modules/DiamondAddFacetModule";


describe("Diamond Facets", function () {

    async function deployFacets() {
        return ignition.deploy(DiamondAddFacetModule);
    }

    describe("Verify facet1", function () {
        it("set value / get value", async function () {
            const {proxyFacet1} = await loadFixture(deployFacets);
            await proxyFacet1.setFacet1("test1");

            const value = await proxyFacet1.getFacet1();

            expect(value).to.be.equal("test1");
        });
    });

    describe("Verify facet2", function () {
        it("set value / get value", async function () {
            const {proxyFacet2} = await loadFixture(deployFacets);
            await proxyFacet2.setFacet2("test2");

            const value = await proxyFacet2.getFacet2();

            expect(value).to.be.equal("test2");
        });
    });
});