<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-01 11:31:38
 * @LastEditTime: 2023-03-01 11:35:49
 * @LastEditors: xlm
-->


```js

export function parse (markup, mime, forceXMLDom) {
  var doc;
  var Parser;

  if (typeof DOMParser === "undefined" || forceXMLDom) {
    Parser = XMLDOMParser;
  } else {
    Parser = DOMParser;
  }

  // Remove byte order mark before parsing
  // https://www.w3.org/International/questions/qa-byte-order-mark
  if (markup.charCodeAt(0) === 0xFEFF) {
    markup = markup.slice(1);
  }

  doc = new Parser().parseFromString(markup, mime);

  return doc;
}



parseManifest (manifestXml) {
    var manifest = {};

    //-- Turn items into an array
    // var selected = manifestXml.querySelectorAll("item");
    var selected = qsa(manifestXml, "item");
    var items = Array.prototype.slice.call(selected);

    //-- Create an object with the id as key
    items.forEach(function (item) {
      var id = item.getAttribute("id"),
        href = item.getAttribute("href") || "",
        type = item.getAttribute("media-type") || "",
        overlay = item.getAttribute("media-overlay") || "",
        properties = item.getAttribute("properties") || "";

      manifest[id] = {
        "href": href,
        // "url" : href,
        "type": type,
        "overlay": overlay,
        "properties": properties.length ? properties.split(" ") : []
      };

    });

    return manifest;

  }



    parseMetadata (xml) {
    var metadata = {};

    metadata.title = this.getElementText(xml, "title");
    metadata.creator = this.getElementText(xml, "creator");
    metadata.description = this.getElementText(xml, "description");

    metadata.pubdate = this.getElementText(xml, "date");

    metadata.publisher = this.getElementText(xml, "publisher");

    metadata.identifier = this.getElementText(xml, "identifier");
    metadata.language = this.getElementText(xml, "language");
    metadata.rights = this.getElementText(xml, "rights");

    metadata.modified_date = this.getPropertyText(xml, "dcterms:modified");

    metadata.layout = this.getPropertyText(xml, "rendition:layout");
    metadata.orientation = this.getPropertyText(xml, "rendition:orientation");
    metadata.flow = this.getPropertyText(xml, "rendition:flow");
    metadata.viewport = this.getPropertyText(xml, "rendition:viewport");
    metadata.media_active_class = this.getPropertyText(xml, "media:active-class");
    metadata.spread = this.getPropertyText(xml, "rendition:spread");
    // metadata.page_prog_dir = packageXml.querySelector("spine").getAttribute("page-progression-direction");

    return metadata;
  }
```