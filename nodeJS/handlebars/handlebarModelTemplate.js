<products>
  {{#each this}}
  <product>
    <baseId>{{baseId}}</baseId>
    <isActive>{{isActive}}</isActive>
    <contentType>
      {{#each contentType}}
      <contentTypeValue>{{value}}</contentTypeValue>
      {{/each}}
    </contentType>
    <features>
      {{#each feature}}
      <feature>{{this}}</feature>
      {{/each}}
    </features>
    <searchTerms>
      {{#each searchTerms}}
      <searchTermValue>{{this}}</searchTermValue>
      {{/each}}
    </searchTerms>
    <childProducts>
      <childProduct>
        {{#each this.childProducts}}
        <baseId>{{baseId}}</baseId>
        <isActive>{{isActive}}</isActive>
        <features>
          {{#each this.feature}}
          <feature>{{this}}</feature>
          {{/each}}
        </features>
        <searchTerms>
          {{#each this.searchTerms}}
          <searchTermValue>{{this}}</searchTermValue>
          {{/each}}
        </searchTerms>
        {{/each}}
      </childProduct>
    </childProducts>
  </product>
  {{/each}}
</products>
