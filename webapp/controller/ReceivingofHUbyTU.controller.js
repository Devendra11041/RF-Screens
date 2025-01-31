sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.hubyshipment.controller.ReceivingofHUbyTU", {
            onInit: function () {

                const oTable = this.getView().byId("idReceivingofHUbyTUnumbertable");
                oTable.attachBrowserEvent("dblclick", this.onRowDoubleClick.bind(this));
            },
            onLivechangeShipment: function () {
                if (this.getView().byId("IDShipmentInputReceivingHubyTU").getValue() == "800020") {
                    this.getView().byId("idscrollContainer1ReceivingHubyTU").setVisible(false)
                    this.getView().byId("idscrollContainer2ReceivingHubyTU").setVisible(true)
                    var oTU = this.getView().byId("IDShipmentInputReceivingHubyTU").getValue();
                    this.getView().byId("IDShipmentInputforScrollContainer2HUbyTu").setValue(oTU)
                    this.getView().byId("IDShipmentInputforScrollContainer2HUbyTu").setEditable(false);
                    this.getView().byId("IDReceivingHubyTU_FirstbackButton1").setVisible(true);
                }
                else {
                    sap.m.MessageToast.show("please enter valid TU Number")
                }
            },
            OnpressFirstback_RCHUbyTu: function () {
                this.getView().byId("IDReceivingHubyTU_FirstbackButton1").setVisible(false);
                this.getView().byId("idscrollContainer2ReceivingHubyTU").setVisible(false);
                this.getView().byId("idscrollContainer1ReceivingHubyTU").setVisible(true);
                this.getView().byId("IDMainbackButton1ReceivingHubyTU").setVisible(true);


            },
            onRowDoubleClick: function () {
                debugger
                var oSelected = this.byId("idReceivingofHUbyTUnumbertable").getSelectedItem();
                this.getView().byId("idscrollContainer2ReceivingHubyTU").setVisible(false);
                this.getView().byId("idscrollContainer3ReceivingHubyTU").setVisible(true);
            },
            //Back Button
            OnpressSecondback_RCHUbyTU: function () {
                this.getView().byId("idscrollContainer2ReceivingHubyTU").setVisible(true);
                this.getView().byId("idscrollContainer3ReceivingHubyTU").setVisible(false);
            },

            onHUListPressHubyRCHUbyTUScreen3: function () {
                this.getView().byId("idRCHUbyTUscrollContainer4ReceivingofHUbyTU").setVisible(true);
                this.getView().byId("idscrollContainer3ReceivingHubyTU").setVisible(false);

            },
            //back button from hu list
            OnpressHuListBackButtonRCHubyTu: function () {
                this.getView().byId("idRCHUbyTUscrollContainer4ReceivingofHUbyTU").setVisible(false);
                this.getView().byId("idscrollContainer3ReceivingHubyTU").setVisible(true);
            },
            onScreen3NewHUPressHubyRCHUbyTU: function () {
                debugger
                this.getView().byId("idRCHUbyTUscrollContainer5ReceivingHubyTu").setVisible(true);
                this.getView().byId("idscrollContainer3ReceivingHubyTU").setVisible(false);
                this.getView().byId("idRCHUbyTUscrollContainer4ReceivingofHUbyTU").setVisible(false);
            },
            OnpressNewHuBackButton1: function () {
                this.getView().byId("idRCHUbyTUscrollContainer5ReceivingHubyTu").setVisible(false);
                this.getView().byId("idscrollContainer3ReceivingHubyTU").setVisible(true);
            },
            onPressEnterNextHuByRCHUbyTUL: function () {
                this.getView().byId("idRCHUbyTUscrollContainer6ReceivingOfHubyTu").setVisible(true);
                this.getView().byId("idRCHUbyTUscrollContainer5ReceivingHubyTu").setVisible(false);

            },
            OnpressNextOrEnterBackButton1RChubyTu: function () {
                this.getView().byId("idRCHUbyTUscrollContainer6ReceivingOfHubyTu").setVisible(false);
                this.getView().byId("idRCHUbyTUscrollContainer5ReceivingHubyTu").setVisible(true);
            },
            onGRPressHubyRCHUbyTU: function () {
                this.getView().byId("idRCHUbyTUscrollContainer7ReceivingHubyTU").setVisible(true);
                this.getView().byId("idRCHUbyTUscrollContainer6ReceivingOfHubyTu").setVisible(false);
            },
            OnpressGRBackButtonbyHubyTU: function () {
                this.getView().byId("idRCHUbyTUscrollContainer7ReceivingHubyTU").setVisible(false);
                this.getView().byId("idRCHUbyTUscrollContainer6ReceivingOfHubyTu").setVisible(true);
            },
            onunloadPressHubyRCHUbyTU: function () {
                this.getView().byId("idRCHUbyTUscrollContainer8ReceivingOfHUbyTu").setVisible(true);
                this.getView().byId("idRCHUbyTUscrollContainer6ReceivingOfHubyTu").setVisible(false);
            },
            OnpressUnloadBackButtonbyHuLAst: function () {
                this.getView().byId("idRCHUbyTUscrollContainer8ReceivingOfHUbyTu").setVisible(false);
                this.getView().byId("idRCHUbyTUscrollContainer6ReceivingOfHubyTu").setVisible(true);
            }

        });
    });