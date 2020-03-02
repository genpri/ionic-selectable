/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  AnimationBuilder,
  StyleEventDetail,
} from '@ionic/core';
import {
  IIonicSelectableEvent,
} from './components/ionic-selectable/ionic-selectable.interfaces.component';

export namespace Components {
  interface IonicSelectable {
    /**
    * Close button text. The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
    * @default 'Cancel'
    * @memberof IonicSelectableComponent
    */
    'closeButtonText': string;
    /**
    * Confirm button text. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
    * @default 'OK'
    * @memberof IonicSelectableComponent
    */
    'confirmButtonText': string;
    /**
    * Group property to display, e.g. `'country.name'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'groupTextField': string;
    /**
    * Group property to use as a unique identifier to group items, e.g. `'country.id'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'groupValueField': string;
    /**
    * Determines whether Confirm button is visible for single selection. By default Confirm button is visible only for multiple selection. **Note**: It is always true for multiple selection and cannot be changed. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'hasConfirmButton': boolean;
    /**
    * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled. **Note**: Infinite scroll cannot be used together with virtual scroll. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'hasInfiniteScroll': boolean;
    /**
    * Determines whether any item has been selected. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
    * @returns A boolean determining whether any item has been selected.
    * @memberof IonicSelectableComponent
    */
    'hasValue': () => Promise<boolean>;
    /**
    * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled. **Note**: Virtual scroll cannot be used together with infinite scroll. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'hasVirtualScroll': boolean;
    /**
    * Determines whether the component is disabled. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isdisabled).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'isDisabled': boolean;
    /**
    * Determines whether multiple items can be selected. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'isMultiple': boolean;
    /**
    * Determines whether Modal is opened. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
    * @default false
    * @readonly
    * @memberof IonicSelectableComponent
    */
    'isOpened': boolean;
    /**
    * Is set to true, the value of the component will be extracted from the itemValueField of the objects. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#value).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'isValuePrimitive'?: boolean;
    /**
    * Item property to display, e.g, `'name'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'itemTextField': string;
    /**
    * Item property to use as a unique identifier, e.g, `'id'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'itemValueField': string;
    /**
    * A list of items. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
    * @default []
    * @memberof IonicSelectableComponent
    */
    'items': any[];
    /**
    * Modal CSS class. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'modalCssClass': string;
    /**
    * Modal enter animation. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'modalEnterAnimation': AnimationBuilder;
    /**
    * Modal leave animation. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'modalLeaveAnimation': AnimationBuilder;
    /**
    * The mode determines which platform styles to use.
    */
    'mode'?: "ios" | "md";
    /**
    * The name of the control, which is submitted with the form data. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#name).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'name': string;
    /**
    * A placeholder. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'placeholder'?: string | null;
    /**
    * Determines whether multiple items can be selected. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#selectedText).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'selectedText'?: string | null;
    /**
    * Determines whether Modal should be closed when backdrop is clicked. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
    * @default true
    * @memberof IonicSelectableComponent
    */
    'shouldBackdropClose': boolean;
    /**
    * Text of [Ionic Label](https://ionicframework.com/docs/api/label). See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
    * @readonly
    * @default null
    * @memberof IonicSelectableComponent
    */
    'titleText': string;
    /**
    * The value of the component. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#value).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'value'?: any | null;
  }
  interface IonicSelectableModal {}
}

declare global {


  interface HTMLIonicSelectableElement extends Components.IonicSelectable, HTMLStencilElement {}
  var HTMLIonicSelectableElement: {
    prototype: HTMLIonicSelectableElement;
    new (): HTMLIonicSelectableElement;
  };

  interface HTMLIonicSelectableModalElement extends Components.IonicSelectableModal, HTMLStencilElement {}
  var HTMLIonicSelectableModalElement: {
    prototype: HTMLIonicSelectableModalElement;
    new (): HTMLIonicSelectableModalElement;
  };
  interface HTMLElementTagNameMap {
    'ionic-selectable': HTMLIonicSelectableElement;
    'ionic-selectable-modal': HTMLIonicSelectableModalElement;
  }
}

declare namespace LocalJSX {
  interface IonicSelectable {
    /**
    * Close button text. The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
    * @default 'Cancel'
    * @memberof IonicSelectableComponent
    */
    'closeButtonText'?: string;
    /**
    * Confirm button text. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
    * @default 'OK'
    * @memberof IonicSelectableComponent
    */
    'confirmButtonText'?: string;
    /**
    * Group property to display, e.g. `'country.name'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'groupTextField'?: string;
    /**
    * Group property to use as a unique identifier to group items, e.g. `'country.id'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'groupValueField'?: string;
    /**
    * Determines whether Confirm button is visible for single selection. By default Confirm button is visible only for multiple selection. **Note**: It is always true for multiple selection and cannot be changed. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'hasConfirmButton'?: boolean;
    /**
    * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled. **Note**: Infinite scroll cannot be used together with virtual scroll. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'hasInfiniteScroll'?: boolean;
    /**
    * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled. **Note**: Virtual scroll cannot be used together with infinite scroll. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'hasVirtualScroll'?: boolean;
    /**
    * Determines whether the component is disabled. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isdisabled).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'isDisabled'?: boolean;
    /**
    * Determines whether multiple items can be selected. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'isMultiple'?: boolean;
    /**
    * Determines whether Modal is opened. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
    * @default false
    * @readonly
    * @memberof IonicSelectableComponent
    */
    'isOpened'?: boolean;
    /**
    * Is set to true, the value of the component will be extracted from the itemValueField of the objects. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#value).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'isValuePrimitive'?: boolean;
    /**
    * Item property to display, e.g, `'name'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'itemTextField'?: string;
    /**
    * Item property to use as a unique identifier, e.g, `'id'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'itemValueField'?: string;
    /**
    * A list of items. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
    * @default []
    * @memberof IonicSelectableComponent
    */
    'items'?: any[];
    /**
    * Modal CSS class. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'modalCssClass'?: string;
    /**
    * Modal enter animation. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'modalEnterAnimation'?: AnimationBuilder;
    /**
    * Modal leave animation. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'modalLeaveAnimation'?: AnimationBuilder;
    /**
    * The mode determines which platform styles to use.
    */
    'mode'?: "ios" | "md";
    /**
    * The name of the control, which is submitted with the form data. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#name).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'name'?: string;
    /**
    * Fires when loses focus. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onBlurred).
    * @memberof IonicSelectableComponent
    */
    'onBlurred'?: (event: CustomEvent<IIonicSelectableEvent>) => void;
    /**
    * Fires when item/s has been selected and Modal closed. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onChanged).
    * @memberof IonicSelectableComponent
    */
    'onChanged'?: (event: CustomEvent<IIonicSelectableEvent>) => void;
    /**
    * Fires when Modal has been closed. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
    * @memberof IonicSelectableComponent
    */
    'onClosed'?: (event: CustomEvent<IIonicSelectableEvent>) => void;
    /**
    * Fires when has focus See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onFocused).
    * @memberof IonicSelectableComponent
    */
    'onFocused'?: (event: CustomEvent<IIonicSelectableEvent>) => void;
    /**
    * Fires when Modal has been opened. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
    * @memberof IonicSelectableComponent
    */
    'onOpened'?: (event: CustomEvent<IIonicSelectableEvent>) => void;
    /**
    * A placeholder. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'placeholder'?: string | null;
    /**
    * Determines whether multiple items can be selected. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#selectedText).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'selectedText'?: string | null;
    /**
    * Determines whether Modal should be closed when backdrop is clicked. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
    * @default true
    * @memberof IonicSelectableComponent
    */
    'shouldBackdropClose'?: boolean;
    /**
    * Text of [Ionic Label](https://ionicframework.com/docs/api/label). See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
    * @readonly
    * @default null
    * @memberof IonicSelectableComponent
    */
    'titleText'?: string;
    /**
    * The value of the component. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#value).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'value'?: any | null;
  }
  interface IonicSelectableModal {
    'onSelectableModalDismiss'?: (event: CustomEvent<void>) => void;
  }

  interface IntrinsicElements {
    'ionic-selectable': IonicSelectable;
    'ionic-selectable-modal': IonicSelectableModal;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ionic-selectable': LocalJSX.IonicSelectable & JSXBase.HTMLAttributes<HTMLIonicSelectableElement>;
      'ionic-selectable-modal': LocalJSX.IonicSelectableModal & JSXBase.HTMLAttributes<HTMLIonicSelectableModalElement>;
    }
  }
}


