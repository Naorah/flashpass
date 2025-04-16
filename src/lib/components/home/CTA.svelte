<script>
  import { _ } from '$lib/lang/i18n';
</script>
<!-- CTA renforcé -->
<section class="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900 text-white">
  <div class="container max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      {$_('cta.title')}
    </h2>
    <p class="text-xl mb-8 max-w-2xl mx-auto">
      {$_('cta.description')}
    </p>
    <a href="/flash" class="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      {$_('cta.button')}
    </a>
    <p class="mt-6 text-indigo-200">
      {$_('cta.trust')}
    </p>
  </div>
</section>