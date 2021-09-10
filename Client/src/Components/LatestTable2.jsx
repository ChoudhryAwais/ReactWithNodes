import React, { useState } from "react";
import "./customtablestyle.css";
import { TreeView } from "@progress/kendo-react-treeview";
import "@progress/kendo-theme-bootstrap/dist/all.scss";

export const LatestTable2 = () => {
  const tree = [
    {
      text: "Furniture",
      expanded: false,
      items: [
        {
          text: "Tables & Chairs",
        },
        {
          text: "Sofas",
        },
        {
          text: "Occasional Furniture",
        },
      ],
    },
    {
      text: "Decor",
      items: [
        {
          text: "Bed Linen",
        },
        {
          text: "Curtains & Blinds",
        },
        {
          text: "Carpets",
        },
      ],
    },
  ];
  const onItemClick = (event) => {
    event.item.selected = !event.item.selected;
  };

  const onExpandChange = (event) => {
    event.item.expanded = !event.item.expanded;
  };

  return (
    <div>
      <TreeView
        data={tree}
        expandIcons={true}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
      />
      <div className="table-scroll">
        <table className="main-table">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3 with longer content</th>
              <th>Header 4 text</th>
              <th>Header 5</th>
              <th>Header 6</th>
              <th>Header 7</th>
              <th>Header 8</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>First top Column</th>
              <td>Cell conten test </td>
              <td>
                <a href="#">Cell content longer</a>
              </td>
              <td>Cell content with more content and more content Cell </td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>
                <a href="#">Cell content longer</a>
              </td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
            <tr>
              <th>Left Column</th>
              <td>Cell content</td>
              <td>Cell content longer</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
              <td>Cell content</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Footer 1</th>
              <td>Footer 2</td>
              <td>Footer 3</td>
              <td>Footer 4</td>
              <td>Footer 5</td>
              <td>Footer 6</td>
              <td>Footer 7</td>
              <td>Footer 8</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
