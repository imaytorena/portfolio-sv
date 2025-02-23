<script lang="ts">
    // import Fa from 'svelte-fa';
    // import {faStar} from '@fortawesome/free-solid-svg-icons';
    import { showToast } from "./external/toast";

    let name = "";
    let email = "";
    let message = ""; 
    let turnstile_token = "";
    let alreadyUsed = false;

    async function handleSubmit(e: Event) {
        e.preventDefault();

        try {
            const new_token = turnstile?.getResponse("#turnstile-container");
            const source = await fetch(import.meta.env.VITE_VALIDATION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "cf-turnstile-token": new_token,
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
            });
            const response = await source.json(); 
            showToast(
                response?.message ||
                    `Message ${!source.ok ? "was not " : ""}sent successfully`,
                source.ok ? "success" : "error",
            );
            name = "";
            email = "";
            message = "";
            alreadyUsed = true;
        } catch (error) {
            showToast(error?.message || "Something went wrong");
        }
    }

    $: isFormValid =
        name && email && message && turnstile_token;

    const widgetId = turnstile?.ready(function () {
        turnstile.render("#turnstile-container", {
            sitekey: import.meta.env.VITE_TURNSTILE_KEY,
            callback: function (token) {
                console.log(token);
                turnstile_token = token;
            },
        });
    }); 
</script>

<div class="section" style="position: relative;">
    <h2 class="gradient-text">If you'd like to sent me a message</h2>
    <form on:submit={handleSubmit} class="contact-form">
        <div class="contact-form-group-1">
            <div class="form-group">
                <label for="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    bind:value={name}
                    required
                    disabled={alreadyUsed}
                    placeholder="First name + Last name"
                />
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    bind:value={email}
                    required
                    disabled={alreadyUsed}
                    placeholder="your@email.com"
                />
            </div>
        </div>

        <div class="form-group" style="width: calc(100% - 15rem)">
            <label for="message">Message</label>
            <textarea
                id="message"
                bind:value={message}
                required
                disabled={alreadyUsed}
                placeholder="Your message here..."
                rows="4"
            ></textarea>
        </div>
        <div
            style="display: flex; flex-direction: row; align-items: space-between;"
        >
            <div style="display: flex-direction: column;">

                <div
                    class="form-group"
                    style="display: flex; align-items: flex-start;"
                >
                    <div
                        id="turnstile-container"
                        class="turnstile-container"
                        data-sitekey={import.meta.env.VITE_TURNSTILE_KEY}
                        data-callback="javascriptCallback"
                    ></div>
                </div>
                <div class="form-group">
                    <p
                        style="margin: 1rem 0; font-size: medium; font-style: italic"
                    >
                        {#if alreadyUsed}
                            <span style="color: var(--primary);">
                                Thanks for the message, i'll be answering you
                                via email.<br />
                                <b
                                    >Please consider that this is a direct
                                    message service, so avoid spam</b
                                >
                            </span>
                        {:else}
                            <b
                                >If everything is good, i'll check your message
                                asap 👍</b
                            >
                            <br />
                            <span
                                style="font-style: italic; font-size: 0.8rem; color: var(--primary);"
                            >
                                By clicking the button below, you agree to the <a
                                    style="color: var(--primary);"
                                    href="/documents/terms-conditions.pdf"
                                    >terms and conditions</a
                                >
                            </span>
                        {/if}
                    </p>
                </div>
            </div>

        </div>
        <img
            src="/images/oafbrnva12sd.png"
            alt="Decorative image"
            aria-hidden="true"
            class="contact-form-decorative-plant"
        />
        <span style="font-style: italic; font-size: 0.8rem;">/ᐠ ̥  ̮  ̥ᐟ\ฅ</span>
        <button type="submit" class="submit-btn" disabled={!isFormValid}>
            Send message
        </button>
    </form>
</div>

<style>
    .contact-form {
        margin-top: 2rem;
    }

    .form-group {
        width: 100%;
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text);
        font-weight: 500;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid rgba(70, 53, 177, 0.1);
        border-radius: 0.5rem;
        background: white;
        transition: all 0.3s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(70, 53, 177, 0.1);
    }

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

    .turnstile-container {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 400px) {
        .turnstile-container {
            overflow: auto;
        }
    }

    .contact-form-group-1 {
        width: 100%;
        display: flex;
        gap: 1rem;
        @media (max-width: 640px) {
            flex-wrap: wrap;
            gap: 0rem;
        }
    }

    .contact-form-decorative-plant {
        width: 15rem; 
        position: absolute; 
        /* .8 + .8 + 1rem calc */
        bottom: calc(2.5rem + 32px); 
        z-index: 1; 
        right: 0;
    }
    @media (max-width: 768px) {
        .contact-form-decorative-plant {
            bottom: calc(2rem + 32px);
            z-index: -1;
            opacity: 0.3;
        }
    }
</style>
