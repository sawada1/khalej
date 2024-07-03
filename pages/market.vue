<template>
    <div class="container market-page" style="min-height: 100vh;">
            <div class="text-page">
                <div class="breadline">
                    <span>{{ $t('home') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.99998 13.28L5.65331 8.9333C5.13998 8.41997 5.13998 7.57997 5.65331 7.06664L9.99998 2.71997" stroke="#A7B9D0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <span> {{ $t('market') }} </span>
                </div>
                <div>
                    <h1 class="title">
                        {{ $t('market') }}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" viewBox="0 0 50 3" fill="none">
  <rect x="11.9048" width="38.0952" height="3.00022" rx="1.50011" fill="#2D9596"/>
  <rect opacity="0.9" width="7.14286" height="3.00022" rx="1.50011" fill="#2D9596"/>
</svg>
                </div>
            </div>

            <brands></brands>
    </div>
</template>