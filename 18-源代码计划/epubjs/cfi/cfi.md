<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-23 17:10:14
 * @LastEditTime: 2023-02-23 19:52:09
 * @LastEditors: xlm
-->


# EPUB Canonical Fragment Identifiers 1.1

# https://idpf.org/epub/linking/cfi/epub-cfi.html


# A Canonical Fragment Identifier (CFI) consists of an initial sequence epubcfi that identifies this particular reference method, and a parenthesized path or range. A path is built up as a sequence of structural steps to reference a location. A range is a path followed by two local (or relative) paths that identify the start and end of the range.


# 规范片段标识符(CFI)由标识特定引用方法的初始序列epubcfi和带圆括号的路径或范围组成。 路径被构建为引用位置的一系列结构步骤。 范围是一个路径，后面跟着两条本地(或相对)路径，它们标识范围的开始和结束。 


#

cfi: "epubcfi(/6/216!/4/4/2/2/6/2[dkaudio_id_04099-02]/1:0)"

EPUBCFI是一种用于定位电子书内部内容的格式。上面的代码指的是定位到第6章，216行，第4个段落的第4个句子的第2个单词的第2个字符，并且该字符具有唯一标识符“dkaudio_id_04099-02”。


# 在路径和范围中，对数字和整数使用时应满足以下规则：

数值和整数中不允许前导零，以确保唯一性

数值小数部分中不允许后导零


```js

function toString() {
		var cfiString = "epubcfi(";

		cfiString += this.segmentString(this.base);

		cfiString += "!";
		cfiString += this.segmentString(this.path);

		// Add Range, if present
		if(this.range && this.start) {
			cfiString += ",";
			cfiString += this.segmentString(this.start);
		}

		if(this.range && this.end) {
			cfiString += ",";
			cfiString += this.segmentString(this.end);
		}

		cfiString += ")";

		return cfiString;
	}

console.log("当前位置:", rendition.currentLocation());

/**
	 * Creates a Rendition#locationRange from location
	 * passed by the Manager
	 * @returns {displayedLocation}
	 * @private
	 */
	located(location){
		if (!location.length) {
			return {};
		}
		let start = location[0];
		let end = location[location.length-1];

		let located = {
			start: {
				index: start.index,
				href: start.href,
				cfi: start.mapping.start,
				displayed: {
					page: start.pages[0] || 1,
					total: start.totalPages
				}
			},
			end: {
				index: end.index,
				href: end.href,
				cfi: end.mapping.end,
				displayed: {
					page: end.pages[end.pages.length-1] || 1,
					total: end.totalPages
				}
			}
		};

		let locationStart = this.book.locations.locationFromCfi(start.mapping.start);
		let locationEnd = this.book.locations.locationFromCfi(end.mapping.end);

		if (locationStart != null) {
			located.start.location = locationStart;
			located.start.percentage = this.book.locations.percentageFromLocation(locationStart);
		}
		if (locationEnd != null) {
			located.end.location = locationEnd;
			located.end.percentage = this.book.locations.percentageFromLocation(locationEnd);
		}

		let pageStart = this.book.pageList.pageFromCfi(start.mapping.start);
		let pageEnd = this.book.pageList.pageFromCfi(end.mapping.end);

		if (pageStart != -1) {
			located.start.page = pageStart;
		}
		if (pageEnd != -1) {
			located.end.page = pageEnd;
		}

		if (end.index === this.book.spine.last().index &&
				located.end.displayed.page >= located.end.displayed.total) {
			located.atEnd = true;
		}

		if (start.index === this.book.spine.first().index &&
				located.start.displayed.page === 1) {
			located.atStart = true;
		}

		return located;
	}
```