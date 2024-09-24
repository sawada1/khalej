<template lang="">
    <div>
        <ClientOnly>
      <div
        v-if="mainSlider"
        v-html="mainSlider"
        style="margin-top: 0px; direction: ltr;"
      ></div>
    </ClientOnly>
    </div>
</template>
<script setup>
import axios from "axios";
    const { locale } = useI18n();
    let lang = ref(locale);
    let pending = ref(false);
    let url = getUrl();
    let mainSlider = ref("");

    const getHead = async ()=>{
        const { data } = await axios.get('https://slider.webstdy.com/RevSliderEmbedderheadIncludes.php');
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        const links = [...doc.querySelectorAll('link')];
        const scripts = [...doc.querySelectorAll('script')];
 
        const headLinks = links.map(link => ({
          rel: link.getAttribute('rel'),
          href: link.getAttribute('href'),
          type: link.getAttribute('type'),
          media: link.getAttribute('media'),
        }));

        const headScripts = scripts.map(script => ({
          type: script.getAttribute('type'),
          src: script.getAttribute('src'),
          async: script.hasAttribute('async') ? true : false,
        }));
        var $ = jQuery.noConflict();
        useHead({
          link: headLinks,
          script: headScripts,
        });
    }
    const getSlider = async () => {
      // eval("var $ = jQuery.noConflict();");
      getHead();
      try {
        const additionalContent = await axios.get('https://slider.webstdy.com/RevSliderEmbedderputRevSlider.php?slide=alkathiri_ar');
        // Extract script tags
        if (additionalContent.status == 200) {
          const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
          const scriptTags = (
            additionalContent.data.match(scriptTagRegex) || []
          ).join("");

          let AllscriptTags = scriptTags.match(
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
          );
          var combinedContent = "";
          if (AllscriptTags) {
            for (var i = 0; i < AllscriptTags.length; i++) {
              var content = AllscriptTags[i].replace(/<\/?script[^>]*>/g, "");
              combinedContent += content;
            }
          }

          //  Remove script tags from the content
          const removedScripts = additionalContent.data.replace(
            scriptTagRegex,
            ""
          );

          // Extract link tags
          const linkTags = removedScripts.match(/<link\b[^>]*>/gm) || [];
          const linkFiles = linkTags.map((tag) => {
            const linkDoc = document.implementation.createHTMLDocument();
            linkDoc.documentElement.innerHTML = tag;
            return linkDoc.querySelector('link[rel="stylesheet"][href]').href;
          });

          //  Remove link tags from the content
          const sanitizedData = removedScripts.replace(/<link\b[^>]*>/gm, "");

          //  Append link files to the <head> section using useHead
          useHead(
            {
              link: linkFiles.map((href) => ({
                href,
                rel: "stylesheet",
                property: "stylesheet",
                type: "text/css",
                media: "all",
              })),
            },
            { once: true }
          );

          //add the content to the variable

          if (combinedContent != "") {
            const script = document.createElement("script");

            mainSlider.value = sanitizedData;
            script.innerHTML = combinedContent;
            setTimeout(() => {
            //   eval(combinedContent);
              document.body.appendChild(script);
            }, 100);
          }
        }
      } catch (error) {
        console.error("Error fetching or processing slider data:", error);
      }
    };

    onMounted(() => {
      //getSripts();
      setTimeout(() => {
          getSlider();
      }, 500);
      
    });
</script>
<style lang="">
    
</style>