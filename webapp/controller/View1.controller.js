sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.hubyshipment.controller.View1", {
            onInit: function () {

                const oTable = this.getView().byId("idRHBSshipmennumbertable");
                oTable.attachBrowserEvent("dblclick", this.onRowDoubleClick.bind(this));
            },
            onLivechangeShipment: function () {
                if (this.getView().byId("IDShipmentInput").getValue() == "800020") {
                    this.getView().byId("idRHBSscrollContainer1").setVisible(false)
                    this.getView().byId("idRHBSscrollContainer2").setVisible(true)
                    var oShipment = this.getView().byId("IDShipmentInput").getValue();
                    this.getView().byId("IDShipmentInputforScrollContainer2").setValue(oShipment)
                    this.getView().byId("IDShipmentInputforScrollContainer2").setEditable(false);
                    this.getView().byId("IDRHBS_FirstbackButton1").setVisible(true);
                }
                else {
                    sap.m.MessageToast.show("please enter valid HU Number")
                }
            },
            OnpressFirstback_Shipment: function () {
                this.getView().byId("IDRHBS_FirstbackButton1").setVisible(false);
                this.getView().byId("idRHBSscrollContainer2").setVisible(false);
                this.getView().byId("idRHBSscrollContainer1").setVisible(true);
                this.getView().byId("IDRHBS_MainbackButton1").setVisible(true);


            },
            onRowDoubleClick: function () {
                debugger
                var oSelected = this.byId("idRHBSshipmennumbertable").getSelectedItem();
                this.getView().byId("idRHBSscrollContainer2").setVisible(false);
                this.getView().byId("idRHBSscrollContainer3").setVisible(true);
            },
            //Back Button
            OnpressSecondback_Shipment:function(){
                this.getView().byId("idRHBSscrollContainer2").setVisible(true);
                this.getView().byId("idRHBSscrollContainer3").setVisible(false);
            },

            onHUListPressHubyShipmentScreen3:function(){
                this.getView().byId("idRHBSscrollContainer4").setVisible(true);
                this.getView().byId("idRHBSscrollContainer3").setVisible(false);

            },
            //back button from hu list
            OnpressHuListBackButton1:function(){
                this.getView().byId("idRHBSscrollContainer4").setVisible(false);
                this.getView().byId("idRHBSscrollContainer3").setVisible(true);
            },
            onScreen3NewHUPressHubyShipment:function(){
                debugger
                this.getView().byId("idRHBSscrollContainer5").setVisible(true);
                this.getView().byId("idRHBSscrollContainer3").setVisible(false);
                this.getView().byId("idRHBSscrollContainer4").setVisible(false);
            },
            OnpressNewHuBackButton1:function(){
                this.getView().byId("idRHBSscrollContainer5").setVisible(false);
                this.getView().byId("idRHBSscrollContainer3").setVisible(true);
            },
            onPressEnterNextHuByShipment:function(){
                this.getView().byId("idRHBSscrollContainer6").setVisible(true);
                this.getView().byId("idRHBSscrollContainer5").setVisible(false);

            },
            OnpressNextOrEnterBackButton1:function(){
                this.getView().byId("idRHBSscrollContainer6").setVisible(false);
                this.getView().byId("idRHBSscrollContainer5").setVisible(true);
            },
            onGRPressHubyShipment:function(){
                this.getView().byId("idRHBSscrollContainer7").setVisible(true);
                this.getView().byId("idRHBSscrollContainer6").setVisible(false);
            },
            OnpressGRBackButtonbyHu:function(){
                this.getView().byId("idRHBSscrollContainer7").setVisible(false);
                this.getView().byId("idRHBSscrollContainer6").setVisible(true);
            },
            onunloadPressHubyShipment:function(){
                this.getView().byId("idRHBSscrollContainer8").setVisible(true);
                this.getView().byId("idRHBSscrollContainer6").setVisible(false);
            },
            OnpressUnloadBackButtonbyHu:function(){
                this.getView().byId("idRHBSscrollContainer8").setVisible(false);
                this.getView().byId("idRHBSscrollContainer6").setVisible(true);
            }

        });
    });