/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useInputField } from "@web/views/fields/input_field_hook";
import { Component } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { useRef } from "@odoo/owl";
import { onMounted } from "@odoo/owl";



class RangeSliderWidgets extends Component {
    static template = "rangeslider.RangeSliderWidget";


    setup(){
        super.setup();
        this.inputSlider = useRef("inputSlider");
        this.sliderValue = useRef("sliderValue");

        console.log('kk', this.props.record.data)
        console.log('kkrrr', this.props.record.data[this.props.name])
        useInputField({ getValue: () => this.props.record.data[this.props.name] || "", refName: "inputSlider" });
        this.value = this.props.record.data[this.props.name]
        onMounted(this._mounted);
    }

    _mounted(){
        this.inputSlider.el.value = this.value
        console.log('this.inputSlider.el.value', this.inputSlider.el.value)
        this.sliderValue.el.value = this.value
        console.log('this.sliderValue.el.value', this.sliderValue.el.value)
    }

    _sliderinput(){
        this.sliderValue.el.value = this.inputSlider.el.value
    }

}
export const rangeSliderWidgets = {
component: RangeSliderWidgets,
    displayName: _t("slider"),
    supportedTypes: ["integer"]
};
registry.category("fields").add('range_slider',rangeSliderWidgets);