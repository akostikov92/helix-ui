/** @format */

class HTML5Element extends HTMLElement {
  render() {
    return html`
      <table>
        <tbody>
          <tr>
            <th style="width:25%">Tag</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><a href="tag_comment.asp">&lt;!--...--&gt;</a></td>
            <td>Defines a comment</td>
          </tr>
          <tr>
            <td><a href="tag_doctype.asp">&lt;!DOCTYPE&gt;</a>&nbsp;</td>
            <td>Defines the document type</td>
          </tr>
          <tr>
            <td><a href="tag_a.asp">&lt;a&gt;</a></td>
            <td>Defines a hyperlink</td>
          </tr>
          <tr>
            <td><a href="tag_abbr.asp">&lt;abbr&gt;</a></td>
            <td>Defines an abbreviation or an acronym</td>
          </tr>
          <tr>
            <td>
              <a href="tag_acronym.asp" class="notsupported">&lt;acronym&gt;</a>
            </td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use
                <a href="tag_abbr.asp">&lt;abbr&gt;</a> instead.<br /></span
              >Defines an acronym
            </td>
          </tr>
          <tr>
            <td><a href="tag_address.asp">&lt;address&gt;</a></td>
            <td>
              Defines contact information for the author/owner of a document
            </td>
          </tr>
          <tr>
            <td>
              <a href="tag_applet.asp" class="notsupported">&lt;applet&gt;</a>
            </td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use
                <a href="tag_embed.asp">&lt;embed&gt;</a> or
                <a href="tag_object.asp">&lt;object&gt;</a> instead.<br /></span
              >Defines an embedded applet
            </td>
          </tr>
          <tr>
            <td><a href="tag_area.asp">&lt;area&gt;</a></td>
            <td>Defines an area inside an image-map</td>
          </tr>
          <tr>
            <td class="html5badge">
              <a href="tag_article.asp">&lt;article&gt;</a>
            </td>
            <td>Defines an article</td>
          </tr>
          <tr>
            <td class="html5badge">
              <a href="tag_aside.asp">&lt;aside&gt;</a>
            </td>
            <td>Defines content aside from the page content</td>
          </tr>
          <tr>
            <td class="html5badge">
              <a href="tag_audio.asp">&lt;audio&gt;</a>
            </td>
            <td>Defines sound content</td>
          </tr>
          <tr>
            <td><a href="tag_b.asp">&lt;b&gt;</a></td>
            <td>Defines bold text</td>
          </tr>
          <tr>
            <td><a href="tag_base.asp">&lt;base&gt;</a></td>
            <td>
              Specifies the base URL/target for all relative URLs in a document
            </td>
          </tr>
          <tr>
            <td>
              <a href="tag_basefont.asp" class="notsupported"
                >&lt;basefont&gt;</a
              >
            </td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use CSS instead.<br /></span
              >Specifies a default color, size, and font for all text in a
              document
            </td>
          </tr>
          <tr>
            <td><a href="tag_bdi.asp">&lt;bdi&gt;</a></td>
            <td>
              Isolates a part of text that might be formatted in a different
              direction from other text outside it
            </td>
          </tr>
          <tr>
            <td><a href="tag_bdo.asp">&lt;bdo&gt;</a></td>
            <td>Overrides the current text direction</td>
          </tr>
          <tr>
            <td><a href="tag_big.asp" class="notsupported">&lt;big&gt;</a></td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use CSS instead.<br /></span
              >Defines big text
            </td>
          </tr>
          <tr>
            <td><a href="tag_blockquote.asp">&lt;blockquote&gt;</a></td>
            <td>Defines a section that is quoted from another source</td>
          </tr>
          <tr>
            <td><a href="tag_body.asp">&lt;body&gt;</a></td>
            <td>Defines the document's body</td>
          </tr>
          <tr>
            <td><a href="tag_br.asp">&lt;br&gt;</a></td>
            <td>Defines a single line break</td>
          </tr>
          <tr>
            <td><a href="tag_button.asp">&lt;button&gt;</a></td>
            <td>Defines a clickable button</td>
          </tr>
          <tr>
            <td><a href="tag_canvas.asp">&lt;canvas&gt;</a></td>
            <td>
              Used to draw graphics, on the fly, via scripting (usually
              JavaScript)
            </td>
          </tr>
          <tr>
            <td><a href="tag_caption.asp">&lt;caption&gt;</a></td>
            <td>Defines a table caption</td>
          </tr>
          <tr>
            <td>
              <a href="tag_center.asp" class="notsupported">&lt;center&gt;</a>
            </td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use CSS instead.<br /></span
              >Defines centered text
            </td>
          </tr>
          <tr>
            <td><a href="tag_cite.asp">&lt;cite&gt;</a></td>
            <td>Defines the title of a work</td>
          </tr>
          <tr>
            <td><a href="tag_code.asp">&lt;code&gt;</a></td>
            <td>Defines a piece of computer code</td>
          </tr>
          <tr>
            <td><a href="tag_col.asp">&lt;col&gt;</a></td>
            <td>
              Specifies column properties for each column within a
              &lt;colgroup&gt; element&nbsp;
            </td>
          </tr>
          <tr>
            <td><a href="tag_colgroup.asp">&lt;colgroup&gt;</a></td>
            <td>
              Specifies a group of one or more columns in a table for formatting
            </td>
          </tr>
          <tr>
            <td><a href="tag_data.asp">&lt;data&gt;</a></td>
            <td>Links the given content with a machine-readable translation</td>
          </tr>
          <tr>
            <td><a href="tag_datalist.asp">&lt;datalist&gt;</a></td>
            <td>Specifies a list of pre-defined options for input controls</td>
          </tr>
          <tr>
            <td><a href="tag_dd.asp">&lt;dd&gt;</a></td>
            <td>Defines a description/value of a term in a description list</td>
          </tr>
          <tr>
            <td><a href="tag_del.asp">&lt;del&gt;</a></td>
            <td>Defines text that has been deleted from a document</td>
          </tr>
          <tr>
            <td><a href="tag_details.asp">&lt;details&gt;</a></td>
            <td>Defines additional details that the user can view or hide</td>
          </tr>
          <tr>
            <td><a href="tag_dfn.asp">&lt;dfn&gt;</a></td>
            <td>Represents the defining instance of a term</td>
          </tr>
          <tr>
            <td><a href="tag_dialog.asp">&lt;dialog&gt;</a></td>
            <td>Defines a dialog box or window</td>
          </tr>
          <tr>
            <td><a href="tag_dir.asp" class="notsupported">&lt;dir&gt;</a></td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use
                <a href="tag_ul.asp">&lt;ul&gt;</a> instead.<br /></span
              >Defines a directory list
            </td>
          </tr>
          <tr>
            <td><a href="tag_div.asp">&lt;div&gt;</a></td>
            <td>Defines a section in a document</td>
          </tr>
          <tr>
            <td><a href="tag_dl.asp">&lt;dl&gt;</a></td>
            <td>Defines a description list</td>
          </tr>
          <tr>
            <td><a href="tag_dt.asp">&lt;dt&gt;</a></td>
            <td>Defines a term/name in a description list</td>
          </tr>
          <tr>
            <td><a href="tag_em.asp">&lt;em&gt;</a></td>
            <td>Defines emphasized text&nbsp;</td>
          </tr>
          <tr>
            <td><a href="tag_embed.asp">&lt;embed&gt;</a></td>
            <td>Defines a container for an external (non-HTML) application</td>
          </tr>
          <tr>
            <td><a href="tag_fieldset.asp">&lt;fieldset&gt;</a></td>
            <td>Groups related elements in a form</td>
          </tr>
          <tr>
            <td class="html5badge">
              <a href="tag_figcaption.asp">&lt;figcaption&gt;</a>
            </td>
            <td>Defines a caption for a &lt;figure&gt; element</td>
          </tr>
          <tr>
            <td class="html5badge">
              <a href="tag_figure.asp">&lt;figure&gt;</a>
            </td>
            <td>Specifies self-contained content</td>
          </tr>
          <tr>
            <td>
              <a href="tag_font.asp" class="notsupported">&lt;font&gt;</a>
            </td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use CSS instead.<br /></span
              >Defines font, color, and size for text
            </td>
          </tr>
          <tr>
            <td><a href="tag_footer.asp">&lt;footer&gt;</a></td>
            <td>Defines a footer for a document or section</td>
          </tr>
          <tr>
            <td><a href="tag_form.asp">&lt;form&gt;</a></td>
            <td>Defines an HTML form for user input</td>
          </tr>
          <tr>
            <td>
              <a href="tag_frame.asp" class="notsupported">&lt;frame&gt;</a>
            </td>
            <td>
              <span class="deprecated">Not supported in HTML5.<br /></span
              >Defines a window (a frame) in a frameset
            </td>
          </tr>
          <tr>
            <td>
              <a href="tag_frameset.asp" class="notsupported"
                >&lt;frameset&gt;</a
              >
            </td>
            <td>
              <span class="deprecated">Not supported in HTML5.<br /></span
              >Defines a set of frames
            </td>
          </tr>
          <tr>
            <td><a href="tag_hn.asp">&lt;h1&gt; to &lt;h6&gt;</a></td>
            <td>Defines HTML headings</td>
          </tr>
          <tr>
            <td><a href="tag_head.asp">&lt;head&gt;</a></td>
            <td>Defines information about the document</td>
          </tr>
          <tr>
            <td><a href="tag_header.asp">&lt;header&gt;</a></td>
            <td>Defines a header for a document or section</td>
          </tr>
          <tr>
            <td><a href="tag_hr.asp">&lt;hr&gt;</a></td>
            <td>Defines a thematic change in the content</td>
          </tr>
          <tr>
            <td><a href="tag_html.asp">&lt;html&gt;</a></td>
            <td>Defines the root of an HTML document</td>
          </tr>
          <tr>
            <td><a href="tag_i.asp">&lt;i&gt;</a></td>
            <td>Defines a part of text in an alternate voice or mood</td>
          </tr>
          <tr>
            <td><a href="tag_iframe.asp">&lt;iframe&gt;</a></td>
            <td>Defines an inline frame</td>
          </tr>
          <tr>
            <td><a href="tag_img.asp">&lt;img&gt;</a></td>
            <td>Defines an image</td>
          </tr>
          <tr>
            <td><a href="tag_input.asp">&lt;input&gt;</a></td>
            <td>Defines an input control</td>
          </tr>
          <tr>
            <td><a href="tag_ins.asp">&lt;ins&gt;</a></td>
            <td>Defines a text that has been inserted into a document</td>
          </tr>
          <tr>
            <td><a href="tag_kbd.asp">&lt;kbd&gt;</a></td>
            <td>Defines keyboard input</td>
          </tr>
          <tr>
            <td><a href="tag_label.asp">&lt;label&gt;</a></td>
            <td>Defines a label&nbsp;for an &lt;input&gt; element</td>
          </tr>
          <tr>
            <td><a href="tag_legend.asp">&lt;legend&gt;</a></td>
            <td>Defines a caption for a &lt;fieldset&gt; element</td>
          </tr>
          <tr>
            <td><a href="tag_li.asp">&lt;li&gt;</a></td>
            <td>Defines a list item</td>
          </tr>
          <tr>
            <td><a href="tag_link.asp">&lt;link&gt;</a></td>
            <td>
              Defines the relationship between a document and an external
              resource (most used to link to style sheets)
            </td>
          </tr>
          <tr>
            <td><a href="tag_main.asp">&lt;main&gt;</a></td>
            <td>Specifies the main content of a document</td>
          </tr>
          <tr>
            <td><a href="tag_map.asp">&lt;map&gt;</a></td>
            <td>Defines a client-side image-map</td>
          </tr>
          <tr>
            <td><a href="tag_mark.asp">&lt;mark&gt;</a></td>
            <td>Defines marked/highlighted text</td>
          </tr>
          <tr>
            <td><a href="tag_meta.asp">&lt;meta&gt;</a></td>
            <td>Defines metadata about an HTML document</td>
          </tr>
          <tr>
            <td><a href="tag_meter.asp">&lt;meter&gt;</a></td>
            <td>Defines a scalar measurement within a known range (a gauge)</td>
          </tr>
          <tr>
            <td><a href="tag_nav.asp">&lt;nav&gt;</a></td>
            <td>Defines navigation links</td>
          </tr>
          <tr>
            <td>
              <a href="tag_noframes.asp" class="notsupported"
                >&lt;noframes&gt;</a
              >
            </td>
            <td>
              <span class="deprecated">Not supported in HTML5.<br /></span
              >Defines an alternate content for users that do not support frames
            </td>
          </tr>
          <tr>
            <td><a href="tag_noscript.asp">&lt;noscript&gt;</a></td>
            <td>
              Defines an alternate content for users that do not support
              client-side scripts
            </td>
          </tr>
          <tr>
            <td><a href="tag_object.asp">&lt;object&gt;</a></td>
            <td>Defines an embedded object</td>
          </tr>
          <tr>
            <td><a href="tag_ol.asp">&lt;ol&gt;</a></td>
            <td>Defines an ordered list</td>
          </tr>
          <tr>
            <td><a href="tag_optgroup.asp">&lt;optgroup&gt;</a></td>
            <td>Defines a group of related options in a drop-down list</td>
          </tr>
          <tr>
            <td><a href="tag_option.asp">&lt;option&gt;</a></td>
            <td>Defines an option in a drop-down list</td>
          </tr>
          <tr>
            <td><a href="tag_output.asp">&lt;output&gt;</a></td>
            <td>Defines the result of a calculation</td>
          </tr>
          <tr>
            <td><a href="tag_p.asp">&lt;p&gt;</a></td>
            <td>Defines a paragraph</td>
          </tr>
          <tr>
            <td><a href="tag_param.asp">&lt;param&gt;</a></td>
            <td>Defines a parameter for an object</td>
          </tr>
          <tr>
            <td><a href="tag_picture.asp">&lt;picture&gt;</a></td>
            <td>Defines a container for multiple image resources</td>
          </tr>
          <tr>
            <td><a href="tag_pre.asp">&lt;pre&gt;</a></td>
            <td>Defines preformatted text</td>
          </tr>
          <tr>
            <td><a href="tag_progress.asp">&lt;progress&gt;</a></td>
            <td>Represents the progress of a task</td>
          </tr>
          <tr>
            <td><a href="tag_q.asp">&lt;q&gt;</a></td>
            <td>Defines a short quotation</td>
          </tr>
          <tr>
            <td><a href="tag_rp.asp">&lt;rp&gt;</a></td>
            <td>
              Defines what to show in browsers that do not support ruby
              annotations
            </td>
          </tr>
          <tr>
            <td><a href="tag_rt.asp">&lt;rt&gt;</a></td>
            <td>
              Defines an explanation/pronunciation of characters (for East Asian
              typography)
            </td>
          </tr>
          <tr>
            <td><a href="tag_ruby.asp">&lt;ruby&gt;</a></td>
            <td>Defines a ruby annotation (for East Asian typography)</td>
          </tr>
          <tr>
            <td><a href="tag_s.asp">&lt;s&gt;</a></td>
            <td>Defines text that is no longer correct</td>
          </tr>
          <tr>
            <td><a href="tag_samp.asp">&lt;samp&gt;</a></td>
            <td>Defines sample output from a computer program</td>
          </tr>
          <tr>
            <td><a href="tag_script.asp">&lt;script&gt;</a></td>
            <td>Defines a client-side script</td>
          </tr>
          <tr>
            <td><a href="tag_section.asp">&lt;section&gt;</a></td>
            <td>Defines a section in a document</td>
          </tr>
          <tr>
            <td><a href="tag_select.asp">&lt;select&gt;</a></td>
            <td>Defines a drop-down list</td>
          </tr>
          <tr>
            <td><a href="tag_small.asp">&lt;small&gt;</a></td>
            <td>Defines smaller text</td>
          </tr>
          <tr>
            <td><a href="tag_source.asp">&lt;source&gt;</a></td>
            <td>
              Defines multiple media resources for media elements (&lt;video&gt;
              and &lt;audio&gt;)
            </td>
          </tr>
          <tr>
            <td><a href="tag_span.asp">&lt;span&gt;</a></td>
            <td>Defines a section in a document</td>
          </tr>
          <tr>
            <td>
              <a href="tag_strike.asp" class="notsupported">&lt;strike&gt;</a>
            </td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use
                <a href="tag_del.asp">&lt;del&gt;</a> or
                <a href="tag_s.asp">&lt;s&gt;</a> instead.<br /></span
              >Defines strikethrough text
            </td>
          </tr>
          <tr>
            <td><a href="tag_strong.asp">&lt;strong&gt;</a></td>
            <td>Defines important text</td>
          </tr>
          <tr>
            <td><a href="tag_style.asp">&lt;style&gt;</a></td>
            <td>Defines style information for a document</td>
          </tr>
          <tr>
            <td><a href="tag_sub.asp">&lt;sub&gt;</a></td>
            <td>Defines subscripted text</td>
          </tr>
          <tr>
            <td><a href="tag_summary.asp">&lt;summary&gt;</a></td>
            <td>Defines a visible heading for a &lt;details&gt; element</td>
          </tr>
          <tr>
            <td><a href="tag_sup.asp">&lt;sup&gt;</a></td>
            <td>Defines superscripted text</td>
          </tr>
          <tr>
            <td><a href="tag_svg.asp">&lt;svg&gt;</a></td>
            <td>Defines a container for SVG graphics</td>
          </tr>
          <tr>
            <td><a href="tag_table.asp">&lt;table&gt;</a></td>
            <td>Defines a table</td>
          </tr>
          <tr>
            <td><a href="tag_tbody.asp">&lt;tbody&gt;</a></td>
            <td>Groups the body content in a table</td>
          </tr>
          <tr>
            <td><a href="tag_td.asp">&lt;td&gt;</a></td>
            <td>Defines a cell in a table</td>
          </tr>
          <tr>
            <td><a href="tag_template.asp">&lt;template&gt;</a></td>
            <td>Defines a template</td>
          </tr>
          <tr>
            <td><a href="tag_textarea.asp">&lt;textarea&gt;</a></td>
            <td>Defines a multiline input control (text area)</td>
          </tr>
          <tr>
            <td><a href="tag_tfoot.asp">&lt;tfoot&gt;</a></td>
            <td>Groups the footer content in a table</td>
          </tr>
          <tr>
            <td><a href="tag_th.asp">&lt;th&gt;</a></td>
            <td>Defines a header cell in a table</td>
          </tr>
          <tr>
            <td><a href="tag_thead.asp">&lt;thead&gt;</a></td>
            <td>Groups the header content in a table</td>
          </tr>
          <tr>
            <td><a href="tag_time.asp">&lt;time&gt;</a></td>
            <td>Defines a date/time</td>
          </tr>
          <tr>
            <td><a href="tag_title.asp">&lt;title&gt;</a></td>
            <td>Defines a title for the document</td>
          </tr>
          <tr>
            <td><a href="tag_tr.asp">&lt;tr&gt;</a></td>
            <td>Defines a row in a table</td>
          </tr>
          <tr>
            <td><a href="tag_track.asp">&lt;track&gt;</a></td>
            <td>
              Defines text tracks for media elements (&lt;video&gt; and
              &lt;audio&gt;)
            </td>
          </tr>
          <tr>
            <td><a class="notsupported" href="tag_tt.asp">&lt;tt&gt;</a></td>
            <td>
              <span class="deprecated"
                >Not supported in HTML5. Use CSS instead.<br /></span
              >Defines teletype text
            </td>
          </tr>
          <tr>
            <td><a href="tag_u.asp">&lt;u&gt;</a></td>
            <td>
              Defines text that should be stylistically different from normal
              text
            </td>
          </tr>
          <tr>
            <td><a href="tag_ul.asp">&lt;ul&gt;</a></td>
            <td>Defines an unordered list</td>
          </tr>
          <tr>
            <td><a href="tag_var.asp">&lt;var&gt;</a></td>
            <td>Defines a variable</td>
          </tr>
          <tr>
            <td><a href="tag_video.asp">&lt;video&gt;</a></td>
            <td>Defines a video or movie</td>
          </tr>
          <tr>
            <td><a href="tag_wbr.asp">&lt;wbr&gt;</a></td>
            <td>Defines a possible line-break</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

customElements.define('html-elements', HTML5Element);
