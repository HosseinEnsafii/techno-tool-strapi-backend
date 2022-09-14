// path: ./src/plugins/wysiwyg/admin/src/components/Editor/index.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box } from "@strapi/design-system/Box";

const Wrapper = styled(Box)`
  .ck-editor__main {
    min-height: ${200 / 16}em;
    > div {
      min-height: ${200 / 16}em;
    }
    // Since Strapi resets css styles, it can be configured here (h2, h3, strong, i, ...)
  }
`;

const configuration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
    ],
  },
  language: "fa",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

const Editor = ({ onChange, name, value, disabled }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        disabled={disabled}
        config={configuration}
        data={value || ""}
        onReady={(editor) => editor.setData(value || "")}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.defaultProps = {
  value: "",
  disabled: false,
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Editor;

/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
//  import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
//  import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
//  import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
//  import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
//  import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
//  import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox.js';
//  import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
//  import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
//  import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
//  import Image from '@ckeditor/ckeditor5-image/src/image.js';
//  import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
//  import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
//  import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
//  import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
//  import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
//  import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
//  import Link from '@ckeditor/ckeditor5-link/src/link.js';
//  import List from '@ckeditor/ckeditor5-list/src/list.js';
//  import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
//  import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
//  import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
//  import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting.js';
//  import Table from '@ckeditor/ckeditor5-table/src/table.js';
//  import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
//  import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

//  class Editor extends ClassicEditor {}

//  // Plugins to include in the build.
//  Editor.builtinPlugins = [
//    Alignment,
//    Autoformat,
//    BlockQuote,
//    Bold,
//    CKBox,
//    CloudServices,
//    Essentials,
//    Heading,
//    Image,
//    ImageCaption,
//    ImageStyle,
//    ImageToolbar,
//    ImageUpload,
//    Indent,
//    Italic,
//    Link,
//    List,
//    MediaEmbed,
//    Paragraph,
//    PasteFromOffice,
//    PictureEditing,
//    Table,
//    TableToolbar,
//    TextTransformation
//  ];

//  // Editor configuration.
//  Editor.defaultConfig = {
//    toolbar: {
//      items: [
//        'heading',
//        '|',
//        'bold',
//        'italic',
//        'link',
//        'bulletedList',
//        'numberedList',
//        '|',
//        'outdent',
//        'indent',
//        '|',
//        'imageUpload',
//        'blockQuote',
//        'insertTable',
//        'mediaEmbed',
//        'undo',
//        'redo'
//      ]
//    },
//    language: 'fa',
//    image: {
//      toolbar: [
//        'imageTextAlternative',
//        'imageStyle:inline',
//        'imageStyle:block',
//        'imageStyle:side'
//      ]
//    },
//    table: {
//      contentToolbar: [
//        'tableColumn',
//        'tableRow',
//        'mergeTableCells'
//      ]
//    }
//  };

//  export default Editor;
