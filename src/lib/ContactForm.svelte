<script lang="ts">
    // import Fa from 'svelte-fa';
    // import {faStar} from '@fortawesome/free-solid-svg-icons';

    let name = '';
    let email = '';
    let message = '';
    let rating = 0;
    let turnstile_token = '';
    let hoverRating = 0;

    async function handleSubmit(e: Event) {
        e.preventDefault();
        const new_token = turnstile?.getResponse("#turnstile-container");
        const response = await fetch(import.meta.env.VITE_VALIDATION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'CF-TURNSTILE-TOKEN': new_token
            },
            body: JSON.stringify({name, email, message, rating})
        });
        name = '';
        email = '';
        message = ''
    }

    $: isFormValid = name && email && message && turnstile_token;

    const widgetId = turnstile?.ready(function () {
        turnstile.render("#turnstile-container", {
            sitekey: import.meta.env.VITE_TURNSTILE_KEY,
            callback: function (token) {
                console.log(token);
                turnstile_token = token;
            },
        });
    });
    console.log(widgetId);
</script>

<div class="section contact-section">
    <h2 class="gradient-text" style="max-width: 600px; margin: 2rem auto;">DM me</h2>
    <form on:submit={handleSubmit} class="contact-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input
                    type="text"
                    id="name"
                    bind:value={name}
                    required
                    placeholder="Your Name"
            />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input
                    type="email"
                    id="email"
                    bind:value={email}
                    required
                    placeholder="your@email.com"
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                    id="message"
                    bind:value={message}
                    required
                    placeholder="Your message here..."
                    rows="4"
            ></textarea>
        </div>

        <!--    <div class="rating-container">-->
        <!--      <p>¿Qué te parece mi portfolio?</p>-->
        <!--      <div class="stars"-->
        <!--        on:mouseleave={() => (hoverRating = 0)}>-->
        <!--        {#each Array(5) as _, i}-->
        <!--          <button-->
        <!--            type="button"-->
        <!--            class="star-btn"-->
        <!--            on:mouseover={() => (hoverRating = i + 1)}-->
        <!--            on:click={() => (rating = i + 1)}-->
        <!--          >-->
        <!--            <Fa-->
        <!--              icon={faStar}-->
        <!--              class={hoverRating || rating > i ? 'star-active' : 'star-inactive'}-->
        <!--            />-->
        <!--          </button>-->
        <!--        {/each}-->
        <!--      </div>-->
        <!--    </div>-->
        <div
                id="turnstile-container"
                data-sitekey={import.meta.env.VITE_TURNSTILE_KEY}
                data-callback="javascriptCallback"
                style="display: flex; justify-content: center; margin-bottom: 1.5rem;"
        ></div>
        <button type="submit" class="submit-btn" disabled={!isFormValid}>
            Enviar mensaje
        </button>
    </form>
</div>

<style>
    .contact-section {
        background: linear-gradient(135deg, rgba(70, 53, 177, 0.05), rgba(183, 113, 229, 0.05));
    }

    .contact-form {
        max-width: 600px;
        margin: 2rem auto;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text);
        font-weight: 500;
    }

    input, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid rgba(70, 53, 177, 0.1);
        border-radius: 0.5rem;
        background: white;
        transition: all 0.3s ease;
    }

    input:focus, textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(70, 53, 177, 0.1);
    }

    /*.rating-container {*/
    /*  margin: 1.5rem 0;*/
    /*  text-align: center;*/
    /*}*/

    /*.stars {*/
    /*  display: flex;*/
    /*  gap: 0.5rem;*/
    /*  justify-content: center;*/
    /*  margin-top: 0.5rem;*/
    /*}*/

    /*.star-btn {*/
    /*  background: none;*/
    /*  border: none;*/
    /*  cursor: pointer;*/
    /*  font-size: 1.5rem;*/
    /*  padding: 0.25rem;*/
    /*  transition: transform 0.2s ease;*/
    /*}*/

    /*.star-btn:hover {*/
    /*  transform: scale(1.1);*/
    /*}*/

    /*.star-active {*/
    /*  color: var(--accent);*/
    /*}*/

    /*.star-inactive {*/
    /*  color: #ccc;*/
    /*}*/

    .submit-btn {
        width: 100%;
        padding: 1rem;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
        background: var(--secondary);
        transform: translateY(-2px);
    }

    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
</style>