<html>
<body>
  <ul>
    {{#each data}}
    <li>
      <span class="clr" style="background:{{clr1}};"></span>
      <span class="clr" style="background:{{clr2}};"></span>
      <span class="txt">{{clr1}}<br>{{clr2}}<br>{{distance}}</span>
    </li>
    {{/each}}
  </ul>

  <style type="text/css">
    body {
      font: normal 11px monospace;
    }
    ul {
      padding: 0;
      list-style: none;
    }
    span {
      display: inline-block;
      margin: .4em .2em;
      height: 50px;
      vertical-align: middle;
    }
    .clr {
      border: 1px solid #000;
      width: 50px;
    }
  </style>
</body>
</html>
